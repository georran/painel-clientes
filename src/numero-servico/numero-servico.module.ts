import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { NumeroServicoService } from './numero-servico.service';
import { NumeroServicoController } from './numero-servico.controller';
import { NumeroServico } from './entities/numero-servico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NumeroServico])],
  controllers: [NumeroServicoController],
  providers: [NumeroServicoService],
})
export class NumeroServicoModule {}
