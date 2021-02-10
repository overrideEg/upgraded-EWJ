import { Injectable }               from '@nestjs/common';
import { InjectModel }              from '@nestjs/mongoose';
import { Model }                    from 'mongoose';
import { Product, ProductDocument } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private repo: Model<ProductDocument>,
  ) { }

  async save(req: Product) {
    return await this.repo.create(req);
  }

  async findAll(): Promise<ProductDocument[]> {
    return this.repo.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    return this.repo.findById(id).exec();
  }

  async update(id: string, req: Product): Promise<Product> {
    return this.repo.findByIdAndUpdate(id, req);
  }

  async remove(id: string): Promise<Product> {
    return this.repo.findByIdAndRemove(id);
  }
}
