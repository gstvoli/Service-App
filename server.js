const express = require('express');
const routes = require('./serverRoutes');
const cors = require('cors');

const app = express();

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });
app.use(cors());
app.use(express.json());
app.use(routes);

//Starting server
app.listen(3000);

// app.get('/', (req, res) => {
//   res.send('Hello there!');
// });
