import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document }                    from 'mongoose';
import { ApiProperty }                 from '@nestjs/swagger';
import { Localized }                   from '../../../shared/localized';
import { SEO }                         from '../../../shared/SEO';

export type ProductDocument = Product & Document;

@Schema()
export class Product {


  @ApiProperty({ type: Localized })
  @Prop(() => Localized)
  title: Localized;

  @ApiProperty({ type: Localized })
  @Prop(() => Localized)
  description: Localized;

  @ApiProperty()
  @Prop()
  image: string;

  @ApiProperty({ type: SEO })
  @Prop(() => SEO)
  SEO: SEO ;

}

export const ProductSchema = SchemaFactory.createForClass(Product);