const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
  async create(request, response) {
    const {
      dataAbertura,
      tipo,
      categoria,
      codcliente,
      codcolaborador,
      observacao,
      status,
      acrescimo,
      desconto,
      valor
    } = request.body;
    console.log(request.body);

    const newOrder = await connection('pedido').insert({
      dataAbertura: dataAbertura,
      tipo: tipo,
      categoria: categoria,
      codcliente: codcliente,
      codcolaborador: codcolaborador,
      observacao: observacao,
      status: status,
      acrescimo: acrescimo,
      desconto: desconto,
      valor: valor
    });

    return response.json(newOrder);
  },

  async list(request, response) {
    const { userId } = request.params;
    const order = await connection('pedido')
      .where('cod_cliente', userId)
      .select('*');

    return response.json(order);
  },

  async index(request, response) {
    const { id } = request.params;
    const order = await connection('pedido').where('id', id).select('*');

    return response.json(order);
  }
};
