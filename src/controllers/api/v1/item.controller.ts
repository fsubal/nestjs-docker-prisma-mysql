import {
  I18nExceptionFilter,
  I18nNotFoundException,
} from '@anchan828/nest-i18n-i18next';
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseFilters,
} from '@nestjs/common';
import { ItemService } from '../../../services/item/item.service';

@Controller('api/v1/items')
@UseFilters(I18nExceptionFilter)
export class ItemController {
  constructor(private readonly items: ItemService) {}

  @Get('/')
  async index() {
    const items = await this.items.findAll();

    return items;
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id: number) {
    const item = await this.items.findById(id);

    if (!item) {
      throw new I18nNotFoundException({
        key: 'requests.not_found',
        options: {},
      });
    }

    return item;
  }
}
