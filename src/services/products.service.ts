import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CrudService } from './crud.service';

@Injectable()
export class ProductsService extends CrudService {
  constructor(protected prisma: PrismaService) {
    super(prisma.product);
  }
}
