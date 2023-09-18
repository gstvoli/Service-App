const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { id } = request.params;
    const service = await connection('servico').where('id', id).select('*');

    return response.json(service);
  },

  async create(request, response) {
    const { titulo, descricao, preco, duracao, avaliacao_media, imagem } =
      request.body;

    const service = await connection('servico').insert({
      titulo,
      descricao,
      preco,
      duracao,
      avaliacao_media,
      imagem
    });

    return response.json(service);
  }
};
