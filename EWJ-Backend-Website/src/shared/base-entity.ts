import { Prop } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';

export abstract class OBaseEntity {
  @Prop({ auto: true, type: SchemaTypes.ObjectId })
  id: any;
}
