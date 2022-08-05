import { Test, TestingModule } from '@nestjs/testing';
import { NumeroServicoService } from './numero-servico.service';

describe('NumeroServicoService', () => {
  let service: NumeroServicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NumeroServicoService],
    }).compile();

    service = module.get<NumeroServicoService>(NumeroServicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
