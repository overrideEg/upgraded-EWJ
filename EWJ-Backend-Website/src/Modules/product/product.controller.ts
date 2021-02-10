import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductService }                                             from './product.service';
import { ApiTags }                                                    from '@nestjs/swagger';
import { JwtAuthGuard }                                               from '../Auth/jwt-auth.guard';
import { Product }                                                    from './entities/product.entity';

@ApiTags('Product')
@Controller('Product')
export class ProductController {

  /* CRUD End Points for Product Created By Override */


  constructor(private service: ProductService) { }

  /* POST Product End Point */

  @UseGuards(JwtAuthGuard)
  @Post()
  async saveProduct(@Body() req: Product): Promise<Product> {
    return this.service.save(req);
  }


  /* GET All Products End Point */
  // @UseGuards(JwtAuthGuard)
  @Get('/all')
  getAllProducts(): Promise<Product[]> {
    return this.service.findAll();
  }


  /* GET One Product End Point */
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product> {
    return this.service.findOne(id);
  }


  /* PUT  Product End Point */
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() req: Product): Promise<any> {
    return this.service.update(id, req);
  }


  /* Delete  Product End Point */
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteProduct(@Param('id') id: string): Promise<any> {
    return this.service.remove(id);
  }

  /* End of Product Controller Class

   */
}