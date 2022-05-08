import { Item } from '@prisma/client';

export class ItemDto {
  id: number;
  content: string | null;
  updatedAt: Date;
  createdAt: Date;

  constructor({ id, content, updatedAt, createdAt }: Item) {
    this.id = id;
    this.content = content;
    this.updatedAt = updatedAt;
    this.createdAt = createdAt;
  }
}
