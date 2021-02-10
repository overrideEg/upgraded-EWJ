import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// import * as mongoose   from 'mongoose'
import { OBaseEntity } from 'src/shared/base-entity';
import { ApiProperty } from '@nestjs/swagger';
import { Localized }   from 'src/shared/localized';
import { Document }    from 'mongoose';
import { SEO }         from '../../../shared/SEO';


export type SolutionDocument = Solution & Document;

@Schema()
export class Solution extends OBaseEntity{

  @ApiProperty({ type: Localized })
  @Prop(() => Localized)
  title: Localized;

  @ApiProperty({ type: Localized })
  @Prop(() => Localized)
  description: Localized;

  @ApiProperty()
  @Prop()
  image: string;

  @ApiProperty({ type: Localized })
  @Prop(() => Localized)
  body: Localized;


  @ApiProperty({ type: SEO })
  @Prop(() => SEO)
  SEO: SEO ;


}

export const SolutionSchema = SchemaFactory.createForClass(Solution);
