import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma/prisma.service';
import { ItemService } from './item/item.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, ItemService],
})
export class AppModule {}
