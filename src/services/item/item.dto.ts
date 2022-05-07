import { Item } from '@prisma/client';

export class ItemDto {
  id: number;
  content: string | null;
  updatedAt: Date;
  createdAt: Date;

  constructor(object: Item) {
    this.id = object.id;
    this.content = object.content;
    this.updatedAt = object.updatedAt;
    this.createdAt = object.createdAt;
  }
}
