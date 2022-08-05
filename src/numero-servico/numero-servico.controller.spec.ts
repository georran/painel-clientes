import { Test, TestingModule } from '@nestjs/testing';
import { NumeroServicoController } from './numero-servico.controller';
import { NumeroServicoService } from './numero-servico.service';

describe('NumeroServicoController', () => {
  let controller: NumeroServicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NumeroServicoController],
      providers: [NumeroServicoService],
    }).compile();

    controller = module.get<NumeroServicoController>(NumeroServicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
