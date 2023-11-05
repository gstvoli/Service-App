const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { id } = request.params;
    const colaborador = await connection('colaborador')
      .where('colaborador.id', id)
      .select('colaborador.*')
      .count('pedido.id as pedidos_realizados')
      .leftJoin('pedido', 'colaborador.id', 'pedido.id_colaborador')
      .groupBy('colaborador.id');

    return response.json(colaborador);
  },

  async list(request, response) {
    const colaboradores = await connection('colaborador')
      .select('colaborador.*')
      .count('pedido.id as pedidos_realizados')
      .leftJoin('pedido', 'colaborador.id', 'pedido.id_colaborador')
      .groupBy('colaborador.id');

    return response.json(colaboradores);
  },

  // async serviceIndex(request, response) {
  //   const { id } = request.params;
  //   const workers = await connection('colaborador')
  //     .where('cod_servico', id)
  //     .select('*');

  //   return response.json(workers);
  // },

  async create(request, response) {
    const {} = request.body;

    const colaborador = await connection('colaborador').insert({});

    return response.json(colaborador);
  }
};
