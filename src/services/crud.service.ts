import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class CrudService<TModel extends ModelActions> {
  constructor(protected model: TModel) {}

  async create(payload: any): Promise<TModel> {
    try {
      return await this.model.create({
        data: payload,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(): Promise<TModel[]> {
    try {
      return this.model.findMany();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string) {
    try {
      return this.model.findUnique({ where: { id } });
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, data: any) {
    try {
      return this.model.update({ where: { id }, data });
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(id: string) {
    try {
      return this.model.delete({ where: { id } });
    } catch (error) {
      throw new Error(error);
    }
  }
}
