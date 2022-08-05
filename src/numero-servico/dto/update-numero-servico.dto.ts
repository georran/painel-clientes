import { PartialType } from '@nestjs/mapped-types';
import { CreateNumeroServicoDto } from './create-numero-servico.dto';

export class UpdateNumeroServicoDto extends PartialType(
  CreateNumeroServicoDto,
) {}
