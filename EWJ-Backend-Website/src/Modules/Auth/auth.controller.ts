import {
  Controller,
  UseGuards,
  Post,
  Body,
  Param,
  Request,
  Put,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthEndPointGuard } from './authendpoint.guard';

import { ApiTags, ApiHeader } from '@nestjs/swagger';
import { JwtAuthGuard } from './jwt-auth.guard';
import { refreshToken } from './refreshTokenDTO';
import { ChangePasswordDTO, LoginDTO, RegisterDTO } from './dtos/auth.dto';
import { User } from '../User/user.entity';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiHeader({ name: 'authrization', description: 'Login Access Token' })
  @UseGuards(AuthEndPointGuard)
  @Post('/login')
  async login(@Body() body: LoginDTO) {
    return this.authService.login(body);
  }

  @UseGuards(AuthEndPointGuard)
  @Post('/register')
  async register(@Body() user: User) {
    return this.authService.register(user);
  }

  @UseGuards(AuthEndPointGuard)
  @Post('/resetPassword/:email')
  async resetPassword(@Param('email') email: string) {
    return this.authService.resetPassword(email);
  }

  @UseGuards(AuthEndPointGuard)
  @Post('/changePassword/:code')
  async changePassword(@Param('code') code: string, @Body() body: LoginDTO) {
    return this.authService.changePassword(code, body);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/changePassword')
  async changePasswordForUser(
    @Body() body: ChangePasswordDTO,
    @Request() req: Request,
  ) {
    return this.authService.changePass(body, req.headers);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/logout')
  async logout(@Request() req: Request) {
    return this.authService.logout(req.headers);
  }

  @UseGuards(AuthEndPointGuard)
  @Post('/requestToken/:mackAddress')
  async requestToken(@Param('mackAddress') mackAddress: string) {
    return this.authService.requestToken(mackAddress);
  }

  @UseGuards(AuthEndPointGuard)
  @Put('refreshToken')
  async refreshToken(@Body() oldtoken: refreshToken) {
    return this.authService.refreshToken(oldtoken.email, oldtoken.oldtoken);
  }
}
