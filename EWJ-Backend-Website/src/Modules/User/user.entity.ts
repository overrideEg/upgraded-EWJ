import { ApiProperty } from '@nestjs/swagger';
import { UserType } from './userType.enum';
import { OBaseEntity } from '../../shared/base-entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Agent } from 'http';

export type UserDocument = User & Document;

@Schema()
export class User extends OBaseEntity {
  @ApiProperty({ description: 'user full name', required: true })
  @Prop()
  name: string;

  @ApiProperty({ description: 'password', required: true, minLength: 8 })
  @Prop({ select: false })
  password: string;

  @ApiProperty({ description: 'user emaiil', required: true })
  @Prop({ unique: true })
  email: string;

  @ApiProperty({
    required: true,
    default:
      'https://cdn.pixabay.com/photo/2019/09/13/15/32/graduation-4474213_960_720.png',
  })
  @Prop({
    required: true,
    default:
      'https://cdn.pixabay.com/photo/2019/09/13/15/32/graduation-4474213_960_720.png',
  })
  image: string;

  @ApiProperty({
    required: true,
    enum: [UserType.admin, UserType.user, UserType.vendor],
    default: UserType.user,
  })
  @Prop({
    required: true,
    enum: [UserType.admin, UserType.user, UserType.vendor],
  })
  userType?: UserType;

  @ApiProperty({
    required: true,
    enum: ['male', 'female', 'other'],
    default: 'male',
  })
  @Prop({ required: true, enum: ['male', 'female', 'other'] })
  gender?: string;

  @ApiProperty({ required: false, default: true })
  @Prop({ default: true })
  isActive?: boolean;

  @ApiProperty({ required: true })
  @Prop({ required: true })
  mobile: string;

  @ApiProperty()
  @Prop({})
  fcmToken: string;

  @Prop({ nullable: true })
  tempCode: string;

  @ApiProperty({ default: 'en', required: true })
  @Prop({ default: 'en', required: true })
  defaultLang: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
