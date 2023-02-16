export class CreateClienteDto {
  empresa: string;
  mensalidade: number;
  versao: number;
  dtImplatancao: Date;
  dtFechamento: Date;
  whatsapp: boolean;
  telefone: boolean;
  observacoes: string;
  idnum: number[];
  tipo: string[];
}
