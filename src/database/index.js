var database = require('./database');

var dados = {
  nome: 'Gustavo Oliveira',
  idade: '22',
  numero: 105,
  aniversario: '06-12-2000'
};

database
  .insert(dados)
  .into('usuario')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
