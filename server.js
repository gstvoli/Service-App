const express = require('express');
const routes = require('./serverRoutes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//Starting server
app.listen(3000);

app.get('/', (req, res) => {
  res.send('Hello there!');
});
