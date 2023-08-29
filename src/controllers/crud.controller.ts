import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
  } from '@nestjs/common';
  
  @Controller('categories')
  export abstract class CrudController <TService extends CrudServiceInterface<Dto>, Dto> {
    constructor(protected readonly service: TService) {}
  
    @Post()
    create(@Body() data: Dto) {
      return this.service.create(data);
    }
  
    @Get()
    findAll() {
      return this.service.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.service.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() data: Dto) {
      return this.service.update(id, data);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.service.remove(id);
    }
  }
  