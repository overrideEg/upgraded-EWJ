import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { ResourceService } from './resource.service';
import { JwtAuthGuard } from '../Auth/jwt-auth.guard';
import { Resource } from './entities/resource.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Resource')
@Controller('Resource')
export class ResourceController {
  constructor(private readonly resourcService: ResourceService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async saveResource(@Body() req: Resource): Promise<Resource> {
    return this.resourcService.save(req);
  }

  /* GET All Resource End Point */

  // @UseGuards(JwtAuthGuard)
  @Get('/all')
  getAllResources(): Promise<Resource[]> {
    return this.resourcService.findAll();
  }

  // @Get('/search')
  // search(@Query('word') word: string): Promise<Resource[]> {
  //   return this.assessmentService.search(word);
  // }

  /* GET One Resource End Point */

  // @UseGuards(JwtAuthGuard)
  @Get('/:id')
  findOne(@Param('id') id: string): Promise<Resource> {
    return this.resourcService.findOne(id);
  }

  /* PUT  Resource End Point */

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateResource(@Param('id') id: string, @Body() req: Resource): Promise<any> {
    return this.resourcService.update(id, req);
  }

  /* Delete  Resource End Point */

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteResource(@Param('id') id: string): Promise<any> {
    return this.resourcService.remove(id);
  }
}
