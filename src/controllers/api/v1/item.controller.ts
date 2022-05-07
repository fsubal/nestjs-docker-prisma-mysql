import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { I18n, I18nable } from 'src/decorators/i18n/i18n.decorator';
import { ItemService } from '../../../services/item/item.service';
import { notFound, ok } from '../../../utils/response';

@Controller('api/v1/items')
export class ItemController {
  constructor(private readonly items: ItemService) {}

  @Get('/')
  async index(@I18n() i18n: I18nable) {
    const items = await this.items.findAll();

    return ok(items, i18n);
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id: number, @I18n() i18n: I18nable) {
    const item = await this.items.findById(id);

    if (!item) {
      return notFound(i18n.t('request.not_found'));
    }

    return ok(item, i18n);
  }
}
