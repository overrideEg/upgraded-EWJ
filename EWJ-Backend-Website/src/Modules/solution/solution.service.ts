import { Injectable }  from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model }                      from "mongoose";
import { Solution, SolutionDocument } from './entities/solution.entity';

@Injectable()
export class SolutionService {
  constructor(
    @InjectModel(Solution.name) private repo: Model<SolutionDocument>,
  ) {}

  async save(req: Solution) {
    return await this.repo.create(req);
  }

  // async search(word: string): Promise<Solution[]> {
  //   return await this.repo
  //     .find({ $text: { $search: `${word}` } })
  //     .populate('city')
  //     .exec();

  // }

  async findAll(): Promise<Solution[]> {
    return this.repo.find().exec();
  }

  async findOne(id: string): Promise<Solution> {
    return this.repo.findOne({ _id: id }).exec();
  }

  async update(id: string, req: Solution): Promise<Solution> {
    await this.repo.findOneAndUpdate({ _id: id }, req).exec();
    return this.repo.findOne({ _id: id }).exec();
  }

  async remove(id: string): Promise<Solution> {
    return this.repo.findOneAndRemove({ _id: id });
  }

}
