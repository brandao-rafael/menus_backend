import { Controller } from '@nestjs/common';
import { CategoriesService } from 'src/services/categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CrudController } from './crud.controller';

@Controller('categories')
export class CategoriesController extends CrudController<CategoriesService, CreateCategoryDto> {
  constructor(protected categoriesService: CategoriesService) {
    super(categoriesService);
  }
}
