import { Module }         from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule }      from '@nestjs/jwt';
import { jwtConstants }   from './constants';
import { AuthService }    from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule }     from '../User/user.module';
import { JwtStrategy }    from './jwt.strategy';

@Module({
    imports: [
      PassportModule.register({ defaultStrategy:'jwt', session: true }),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1h'  },
        }),
        UserModule,
    ],
    controllers: [AuthController],
    providers: [AuthService,JwtStrategy],
    exports:[JwtModule,AuthService]
})
export class AuthModule { }
 