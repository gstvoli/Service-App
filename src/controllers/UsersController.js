const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { id } = request.body;
    const { password } = request.body;

    const users = await connection('usuarios').where('');

    return response.json(users);
  },

  async create(request, response) {
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
      aniversario
    } = request.body;

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
      aniversario
    });

    return response.json({ id });
  }
};
