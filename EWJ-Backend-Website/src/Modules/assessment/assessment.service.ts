import { Injectable }                     from '@nestjs/common';
import { Assessment, AssessmentDocument } from './entities/assessment.entity';
import { InjectModel }                    from '@nestjs/mongoose';
import { Model }                          from 'mongoose';

@Injectable()
export class AssessmentService {
  constructor(
    @InjectModel(Assessment.name) private repo: Model<AssessmentDocument>,
  ) {}

  async save(req: Assessment) {
    req.valueDate = new Date();
    return await this.repo.create(req);
  }

  // async search(word: string): Promise<Assessment[]> {
  //   return await this.repo
  //     .find({ $text: { $search: `${word}` } })
  //     .populate('city')
  //     .exec();

  // }

  async findAll(): Promise<Assessment[]> {
    return this.repo.find().exec();
  }

  async findOne(id: string): Promise<Assessment> {
    return this.repo.findOne({ _id: id }).exec();
  }

  async update(id: string, req: Assessment): Promise<Assessment> {
    await this.repo.findOneAndUpdate({ _id: id }, req).exec();
    return this.repo.findOne({ _id: id }).exec();
  }

  async remove(id: string): Promise<Assessment> {
    return this.repo.findOneAndRemove({ _id: id });
  }
}
