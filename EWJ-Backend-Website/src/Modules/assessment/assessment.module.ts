import { Module }                       from '@nestjs/common';
import { AssessmentService }            from './assessment.service';
import { AssessmentController }         from './assessment.controller';
import { Assessment, AssessmentSchema } from './entities/assessment.entity';
import { MongooseModule }               from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Assessment.name, schema: AssessmentSchema }])],
  controllers: [AssessmentController],
  providers: [AssessmentService],
  exports: [AssessmentService],
})
export class AssessmentModule {}
