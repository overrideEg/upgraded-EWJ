import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { UserType } from '../User/userType.enum';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector,private jwtService: JwtService) { }

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        let authHeader: string = request.headers.authorization;
        let Token = authHeader.substring(7);
        const user: any = this.jwtService.decode(Token)
        return matchRoles(roles, user.userType);
    }
}
function matchRoles(roles: string[], userType: UserType) {
    let role = roles.find(roles => roles === userType.toString());
    return role && role !== null
}