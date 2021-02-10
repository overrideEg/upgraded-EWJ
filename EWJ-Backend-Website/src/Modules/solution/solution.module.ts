import { Module }                   from '@nestjs/common';
import { SolutionService }          from './solution.service';
import { SolutionController }       from './solution.controller';
import { MongooseModule }           from '@nestjs/mongoose';
import { Solution, SolutionSchema } from 'src/Modules/solution/entities/solution.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Solution.name, schema: SolutionSchema }])],
  controllers: [SolutionController],
  providers: [SolutionService],
  exports: [SolutionService],
})
export class SolutionModule {}
