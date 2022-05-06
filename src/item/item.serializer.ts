import { Item } from '@prisma/client';

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

export class ItemListSerializer {
  private serializers: ItemSerializer[];

  constructor(private objects: Item[]) {
    this.serializers = this.objects.map((o) => new ItemSerializer(o));
  }

  toJSON() {
    return this.serializers.map((s) => s.toJSON());
  }

  getErrors() {
    return this.serializers.flatMap((s) => s.getErrors());
  }
}
