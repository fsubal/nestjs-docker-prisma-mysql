import { Module } from '@nestjs/common';
import { RootController } from './controllers/root.controller';
import { ItemController } from './controllers/api/v1/item.controller';
import { PrismaService } from './services/prisma/prisma.service';
import { ItemService } from './services/item/item.service';

@Module({
  imports: [],
  controllers: [RootController, ItemController],
  providers: [PrismaService, ItemService],
})
export class AppModule {}
