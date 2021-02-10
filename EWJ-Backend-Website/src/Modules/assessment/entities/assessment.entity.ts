import { Document }                    from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty }                 from '@nestjs/swagger';
import { Localized }                   from '../../../shared/localized';
import { SEO }                         from '../../../shared/SEO';
import { OBaseEntity }                 from '../../../shared/base-entity';


export type AssessmentDocument = Assessment & Document;

@Schema()
export class Assessment extends OBaseEntity {

  @ApiProperty({ type: Localized })
  @Prop(() => Localized)
  title: Localized;

  @ApiProperty({ type: Localized })
  @Prop(() => Localized)
  description: Localized;

  @ApiProperty()
  @Prop()
  image: string;

  @ApiProperty()
  @Prop()
  valueDate: Date;

  @ApiProperty()
  @Prop()
  author: string;

  @ApiProperty({ type: Localized })
  @Prop(() => Localized)
  body: Localized;


  @ApiProperty({ type: SEO })
  @Prop(() => SEO)
  SEO: SEO;
}

export const AssessmentSchema = SchemaFactory.createForClass(Assessment);
AssessmentSchema.index({ '$**': 'text' });