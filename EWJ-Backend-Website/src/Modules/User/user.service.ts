import { Injectable, BadRequestException } from '@nestjs/common';
import { User, UserDocument } from './user.entity';
import { FcmDTO } from './fcmTokenDTO';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserType } from './userType.enum';
import { jwtConstants } from '../Auth/constants';

var CryptoJS = require('crypto-js');

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private repo: Model<UserDocument>,
    private jwtService: JwtService,
  ) { }

  async findAdminsAndEmployees(): Promise<User[]> {
    return await this.repo
      .find({ userType: UserType.admin })
      .exec();
  }

  async findByToken(token: string) {
    let decodedToken = this.jwtService.decode(token) as any;
    return await this.findByEmail(decodedToken.email);
  }

  async findAll(): Promise<User[]> {
    return this.repo.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return await this.repo.findOne({ _id: id }).exec();
  }

  async update(id: string, req: User) {
    let user = await this.repo.findOne({ _id: id }).exec();
    if (req.password && user.password === Buffer.from(req.password).toString(CryptoJS.enc.Utf8))
      delete req.password;
    req['id'] = id;
    this.repo.update({}, req);
    await this.repo.findOneAndUpdate({ _id: id }, req).exec();
    return await this.repo.findOne({ _id: id }).exec();
  }

  async register(registration): Promise<User | PromiseLike<User>> {
    let existsUser = await this.repo
      .findOne({ email: registration.email, mobile: registration.mobile })
      .exec();
    if (existsUser != null) {
      throw new BadRequestException('user already exists');
    } else {
      let user = await this.repo.create(registration);
      return user;
    }
  }

  async login(emailorMobile: string) {
    let existUser = await this.repo
      .findOne({ email: emailorMobile })
      .select('+password')
      .populate('agent')
      .populate('student')
      .populate('fair')
      .exec();
    if (!existUser) {
      throw new BadRequestException('User Not Found');
    } else {
      return existUser;
    }
  }

  async remove(id: string) {
    return await this.repo.findOneAndDelete({ _id: id }).exec();
  }

  async findByEmail(email: string): Promise<User> {
    return this.repo.findOne({ email: email }).exec();
  }

  async save(req: User) {
    var ciphertext = CryptoJS.AES.encrypt(req.password, jwtConstants.secret).toString();
    req.password = ciphertext;

    return await this.register(req);
  }

  async updateFCm(userId: string, req: FcmDTO) {
    let existsUser = await this.repo.findOne({ id: userId }).exec();
    existsUser.fcmToken = req.fcmToken;
    await this.update(userId, existsUser);
    return existsUser;
  }
}
