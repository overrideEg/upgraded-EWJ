import { IsString, IsEmail, MinLength, MaxLength, IsOptional, IsMobilePhone, IsAlphanumeric } from "class-validator";
import { ApiProperty, PartialType } from "@nestjs/swagger";
import { User } from "../../User/user.entity";

export class LoginDTO {
    @ApiProperty({ description: 'email of user need login', required: true })
    email: string;

    @ApiProperty({ description: 'passweord of user', required: true, minimum: 8 })
    password: string;
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}

export class RegisterDTO extends PartialType(User) {
    @ApiProperty({ description: 'user full name', required: true })
    @IsString()
    name: string;

    @ApiProperty({ description: 'user emaiil', required: true })
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'password', required: true, minLength: 8 })
    @MinLength(8)
    @MaxLength(16)
    @IsAlphanumeric()
    password: string;

    @ApiProperty({ required: true })
    @IsMobilePhone()
    mobile: string;
}

export class ChangePasswordDTO extends PartialType(LoginDTO) {
    @ApiProperty({ description: 'old passweord of user', required: true, minimum: 8 })
    @IsAlphanumeric()
    oldPassword: string;
}

export class verifyUserDTO {
    @ApiProperty()
    @IsEmail()
    email: string;
    @ApiProperty()
    @IsString()
    tempCode: string;
}
