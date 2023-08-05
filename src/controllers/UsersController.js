const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
  async index(request, response) {
    const { email } = request.body;
    const { senha } = request.body;

    const users = await connection('usuarios').where('');

    return response.json(users);
  },

  async create(request, response) {
    const salt = bcrypt.genSaltSync(10);

    const {
      nome,
      cpf,
      email,
      telefone,
      endereco,
      numero,
      bairro,
      cidade,
      uf,
      cep,
      idade,
      aniversario,
      senhaToHash
    } = request.body;

    const senha = bcrypt.hashSync(senhaToHash, salt);
    console.log(request.body);

    await connection('usuario').insert({
      nome,
      cpf,
      email,
      telefone,
      endereco,
      numero,
      bairro,
      cidade,
      uf,
      cep,
      idade,
      aniversario,
      senha
    });

    return response.json({ senha });
  }
};
