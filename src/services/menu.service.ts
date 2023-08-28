import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CrudService } from './crud.service';

@Injectable()
export class MenuService extends CrudService<typeof PrismaService.prototype.menu> {
  constructor(protected prisma: PrismaService) {
    super(prisma.menu);
  }

  async findAll(): Promise<any> {
    const time = new Date();
    const isNight = time.getHours() >= 18 || time.getHours() <= 6;
    return this.prisma.menu.findMany({
      include: { products: true },
      where: { name: isNight ? 'Noturno' : 'Diurno' },
    });
  }
}
