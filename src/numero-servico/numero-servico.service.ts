import { NumeroServico } from "./entities/numero-servico.entity";
import { CreateNumeroServicoDto } from "./dto/create-numero-servico.dto";
import { UpdateNumeroServicoDto } from "./dto/update-numero-servico.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";

@Injectable()
export class NumeroServicoService {
  constructor(
    @InjectRepository(NumeroServico)
    private numeroServicoRepository: Repository<NumeroServico>,
  ) {}
  async create(createNumeroServicoDto: CreateNumeroServicoDto) {
    const numero = await this.numeroServicoRepository.save(createNumeroServicoDto);
    return numero;
  }

  async findAll() {
    return await this.numeroServicoRepository.find({
      relations: {
        cliente: true,
      },
    });
  }

  async findOne(id: number) {
    const numero = await this.numeroServicoRepository.preload({ id: id });
    if (!numero) throw new NotFoundException(`Nenhum registro encontrado no id: ${id}`);
    return await this.numeroServicoRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        cliente: true,
      },
    });
  }

  async findNum(identificador: number) {
    const numero = await this.numeroServicoRepository.preload({ identificador: identificador });
    if (!numero) throw new NotFoundException(`Nenhum registro encontrado com o identificador: ${identificador}`);
    return this.numeroServicoRepository.findOne({
      where: {
        identificador: identificador,
      },
      relations: {
        cliente: true,
      },
    });
  }

  async update(id: number, updateNumeroServicoDto: UpdateNumeroServicoDto) {
    const numero = await this.numeroServicoRepository.preload({ id: id });
    if (!numero) throw new NotFoundException(`Nenhum registro encontrado com o id: ${id}`);
    return this.numeroServicoRepository.update({ id }, updateNumeroServicoDto);
  }

  async remove(id: number) {
    const numero = await this.numeroServicoRepository.preload({ id: id });
    if (!numero) throw new NotFoundException(`Nenhum registro encontrado no id: ${id}`);
    return this.numeroServicoRepository.delete(numero);
  }
}
