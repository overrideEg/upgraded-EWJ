import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class FcmDTO {
    @ApiProperty({ description: 'FCM Token', required: true })
    @IsString()
    fcmToken: string;
   
   
}


