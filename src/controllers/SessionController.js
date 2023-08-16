const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
  async create(request, response) {
    const salt = bcrypt.genSaltSync(10);
    const { email } = request.body;
    const { senha } = request.body;
    console.log(request.body);

    function validarUsuario(hash) {
      bcrypt.compareSync(senha, hash);
    }

    const user = await connection('usuario')
      .where('email', email)
      .select('*')
      .first();

    if (!email) {
      return response
        .status(401)
        .json({ error: 'Não foi encontrado usuário com esse email!' });
    } else {
      const senhaHash = bcrypt.hashSync(senha, salt);
      console.log(senhaHash);
      validarUsuario(senhaHash);
    }

    return response.json(user);
  }
};
