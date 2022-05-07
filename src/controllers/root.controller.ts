import { Controller, Get } from '@nestjs/common';

@Controller()
export class RootController {
  @Get('/')
  async index() {
    return { healthz: true };
  }
}
