import { Item } from '@prisma/client';
import { arrayOf } from '../../../src/utils/response';

export class ItemSerializer {
  private errors = new Set<string>();

  constructor(private object: Item) {}

  toJSON() {
    return {
      id: this.object.id,
      content: this.object.content,
      updatedAt: this.object.updatedAt,
      createdAt: this.object.createdAt,
    };
  }
}

export class ItemListSerializer extends arrayOf(ItemSerializer) {}
