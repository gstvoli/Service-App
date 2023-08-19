const express = require('express');
const routes = require('./serverRoutes');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(routes);

//Starting server
app.listen(3000);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  next();
});

app.get('/api/', (req, res) => {
  res.send('Hello there!');
});

app.post('/api/login', async (request, response) => {
  console.log('test');
});

app.post('/api/users', async (request, response) => {
  console.log('Registro de usuario!');
});
