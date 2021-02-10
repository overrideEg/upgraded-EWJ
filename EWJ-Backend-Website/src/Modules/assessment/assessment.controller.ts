import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { AssessmentService }                                          from './assessment.service';
import { ApiTags }                                         from '@nestjs/swagger';
import { Assessment }                                      from './entities/assessment.entity';
import { JwtAuthGuard }                                    from '../Auth/jwt-auth.guard';

@ApiTags('Assessment')
@Controller('Assessment')
export class AssessmentController {
  constructor(private readonly assessmentService: AssessmentService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async saveAssessment(@Body() req: Assessment): Promise<Assessment> {
    return this.assessmentService.save(req);
  }

  /* GET All Assessment End Point */

  // @UseGuards(JwtAuthGuard)
  @Get('/all')
  getAllUniversities(): Promise<Assessment[]> {
    return this.assessmentService.findAll();
  }

  // @Get('/search')
  // search(@Query('word') word: string): Promise<Assessment[]> {
  //   return this.assessmentService.search(word);
  // }

  /* GET One Assessment End Point */

  // @UseGuards(JwtAuthGuard)
  @Get('/:id')
  findOne(@Param('id') id: string): Promise<Assessment> {
    return this.assessmentService.findOne(id);
  }

  /* PUT  Assessment End Point */

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateAssessment(@Param('id') id: string, @Body() req: Assessment): Promise<any> {
    return this.assessmentService.update(id, req);
  }

  /* Delete  Assessment End Point */

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteAssessment(@Param('id') id: string): Promise<any> {
    return this.assessmentService.remove(id);
  }
}
