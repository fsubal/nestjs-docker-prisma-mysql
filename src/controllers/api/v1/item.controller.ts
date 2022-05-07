import { Controller, Get, Param, Headers } from '@nestjs/common';
import { ItemService } from '../../../services/item/item.service';
import * as params from '../../../utils/params';
import { notFound, ok } from '../../../utils/response';

@Controller('api/v1/items')
export class ItemController {
  constructor(private readonly items: ItemService) {}

  @Get('/')
  async index(@Headers('Accept-Language') accept: string) {
    const locale = params.asLocale(accept);

    const items = await this.items.findAll();

    return ok(items, locale);
  }

  @Get(':id')
  async show(
    @Param('id') idStr: string,
    @Headers('Accept-Language') accept: string,
  ) {
    const locale = params.asLocale(accept);

    const id = params.asInteger(idStr, locale, '/:id must be numeric');
    const item = await this.items.findById(id);

    if (!item) {
      return notFound(locale, `Item (id: ${id}) not found`);
    }

    return ok(item, locale);
  }
}
