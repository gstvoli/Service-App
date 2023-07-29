const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: "37226614123gG#'",
    database: 'serviceapp'
  }
});

module.exports = knex;
