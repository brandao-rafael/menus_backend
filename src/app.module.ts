import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { CategoriesService } from './services/categories.service';
import { ProductsService } from './services/products.service';
import { MenuService } from './services/menu.service';
import { CategoriesController } from './controllers/categories.controller';
import { MenuController } from './controllers/menu.controller';
import { ProductsController } from './controllers/products.controller';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ProductsController, MenuController],
  providers: [AppService, PrismaService, CategoriesService, ProductsService, MenuService],
})
export class AppModule {}
