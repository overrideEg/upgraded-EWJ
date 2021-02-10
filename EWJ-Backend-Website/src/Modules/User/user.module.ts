import { Module } from '@nestjs/common';
import { User, UserSchema } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../Auth/constants';
import { MongooseModule } from '@nestjs/mongoose/dist';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '24h' },
        })],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule { }
