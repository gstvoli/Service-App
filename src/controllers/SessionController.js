const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
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
  }
};
