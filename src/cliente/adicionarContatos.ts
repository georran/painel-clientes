import { CreateClienteDto } from "./dto/create-cliente.dto";
import { Cliente } from "./entities/cliente.entity";


export function adicionarContatos(clientes: CreateClienteDto) {
  const cliente = new Cliente();
  cliente.empresa = clientes.empresa;
  cliente.mensalidade = clientes.mensalidade;
  cliente.versao = clientes.versao;
  cliente.dtImplatancao = clientes.dtImplatancao;
  cliente.dtFechamento = clientes.dtFechamento;
  cliente.numero = adicionarNums(clientes, cliente.id);
  cliente.whatsapp = tipoNum(clientes)[0];
  cliente.telefone = tipoNum(clientes)[1];
  return cliente;
}

function adicionarNums(numero: CreateClienteDto, repositorio) {
  const num = new Cliente();
  num.numero = [null];
  numero.idnum.forEach((numeros, i) => {
    num.numero[i] = {
      identificador: numeros,
      cliente: repositorio,
      ntipo: numero.tipo[i],
      id: num.id,
    };
    console.log("adicionados:", numeros, numero.tipo[i]);
  });
  return num.numero;
}

function tipoNum(tipo: CreateClienteDto) {
  const cliente = new Cliente();
  if ((tipo.tipo.includes("WhatsApp", 0) && tipo.tipo.includes("Telefone", 0)) || tipo.tipo.includes("Hibrido", 0)) {
    cliente.whatsapp = cliente.telefone = true;
    console.log("Tem Ambos");
  } else if (tipo.tipo.includes("Telefone", 0)) {
    cliente.whatsapp = false;
    cliente.telefone = true;
    console.log("Tem somente Telefone");
  }
  const tipos = [cliente.whatsapp, cliente.telefone];
  return tipos;
}
