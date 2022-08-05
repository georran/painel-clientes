import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NumeroServicoService } from './numero-servico.service';
import { CreateNumeroServicoDto } from './dto/create-numero-servico.dto';
import { UpdateNumeroServicoDto } from './dto/update-numero-servico.dto';

@Controller('numero-servico')
export class NumeroServicoController {
  constructor(private readonly numeroServicoService: NumeroServicoService) {}

  @Post()
  create(@Body() createNumeroServicoDto: CreateNumeroServicoDto) {
    return this.numeroServicoService.create(createNumeroServicoDto);
  }

  @Get()
  findAll() {
    return this.numeroServicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.numeroServicoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNumeroServicoDto: UpdateNumeroServicoDto,
  ) {
    return this.numeroServicoService.update(+id, updateNumeroServicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.numeroServicoService.remove(+id);
  }
}
