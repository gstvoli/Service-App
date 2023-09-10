const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
  async index(request, response) {
    const { id } = request.params;
    const user = await connection('usuario').where('id', id).select('*');

    return response.json(user);
  },

  async create(request, response) {
    const salt = bcrypt.genSaltSync(10);

    const {
      nome,
      cpf,
      email,
      telefone,
      senha: senhaToHash,
      endereco,
      numero,
      bairro,
      cidade,
      uf,
      cep,
      aniversario
    } = request.body;

    // console.log(senha);

    const senhaCriptografada = bcrypt.hashSync(senhaToHash, salt);
    // console.log(request.body);

    const user = await connection('usuario').insert({
      nome,
      cpf,
      email,
      telefone,
      senha: senhaCriptografada,
      endereco,
      numero,
      bairro,
      cidade,
      uf,
      cep,
      aniversario
    });

    return response.json(user);
  }
};
