import { Item } from '@prisma/client';
import { createErrorMap } from '../../utils/errors';
import { arrayOf } from '../../utils/response';

export class ItemSerializer {
  private errors = createErrorMap();

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

  getErrors() {
    return this.errors.toArray();
  }

  #validateDate() {
    const { updatedAt, createdAt } = this.object;
    if (updatedAt >= createdAt) {
      return;
    }

    this.errors.add('item.invalid_updated_at');
  }
}

export class ItemListSerializer extends arrayOf(ItemSerializer) {}
