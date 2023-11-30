const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
  async create(request, response) {
    const {
      data_abertura,
      servico,
      observacao,
      status,
      valor,
      acrescimo,
      desconto,
      rua_servico,
      bairro_servico,
      numcasa_servico,
      complemento_servico,
      cidade_servico,
      uf_servico,
      id_cliente,
      id_colaborador
    } = request.body;
    console.log(request.body);

    const newOrder = await connection('pedido').insert({
      data_abertura: data_abertura,
      servico: servico,
      observacao: observacao,
      status: status,
      valor: valor,
      acrescimo: acrescimo,
      desconto: desconto,
      rua_servico: rua_servico,
      bairro_servico: bairro_servico,
      numcasa_servico: numcasa_servico,
      complemento_servico: complemento_servico,
      cidade_servico: cidade_servico,
      uf_servico: uf_servico,
      id_cliente: id_cliente,
      id_colaborador: id_colaborador
    });

    return response.json(newOrder);
  },

  async list(request, response) {
    const { userId } = request.params;
    const order = await connection('pedido')
      .where('pedido.id_cliente', userId)
      .select('pedido.*')
      .leftJoin('colaborador', 'colaborador.id', 'pedido.id_colaborador');

    return response.json(order);
  },

  async index(request, response) {
    const { id } = request.params;
    const order = await connection('pedido').where('id', id).select('*');

    return response.json(order);
  }
};
