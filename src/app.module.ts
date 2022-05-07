import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { PrismaService } from './services/prisma/prisma.service';
import { ItemService } from './services/item/item.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, ItemService],
})
export class AppModule {}
