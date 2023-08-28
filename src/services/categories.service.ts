import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CrudService } from './crud.service';

@Injectable()
export class CategoriesService extends CrudService<typeof PrismaService.prototype.category> {
  constructor(protected prisma: PrismaService) {
    super(prisma.category);
  }

  async findOne(id: string) {
    return this.prisma.category.findUnique({
      where: { id },
      include: { products: true },
    });
  }

  async findByName(name: string) {
    return this.prisma.category.findFirst({
      where: { name },
    });
  }
}
