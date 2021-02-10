import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { CategoryService }                                            from './category.service';
import { Category }                                        from './entities/category.entity';
import { ApiTags }                                         from '@nestjs/swagger';
import { JwtAuthGuard }                                    from '../Auth/jwt-auth.guard';

@ApiTags('Category')
@Controller('Category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async saveCategory(@Body() req: Category): Promise<Category> {
    return this.categoryService.save(req);
  }

  /* GET All Category End Point */

  // @UseGuards(JwtAuthGuard)
  @Get('/all')
  getAllUniversities(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  // @Get('/search')
  // search(@Query('word') word: string): Promise<Category[]> {
  //   return this.categoryService.search(word);
  // }

  /* GET One Category End Point */

  // @UseGuards(JwtAuthGuard)
  @Get('/:id')
  findOne(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findOne(id);
  }

  /* PUT  Category End Point */

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateCategory(@Param('id') id: string, @Body() req: Category): Promise<any> {
    return this.categoryService.update(id, req);
  }

  /* Delete  Category End Point */

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteCategory(@Param('id') id: string): Promise<any> {
    return this.categoryService.remove(id);
  }
}
