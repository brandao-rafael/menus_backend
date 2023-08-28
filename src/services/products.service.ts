import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CrudService } from './crud.service';

@Injectable()
export class ProductsService extends CrudService<typeof PrismaService.prototype.product> {
  constructor(protected prisma: PrismaService) {
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
}
