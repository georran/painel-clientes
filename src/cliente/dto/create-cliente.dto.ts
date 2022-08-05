export class CreateClienteDto {
  empresa: string;
  mensalidade: number;
  versao: number;
  dataImplatancao: Date;
  whatsapp: boolean;
  telefone: boolean;
  observacoes: string;
  idnum: number[];
  tipo: string[];
}
