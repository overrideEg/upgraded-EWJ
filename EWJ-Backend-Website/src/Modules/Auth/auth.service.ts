import {
  Injectable,
  UnauthorizedException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from '../User/user.service';
import { JwtService } from '@nestjs/jwt';
import { MailerService } from '@nestjs-modules/mailer';
import { User } from '../User/user.entity';
import { jwtConstants } from './constants';
import { ChangePasswordDTO, LoginDTO, RegisterDTO } from './dtos/auth.dto';

// eslint-disable-next-line @typescript-eslint/no-var-requires
var CryptoJS = require('crypto-js');

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private readonly mailerService: MailerService,
  ) { }

  async login(user: LoginDTO): Promise<{ token: string; user: User }> {
    let userStored = await this.usersService.login(user.email);

    if (!userStored) throw new NotFoundException('User Not Found');

    var bytes = CryptoJS.AES.decrypt(userStored.password, jwtConstants.secret);
    var storedDecryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (user.password !== storedDecryptedPassword) {
      throw new UnauthorizedException('invalid password');
    }
    // var bytes  = );

    const payload = {
      id: userStored.id,
      email: userStored.email,
      userType: userStored.userType,
      user: userStored,
    };
    return { token: this.jwtService.sign(payload), user: userStored };
  }

  requestToken(mackAddress: string) {
    const payload = { mackAddress: mackAddress };
    return { token: this.jwtService.sign(payload, { expiresIn: '1d' }) };
  }

  async register(registration: RegisterDTO) {
    let createdUser: User;
    try {
      var ciphertext = CryptoJS.AES.encrypt(
        registration.password,
        jwtConstants.secret,
      ).toString();
      registration.password = ciphertext;

      createdUser = await this.usersService.register(registration);
      this.sendInvitationEmail(registration.email);
    } catch (error) {
      throw new InternalServerErrorException(error.message, error.code);
    }
    const payload = {
      email: createdUser.email,
      id: createdUser.id,
      userType: createdUser.userType,
    };
    return { token: this.jwtService.sign(payload), user: createdUser };
  }

  async resetPassword(email: string) {
    let user = await this.usersService.findByEmail(email);
    if (!user) throw new NotFoundException('User Not Found');
    const random = randomString(8);
    let sent;
    try {
      sent = await this.sendResetPasswordEmail(user.email, random);
    } catch (e) { }
    user.tempCode = random;
    await this.usersService.update(user.id, user);
    return {
      status: sent !== undefined && sent.accepted.length > 0,
      messageId: sent.messageId,
    };
  }

  async changePassword(code: string, body: LoginDTO) {
    let userStored = await this.usersService.findByEmail(body.email);

    if (!userStored) throw new NotFoundException('User Not Found');

    if (userStored.tempCode !== code)
      throw new UnauthorizedException('invalid Temp code');

    userStored.password = CryptoJS.AES.encrypt(
      body.password,
      jwtConstants.secret,
    ).toString();

    // userStored.password = Buffer.from(body.password).toString('base64')
    userStored.tempCode = null;
    await this.usersService.update(userStored.id, userStored);

    return await this.usersService.findOne(userStored.id);
  }

  sendInvitationEmail(email: string) {
    this.mailerService.sendMail({
      to: email, // list of receivers
      // from: 'noreply@nestjs.com', // sender address
      subject: 'SIT APP Registration Complete ✔', // Subject line
      // text: 'welcome', // plaintext body
      html: `
      <h1>SIT APP Registration Complete</h1>`, // HTML body content
    });
  }

  async sendResetPasswordEmail(email: string, rand: string): Promise<string> {
    return await this.mailerService.sendMail({
      to: email,
      subject: 'SIT APP Reset Password',
      html: `
      <h3>this is reset password request you are requested </h3>
      <h4>if you does not requested this message please forgot it </h4>
      your code id <h1 style="color:orange;">${rand}</h1>
      <b style="color:orange;">Thank you for using SIT APP </b>`,
    });
  }

  async refreshToken(email: string, oldtoken: string) {
    let decodedToken = this.jwtService.decode(oldtoken) as any;
    if (
      decodedToken.email == email &&
      decodedToken.exp <= new Date().getTime()
    ) {
      let user = await this.usersService.findByEmail(email);
      const payload = { email: email, userType: user.userType, id: user.id };
      return { token: this.jwtService.sign(payload), user: user };
    } else {
      throw new UnauthorizedException('Can Not Refresh Token');
    }
  }

  logout(headers: Headers) {
    /// get Access Token
    let token: string;
    let authHeader = headers['authorization'] as string;
    token = authHeader.substr(7);
  }

  async changePass(body: ChangePasswordDTO, headers: Headers) {
    /// get Access Token
    let token: string;
    let authHeader = headers['authorization'] as string;
    token = authHeader.substr(7);

    // decode access token
    let decodedToken = this.jwtService.decode(token) as any;

    // check token sender
    if (decodedToken.email != body.email)
      throw new UnauthorizedException(
        'You Are Can Not Change Password For Other User',
      );

    // get user and update his password
    let user = await this.usersService.findByEmail(body.email);

    var userPassword = CryptoJS.AES.decrypt(user.password, jwtConstants.secret);
    var storedDecryptedPassword = userPassword.toString(CryptoJS.enc.Utf8);

    if (storedDecryptedPassword !== body.oldPassword)
      throw new UnauthorizedException('old password is not equal new password');

    // user.password = Buffer.from(body.password).toString('base64');
    user.password = CryptoJS.AES.encrypt(
      body.password,
      jwtConstants.secret,
    ).toString();

    return await this.usersService.update(user.id, user);
    // return true;
  }
}

function randomString(length) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
