import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  create(@Body() data) {
    return this.productService.create(data);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data) {
    return this.productService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}