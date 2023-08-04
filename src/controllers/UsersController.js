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

    const senha = bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return console.log(err);
      }

      bcrypt.hash(senha, salt, function (err, hash) {
        return console.log(senha);
      });
    });

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
