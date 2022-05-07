import { Controller, Get, Param } from '@nestjs/common';
import { ItemService } from './services/item/item.service';
import * as params from './utils/params';
import { notFound, ok } from './utils/response';

@Controller()
export class AppController {
  constructor(private readonly items: ItemService) {}

  @Get('/')
  async index() {
    const items = await this.items.findAll();

    return ok(items);
  }

  @Get('/api/items/:id')
  async show(@Param('id') idStr: string) {
    const id = params.asInteger(idStr, '/:id must be numeric');
    const item = await this.items.findById(id);

    if (!item) {
      return notFound(`Item (id: ${id}) not found`);
    }

    return ok(item);
  }
}
