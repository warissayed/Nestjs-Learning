import { Test, TestingModule } from '@nestjs/testing';
import { XzenController } from './xzen.controller';

describe('XzenController', () => {
  let controller: XzenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [XzenController],
    }).compile();

    controller = module.get<XzenController>(XzenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
