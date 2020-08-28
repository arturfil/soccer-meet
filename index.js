const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
require('dotenv').config();

// route files
app.get('/', (req, res) => {
  res.json({message: "funciona el api"})
})

app.use('/api/games', require('./routes/game'));
app.use('/api/users', require('./routes/auth'));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Aplicacion Mysql react corriendo en el puerto ${port}`);
});
  