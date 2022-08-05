import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { adicionarContatos } from './adicionarContatos';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clientesRepository: Repository<Cliente>,
  ) {}
  create(createClienteDto: CreateClienteDto) {
    return this.clientesRepository.save(adicionarContatos(createClienteDto));
  }

  async findAll() {
    return await this.clientesRepository.find({
      relations: {
        numero: true,
      },
    });
  }

  findOne(id: number) {
    return this.clientesRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        numero: true,
      },
    });
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    const cliente = await this.clientesRepository.update(
      { id },
      updateClienteDto,
    );
    return cliente;
  }

  async remove(id: number) {
    await this.clientesRepository.delete(id);
  }
}
