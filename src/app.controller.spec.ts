import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { ItemService } from './item/item.service';
import { PrismaService } from './prisma/prisma.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [ItemService, PrismaService],
    }).compile();

    appController = app.get(AppController);
  });

  describe('root', () => {
    it('should return', async () => {
      expect(await appController.index()).toHaveLength(1);
    });
  });
});
