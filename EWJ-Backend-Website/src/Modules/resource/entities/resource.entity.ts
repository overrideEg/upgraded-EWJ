import { Document }                    from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { OBaseEntity }                 from '../../../shared/base-entity';
import { ApiProperty }  from '@nestjs/swagger';
import { Localized }    from '../../../shared/localized';
import { SEO } from "src/shared/SEO";



export type ResourceDocument = Resource & Document;

@Schema()
export class Resource extends OBaseEntity{

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

  @ApiProperty({ type: Localized })
  @Prop(() => Localized)
  body: Localized;


  @ApiProperty({ type: SEO })
  @Prop(() => SEO)
  SEO: SEO;
}

export const ResourceSchema = SchemaFactory.createForClass(Resource);
ResourceSchema.index({ '$**': 'text' });