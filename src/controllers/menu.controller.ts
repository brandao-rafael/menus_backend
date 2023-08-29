import { Controller } from '@nestjs/common';
import { MenuService } from 'src/services/menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { CrudController } from './crud.controller';

@Controller('menu')
export class MenuController extends CrudController<MenuService, CreateMenuDto> {
  constructor(protected readonly menuService: MenuService) {
    super(menuService);
  }
}
