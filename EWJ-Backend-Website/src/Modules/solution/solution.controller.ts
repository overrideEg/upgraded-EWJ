import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { SolutionService }                                            from './solution.service';
import { ApiTags }                                                    from '@nestjs/swagger';
import { Solution }                                                   from './entities/solution.entity';
import { JwtAuthGuard }                                               from '../Auth/jwt-auth.guard';

@ApiTags('Solution')
@Controller('Solution')
export class SolutionController {
  constructor(private readonly solutionService: SolutionService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async saveSolution(@Body() req: Solution): Promise<Solution> {
    return this.solutionService.save(req);
  }

  /* GET All Solution End Point */
  // @UseGuards(JwtAuthGuard)
  @Get('/all')
  getAllUniversities(): Promise<Solution[]> {
    return this.solutionService.findAll();
  }

  // @Get('/search')
  // search(@Query('word') word: string): Promise<Solution[]> {
  //   return this.solutionService.search(word);
  // }

  /* GET One Solution End Point */

  // @UseGuards(JwtAuthGuard)
  @Get('/:id')
  findOne(@Param('id') id: string): Promise<Solution> {
    return this.solutionService.findOne(id);
  }

  /* PUT  Solution End Point */
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateSolution(@Param('id') id: string, @Body() req: Solution): Promise<any> {
    return this.solutionService.update(id, req);
  }

  /* Delete  Solution End Point */
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteSolution(@Param('id') id: string): Promise<any> {
    return this.solutionService.remove(id);
  }
}
