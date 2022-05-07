import { Test, TestingModule } from '@nestjs/testing';
import { ItemController } from './item.controller';
import { ItemService } from '../../../services/item/item.service';
import { PrismaService } from '../../../services/prisma/prisma.service';

describe('ItemController', () => {
  let controller: ItemController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ItemController],
      providers: [ItemService, PrismaService],
    }).compile();

    controller = app.get(ItemController);
  });

  describe('index', () => {
    it('should return', async () => {
      const response = await controller.index();

      expect(response).toBeInstanceOf(Array);
    });
  });
});
