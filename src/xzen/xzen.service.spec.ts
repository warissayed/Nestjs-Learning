import { Test, TestingModule } from '@nestjs/testing';
import { XzenService } from './xzen.service';

describe('XzenService', () => {
  let service: XzenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XzenService],
    }).compile();

    service = module.get<XzenService>(XzenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
