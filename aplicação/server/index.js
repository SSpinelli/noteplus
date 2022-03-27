const express = require('express');
const bodyParser = require('body-parser');
// const pino = require('express-pino-logger')();

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(pino);
app.use(bodyParser.json());

app.get('/signup', (req, res) => {
  const { name, email, password } = req.query;

  console.log(email)
  // res.setHeader('Content-Type', 'aplication/json');
  res.status(200).json(email);
});

app.listen(3001, () => {
  console.log('Express server is running on localhost:3001')
});
