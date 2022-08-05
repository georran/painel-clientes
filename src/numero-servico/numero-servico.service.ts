import { NumeroServico } from './entities/numero-servico.entity';
import { CreateNumeroServicoDto } from './dto/create-numero-servico.dto';
import { UpdateNumeroServicoDto } from './dto/update-numero-servico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpCode, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class NumeroServicoService {
  constructor(
    @InjectRepository(NumeroServico)
    private numeroServicoRepository: Repository<NumeroServico>,
  ) {}
  create(createNumeroServicoDto: CreateNumeroServicoDto) {
    const numero = this.numeroServicoRepository.save(createNumeroServicoDto);
    return numero;
  }

  findAll() {
    return this.numeroServicoRepository.find({
      relations: {
        cliente: true,
      },
    });
  }

  findOne(id: number) {
    return this.numeroServicoRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        cliente: true,
      },
    });
  }

  async update(id: number, updateNumeroServicoDto: UpdateNumeroServicoDto) {
    const numero = await this.numeroServicoRepository.update(
      { id },
      updateNumeroServicoDto,
    );
    return numero;
  }

  @HttpCode(204)
  async remove(id: number) {
    const numero = await this.numeroServicoRepository.delete(id);
    return numero;
  }
}
