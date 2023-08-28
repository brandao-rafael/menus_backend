import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CrudService } from './crud.service';

@Injectable()
export class ProductsService extends CrudService {
  constructor(protected prisma: PrismaService) {
    super(prisma.product);
  }

  async findAll() {
    const time = new Date();
    const isNight = time.getHours() >= 18 || time.getHours() <= 6;
    try {
      return this.prisma.product.findMany({
        where: {
          menu: {
            name: isNight ? 'noturno' : 'diurno',
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
