import { Injectable } from '@nestjs/common';

import { InjectModel }                  from '@nestjs/mongoose';
import { Model }                        from 'mongoose';
import { ContactUs, ContactUsDocument } from './entities/contact-us.entity';
@Injectable()
export class ContactUsService {
  constructor(
    @InjectModel(ContactUs.name) private repo: Model<ContactUsDocument>,
  ) { }
  async save(req: ContactUs) {
    let saved = await this.repo.create(req);
    return saved;
  }
  async findAll(): Promise<ContactUs[]> {
    return this.repo.find().exec();
  }
  async findOne(id: string): Promise<ContactUs> {
    return this.repo.findById(id).exec();
  }
  async update(id: string, req: ContactUs): Promise<ContactUs> {
    return await this.repo.findByIdAndUpdate(id, req);
  }
  async remove(id: string): Promise<ContactUs> {
    return await this.repo.findByIdAndRemove(id);
  }
}