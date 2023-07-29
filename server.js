const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(routes);

//Starting server
app.listen(3000, () => {
  console.log('Hello server!');
});

app.get('/', (req, res) => {
  res.send('Hello there!');
});
