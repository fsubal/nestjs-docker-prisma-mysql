import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { ItemService } from './services/item/item.service';
import { PrismaService } from './services/prisma/prisma.service';

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
