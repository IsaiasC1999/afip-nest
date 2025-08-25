import { Test, TestingModule } from '@nestjs/testing';
import { MtxcaService } from './mtxca.service';

describe('MtxcaService', () => {
  let service: MtxcaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MtxcaService],
    }).compile();

    service = module.get<MtxcaService>(MtxcaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
