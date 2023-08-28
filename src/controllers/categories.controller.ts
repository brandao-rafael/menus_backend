import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CategoriesService } from 'src/services/categories.service';


@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}
    
    @Post()
    create(@Body() data) {
        return this.categoriesService.create(data);
    }
    
    @Get()
    findAll() {
        return this.categoriesService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.categoriesService.findOne(id);
    }
    
    @Put(':id')
    update(@Param('id') id: string, @Body() data) {
        return this.categoriesService.update(id, data);
    }
    
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.categoriesService.remove(id);
    }
}