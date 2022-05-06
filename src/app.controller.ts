import { Controller, Get, Param } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { ItemEntity } from './item/item.entity';
import { ItemListSerializer } from './item/item.serializer';
import { ItemService } from './item/item.service';
import { ErrorEntity } from './utils/api.entity';
import * as params from './utils/params';
import { notFound, ok } from './utils/response';

@Controller()
export class AppController {
  constructor(private readonly items: ItemService) {}

  @Get('/')
  @ApiOkResponse({ description: 'On success', type: ItemListSerializer })
  async index() {
    const items = await this.items.findAll();

    return ok(new ItemListSerializer(items));
  }

  @Get('/api/items/:id')
  @ApiOkResponse({ description: 'On success', type: ItemEntity })
  @ApiNotFoundResponse({ description: 'Not found', type: ErrorEntity })
  async show(@Param('id') idStr: string): Promise<ItemEntity> {
    const id = params.asInteger(idStr, '/:id must be numeric');
    const item = await this.items.findById(id);

    if (!item) {
      return notFound(`Item (id: ${id}) not found`);
    }

    return new ItemEntity(item, []);
  }
}
