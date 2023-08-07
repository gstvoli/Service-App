const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
  async index(request, response) {
    const { email } = request.body;
    const { senha } = request.body;

    const user = await connection('usuario')
      .where('email', email)
      .andWhere('senha', senha)
      .select('*')
      .first();

    if (!user) {
      return response
        .status(400)
        .json({ error: 'No User found with this email' });
    }
    if (!email) {
      return response.status(400).json({ error: 'Wrong email! ' });
    }
    if (!senha) {
      return response.status(400).json({ error: 'Wrong password.' });
    }
    return response.json(user);
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
