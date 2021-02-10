import { Controller, UseGuards, Post, Body, Get, Param, Put, Delete, SetMetadata } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../Auth/jwt-auth.guard';
import { User } from './user.entity';
import { ApiTags } from '@nestjs/swagger';
import { FcmDTO } from './fcmTokenDTO';
import { jwtConstants } from '../Auth/constants';
import { Roles } from '../Auth/roles.decorator'
var CryptoJS = require("crypto-js");

@ApiTags('User')
@Controller('User')
export class UserController {
    constructor(private service: UserService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    @Roles('admin')
    async saveUser(@Body() req: User) {
        if (!req.password) {
            req['password'] = CryptoJS.AES.encrypt(req.mobile, jwtConstants.secret).toString();
        }
        return this.service.save(req)
    }

    @Roles('admin')
    @UseGuards(JwtAuthGuard)
    @Get('/all')
    getAllUsers() {
        return this.service.findAll();
    }

    @Roles('admin')
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.service.findOne(id)
    }

    @Roles('admin')
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    updateUser(@Param('id') id: string, @Body() req: User) {
        if (req.password)
            req['password'] = CryptoJS.AES.encrypt(req.mobile, jwtConstants.secret).toString();
        return this.service.update(id, req);
    }



    /* PUT  Address End Point */
    @Roles('admin', 'student', 'agent', 'fair', 'employee')
    @UseGuards(JwtAuthGuard)
    @Put('/updateFcm/:userId')
    updateFCMToken(@Param('userId') userId: string, @Body() req: FcmDTO) {
        return this.service.updateFCm(userId, req);
    }

    @Roles('admin')
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.service.remove(id)
    }

}
