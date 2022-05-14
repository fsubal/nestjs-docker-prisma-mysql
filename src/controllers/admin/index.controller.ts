import { Controller, Get, Render } from '@nestjs/common';

@Controller('admin')
export class AdminIndexController {
  @Get('/')
  @Render('layout.html.ejs')
  index() {
    return {
      template: 'admin/index.html.ejs',
      meta: {
        title: 'Admin Console',
      },
      scope: { count: 0 },
    };
  }
}
