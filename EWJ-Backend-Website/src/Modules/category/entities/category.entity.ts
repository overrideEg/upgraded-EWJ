import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { ApiProperty }                 from '@nestjs/swagger';
import { Document }                    from 'mongoose';
import { Localized }                   from '../../../shared/localized';
import * as mongoose                   from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {


  @ApiProperty({ type: Localized, description: 'title localized' })
  @Prop({ type: Localized, required: true })
  title: Localized;


  @ApiProperty({ type: Localized, description: 'description localized' })
  @Prop({ type: Localized, required: true })
  description: Localized;

  @ApiProperty()
  @Prop()
  image: string;

  @ApiProperty()
  @Prop()
  valueDate: Date;

  @ApiProperty()
  @Prop([{ type: { type: mongoose.Schema.Types.ObjectId, ref: Category.name } }])
  children: Category[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
