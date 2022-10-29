import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { adicionarContatos } from "./adicionarContatos";
import { CreateClienteDto } from "./dto/create-cliente.dto";
import { UpdateClienteDto } from "./dto/update-cliente.dto";
import { Cliente } from "./entities/cliente.entity";

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
    return this.clientesRepository.find({
      relations: {
        numero: true,
      },
    });
  }

  async findOne(id: number) {
    const cliente = await this.clientesRepository.preload({ id: id });
    if (!cliente) throw new NotFoundException(`Nenhum registro encontrado no id: ${id}`);
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
    const cliente = await this.clientesRepository.preload({ id: id });
    if (!cliente) throw new NotFoundException(`Nenhum registro encontrado no id: ${id}`);
    return await this.clientesRepository.update({ id }, updateClienteDto);
  }

  async remove(id: number) {
    const cliente = await this.clientesRepository.preload({ id: id });
    if (!cliente) throw new NotFoundException(`Nenhum registro encontrado no id: ${id}`);
    return await this.clientesRepository.delete(id);
  }
}
