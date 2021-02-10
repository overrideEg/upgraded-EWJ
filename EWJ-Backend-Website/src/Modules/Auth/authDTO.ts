import { IsString, IsEmail, MinLength, MaxLength, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AuthDTO {
    @ApiProperty({ description: 'email of user need login', required: true })
    @IsString()
    @IsEmail()
    email: string;
    @IsString()
    @IsOptional()
    oldPassword: string;
    @IsString()
    @MinLength(8)
    @MaxLength(16)
    @ApiProperty({ description: 'passweord of user', required: true , minimum:8})
    password: string;
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}


