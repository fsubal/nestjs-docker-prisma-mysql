import { Controller, Get, Param } from '@nestjs/common';
import { ItemService } from '../../../services/item/item.service';
import * as params from '../../../utils/params';
import { notFound } from '../../../utils/response';

@Controller('api/v1/items')
export class ItemController {
  constructor(private readonly items: ItemService) {}

  @Get('/')
  async index() {
    const items = await this.items.findAll();

    return items;
  }

  @Get(':id')
  async show(@Param('id') idStr: string) {
    const id = params.asInteger(idStr, '/:id must be numeric');
    const item = await this.items.findById(id);

    if (!item) {
      return notFound(`Item (id: ${id}) not found`);
    }

    return item;
  }
}
