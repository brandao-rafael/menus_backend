import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class CrudService {
  constructor(protected model: any) {}

  async create(payload: any) {
    return await this.model.create({
      data: payload,
    });
  }

  async findAll() {
    try {
    return this.model.findMany();
    } catch (error) {
        console.log(error)
    }
  }

  async findOne(id: string) {
    return this.model.findUnique({ where: { id } });
  }

  async update(id: string, data: any) {
    return this.model.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.model.delete({ where: { id } });
  }
}
