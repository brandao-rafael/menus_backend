import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CrudService } from './crud.service';

@Injectable()
export class CategoriesService extends CrudService {
  constructor(protected prisma: PrismaService) {
    super(prisma.category);
  }

  async findOne(id: string) {
    return this.prisma.category.findUnique({
      where: { id },
      include: { products: true },
    });
  }
}
