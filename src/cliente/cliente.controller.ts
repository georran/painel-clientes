import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { HttpCode } from "@nestjs/common";
import { ClienteService } from "./cliente.service";
import { CreateClienteDto } from "./dto/create-cliente.dto";
import { UpdateClienteDto } from "./dto/update-cliente.dto";

@Controller("cliente")
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  async create(@Body() createClienteDto: CreateClienteDto) {
    try {
      return await this.clienteService.create(createClienteDto);
    } catch (err) {
      console.log("erro: ", err);
      return `erro: ${err}`;
    }
  }

  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.clienteService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(+id, updateClienteDto);
  }

  @Delete(":id")
  @HttpCode(204)
  remove(@Param("id") id: string) {
    return this.clienteService.remove(+id);
  }
}
