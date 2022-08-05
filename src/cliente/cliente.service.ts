import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
    const cliente = new Cliente();
    cliente.empresa = createClienteDto.empresa;
    cliente.mensalidade = createClienteDto.mensalidade;
    cliente.versao = createClienteDto.versao;
    cliente.dataImplatancao = createClienteDto.dataImplatancao;
    if (
      (createClienteDto.tipo.includes('WhatsApp', 0) &&
        createClienteDto.tipo.includes('Telefone', 0)) ||
      createClienteDto.tipo.includes('Hibrido', 0)
    ) {
      cliente.whatsapp = cliente.telefone = true;
      console.log('Tem Ambos');
    } else if (createClienteDto.tipo.includes('Telefone', 0)) {
      cliente.whatsapp = false;
      cliente.telefone = true;
      console.log('Tem somente Telefone');
    }
    // forEach
    cliente.numero = [null];
    createClienteDto.idnum.forEach((numeros, i) => {
      cliente.numero[i] = {
        identificador: numeros,
        cliente: this.clientesRepository.getId(cliente),
        ntipo: createClienteDto.tipo[i],
        id: cliente.id,
      };
      console.log('adicionados:', numeros, createClienteDto.tipo[i]);
    });
    // for
    /* for (let n = 0; n < createClienteDto.idnum.length; n++) {
      cliente.numero[n] = {
        identificador: createClienteDto.idnum[n],
        cliente: this.clientesRepository.getId(cliente),
        ntipo: createClienteDto.tipo[n],
        id: cliente.id,
      };
      console.log(
        'adicionados:',
        createClienteDto.idnum[n],
        createClienteDto.tipo[n],
      );
    } */
    return this.clientesRepository.save(cliente);
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
