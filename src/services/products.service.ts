import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CrudService } from './crud.service';
import { CategoriesService } from './categories.service';
import CreateProductInterface from 'src/interfaces/create-product.interface';

@Injectable()
export class ProductsService extends CrudService<typeof PrismaService.prototype.product> {
  constructor(protected prisma: PrismaService, private categoryService: CategoriesService) {
    super(prisma.product);
  }

  async findAll(): Promise<any> {
    return this.prisma.product.findMany({
      include: {
        category: {
          select: {
            name: true
          }
        },
        menu: {
          select: {
            name: true
          }
        }
      },
    });
  }

  async create(payload: CreateProductInterface): Promise<any> {
    try {
      const { category, menu, ...restOfPayload } = payload;

      const categoryData = await this.categoryService.findByName(payload.category);
  
      const menuData = await this.prisma.menu.findFirst({
        where: {
          name: payload.menu,
        },
      });
      
      if (!menuData) throw new Error('Menu não encontrado');
      if (!categoryData) throw new Error('Categoria não encontrada');

      return await this.prisma.product.create({
        data: {
          ...restOfPayload,
          categoryId: categoryData.id,
          menuId: menuData.id,
        } as any,
        include: {
          category: {
            select: {
              name: true,
            },
          },
          menu: {
            select: {
              name: true,
            },
          },
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
