import { Test, TestingModule } from '@nestjs/testing';
import { RootController } from './root.controller';
import { ItemService } from '../services/item/item.service';
import { PrismaService } from '../services/prisma/prisma.service';

describe('RootController', () => {
  let controller: RootController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RootController],
      providers: [ItemService, PrismaService],
    }).compile();

    controller = app.get(RootController);
  });

  describe('root', () => {
    it('should return', async () => {
      expect(await controller.index()).toEqual({ healthz: true });
    });
  });
});
