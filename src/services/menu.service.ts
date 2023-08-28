import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CrudService } from './crud.service';

@Injectable()
export class MenuService extends CrudService {
  constructor(protected prisma: PrismaService) {
    super(prisma.menu);
  }
}
