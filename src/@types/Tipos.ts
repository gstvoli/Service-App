export interface CadastroData {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  senha: string;
  endereco: string;
  numero: number;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
  idade: number;
  aniversario: Date;
};

export interface ServiceData {
  titulo: string;
  descricao: string;
  preco: number;
  duracao: number;
  avaliacaoMed: number;
  imagem: string;
}

export interface WorkerData {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  senha: string;
  endereco: string;
  numero: number;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
  idade: number;
  aniversario: Date;
  cod_servico: number;
  profissao : string;
  disponivel : boolean;
  avaliacao : number;
  pedidos_realizados : number;
}

export interface OrderData {
  data_abertura: Date;
  data_encerramento: Date;
  servico: string;
  observacao: string;
  avaliacao: number;
  status: number;
  valor: number;
  acrescimo: number;
  desconto: number;
  rua_servico: string;
  bairro_servico: string;
  numcasa_servico: string;
  complemento_servico: string;
  cidade_servico: string;
  uf_servico: string;
  id_cliente: number;
  id_colaborador: number;
}