import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.item.findMany();
  }

  findById(id: number) {
    return this.prisma.item.findFirst({
      where: { id },
    });
  }
}
