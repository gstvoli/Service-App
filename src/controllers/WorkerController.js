const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { id } = request.params;
    const colaborador = await connection('colaborador')
      .where('id', id)
      .select('*');

    return response.json(colaborador);
  },

  async list(request, response) {
    const colaboradores = await connection('colaborador').select('*');

    return response.json(colaboradores);
  },

  async create(request, response) {
    const {} = request.body;

    const colaborador = await connection('colaborador').insert({});

    return response.json(colaborador);
  }
};
