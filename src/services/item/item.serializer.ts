import { Item } from '@prisma/client';
import { arrayOf } from 'src/utils/response';

export class ItemSerializer {
  private errors = new Set<string>();

  constructor(private object: Item) {
    this.#validateDate();
  }

  toJSON() {
    return {
      id: this.object.id,
      content: this.object.content,
      updatedAt: this.object.updatedAt,
      createdAt: this.object.createdAt,
    };
  }

  getErrors(): string[] {
    return Array.from(this.errors);
  }

  #validateDate() {
    const { updatedAt, createdAt } = this.object;
    if (updatedAt >= createdAt) {
      return;
    }

    this.errors.add('updatedAt must not be before createdAt');
  }
}

export class ItemListSerializer extends arrayOf(ItemSerializer) {}
