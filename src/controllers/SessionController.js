const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
  async create(request, response) {
    const salt = bcrypt.genSaltSync(10);
    const userPass = await connection('usuario');
    const { email, senhaH = bcrypt.hashSync(senha, salt) } = request.body;
    console.log(request.body);

    console.log(senha);

    const user = await connection('usuario')
      .where('email', email)
      .andWhere('senha', senha)
      .select('*')
      .first();

    if (!user) {
      return response
        .status(401)
        .json({ error: 'Não foi encontrado usuário com esse email!' });
    }
    if (!senha) {
      return response.status(402).json({ error: 'Senha incorreta!' });
    }
    return response.json(user);
  }
};
