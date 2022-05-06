import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ItemListSerializer, ItemSerializer } from './item.serializer';

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const items = await this.prisma.item.findMany();

    return new ItemListSerializer(items);
  }

  async findById(id: number) {
    const item = await this.prisma.item.findFirst({
      where: { id },
    });

    if (!item) {
      return null;
    }

    return new ItemSerializer(item);
  }
}
