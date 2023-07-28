const express = require('express');
const routes = require('./routes');
const app = express();
const port = 3000;

//Sample route
app.get('/', (req, res) => {
  res.send('Bem vindo ao servidor Node.js!');
});

//Starting server
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
