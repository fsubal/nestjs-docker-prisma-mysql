import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ItemDto } from './item.dto';

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const items = await this.prisma.item.findMany();

    return items.map((item) => new ItemDto(item));
  }

  async findById(id: number) {
    const item = await this.prisma.item.findFirst({
      where: { id },
    });

    if (!item) {
      return null;
    }

    return new ItemDto(item);
  }
}
