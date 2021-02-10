import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document }                    from 'mongoose';
import { OBaseEntity }                 from '../../../shared/base-entity';
import { ApiProperty }                 from '@nestjs/swagger';

export type ContactUsDocument = ContactUs & Document;

@Schema()
export class ContactUs extends OBaseEntity {
  @ApiProperty()
  @Prop()
  name: string;
  @ApiProperty()
  @Prop()
  email: string;
  @ApiProperty()
  @Prop()
  phone: string;
  @ApiProperty()
  @Prop()
  company: string;
  @ApiProperty()
  @Prop()
  jobTitle: string;
  @ApiProperty()
  @Prop()
  country: string;
  @ApiProperty()
  @Prop()
  industry: string;
}

export const ContactUsSchema = SchemaFactory.createForClass(ContactUs);