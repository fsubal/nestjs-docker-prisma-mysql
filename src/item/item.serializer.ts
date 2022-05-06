import { Item } from '@prisma/client';

export class ItemSerializer {
  constructor(private object: Item) {}

  toJSON() {
    return {
      id: this.object.id,
      content: this.object.content,
      createdAt: this.object.createdAt,
    };
  }

  getErrors() {
    return [];
  }
}

export class ItemListSerializer {
  constructor(private objects: Item[]) {}

  toJSON() {
    return this.objects.map((o) => new ItemSerializer(o).toJSON());
  }

  getErrors() {
    return [];
  }
}
