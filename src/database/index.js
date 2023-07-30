var database = require('./connection');

var dados = {
  nome: 'Gustavo Oliveira',
  idade: '22',
  numero: 105,
  aniversario: '06-12-2000'
};

// database
//   .insert(dados)
//   .into('usuario')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// database
//   .select(['id', 'nome', 'idade'])
//   .table('usuario')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

database
  .select()
  .whereRaw("nome = 'Gustavo Oliveira'")
  .table('usuario')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
