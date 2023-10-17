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
  id: number;
  titulo: string;
  descricao: string;
  preco: number;
  duracao: number;
  avaliacaoMed: number;
  imagem: string;
}

export interface WorkerData {
  id: number;
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
  profissao : string;
}