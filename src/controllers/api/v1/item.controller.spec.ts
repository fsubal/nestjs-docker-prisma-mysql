import { Test, TestingModule } from '@nestjs/testing';
import { ItemController } from './item.controller';
import { ItemService } from '../../../services/item/item.service';
import { PrismaService } from '../../../services/prisma/prisma.service';
import { I18nModule } from '../../../i18n/module';

describe('ItemController', () => {
  let controller: ItemController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [I18nModule],
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
