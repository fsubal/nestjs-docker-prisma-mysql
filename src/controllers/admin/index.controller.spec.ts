import { Test, TestingModule } from '@nestjs/testing';
import { AdminIndexController } from './index.controller';

describe('IndexController', () => {
  let controller: AdminIndexController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminIndexController],
    }).compile();

    controller = module.get<AdminIndexController>(AdminIndexController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
