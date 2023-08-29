import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CrudController } from './crud.controller';

@Controller('products')
export class ProductsController extends CrudController<ProductsService, UpdateProductDto> {
  constructor(protected readonly productService: ProductsService) {
    super(productService);
  }

  @Post()
  create(@Body() data: CreateProductDto) {
    return this.productService.create(data);
  }
}
