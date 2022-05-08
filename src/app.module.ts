import { Module } from '@nestjs/common';
import { I18nModule } from './i18n/module';

import { RootController } from './controllers/root.controller';
import { ItemController } from './controllers/api/v1/item.controller';
import { PrismaService } from './services/prisma/prisma.service';
import { ItemService } from './services/item/item.service';
import { UploaderService } from './services/uploader/uploader.service';
import { ConfigModule } from '@nestjs/config';
import { ENV } from './env';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate(config) {
        ENV.parse(config);
        return config;
      },
    }),
    I18nModule,
  ],
  controllers: [RootController, ItemController],
  providers: [PrismaService, ItemService, UploaderService],
})
export class AppModule {}
