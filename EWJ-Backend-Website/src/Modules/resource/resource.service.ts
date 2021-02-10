import { Injectable }  from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model }                      from "mongoose";
import { Resource, ResourceDocument } from './entities/resource.entity';

@Injectable()
export class ResourceService {
  constructor(
    @InjectModel(Resource.name) private repo: Model<ResourceDocument>,
  ) {}

  async save(req: Resource) {
    req.valueDate = new Date();
    return await this.repo.create(req);
  }

  // async search(word: string): Promise<Resource[]> {
  //   return await this.repo
  //     .find({ $text: { $search: `${word}` } })
  //     .populate('city')
  //     .exec();

  // }

  async findAll(): Promise<Resource[]> {
    return this.repo.find().exec();
  }

  async findOne(id: string): Promise<Resource> {
    return this.repo.findOne({ _id: id }).exec();
  }

  async update(id: string, req: Resource): Promise<Resource> {
    await this.repo.findOneAndUpdate({ _id: id }, req).exec();
    return this.repo.findOne({ _id: id }).exec();
  }

  async remove(id: string): Promise<Resource> {
    return this.repo.findOneAndRemove({ _id: id });
  }
}
