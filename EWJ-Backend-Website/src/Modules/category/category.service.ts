import { Injectable }                 from '@nestjs/common';
import { Model }                      from "mongoose";
import { Category, CategoryDocument } from './entities/category.entity';
import { InjectModel }                from '@nestjs/mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private repo: Model<CategoryDocument>,
  ) {}

  async save(req: Category) {
    return await this.repo.create(req);
  }

  // async search(word: string): Promise<Category[]> {
  //   return await this.repo
  //     .find({ $text: { $search: `${word}` } })
  //     .populate('city')
  //     .exec();

  // }

  async findAll(): Promise<Category[]> {
    return this.repo.find().exec();
  }

  async findOne(id: string): Promise<Category> {
    return this.repo.findOne({ id: id }).exec();
  }

  async update(id: string, req: Category): Promise<Category> {
    return this.repo.findByIdAndUpdate(id, req);
  }

  async remove(id: string): Promise<Category> {
    return this.repo.findByIdAndRemove(id);
  }
}
