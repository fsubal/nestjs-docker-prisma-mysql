import { Controller, Get } from '@nestjs/common';
import { ItemService } from './item/item.service';

@Controller()
export class AppController {
  constructor(private readonly items: ItemService) {}

  @Get()
  getHello() {
    return this.items.findAll();
  }
}
