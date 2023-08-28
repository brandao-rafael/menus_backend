import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

  async create(payload: Prisma.MenuCreateInput) {
    return await this.prisma.menu.create({
      data: payload,
    });
  }

  async findAll() {
    return this.prisma.menu.findMany();
  }

  async findOne(id: string) {
    return this.prisma.menu.findUnique({ where: { id } });
  }

  async update(id: string, data: Prisma.MenuUpdateInput) {
    return this.prisma.menu.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.menu.delete({ where: { id } });
  }
}
