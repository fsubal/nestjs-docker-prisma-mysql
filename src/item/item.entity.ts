import { Item } from '@prisma/client';
import { BaseApiEntity } from 'src/utils/api.entity';

export class ItemEntity implements BaseApiEntity {
  data: {
    id: number;
    createdAt: Date;
    title: string;
    content: string | null;
  };

  errors: string[];

  constructor(object: Item, errors: string[]) {
    this.data = {
      id: object.id,
      createdAt: object.createdAt,
      title: object.title,
      content: object.content,
    };

    this.errors = errors;
  }
}
