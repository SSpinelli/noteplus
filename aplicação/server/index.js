const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const User = require('./models/userModel');

app.get('/signup', (req, res) => {
  const { name, email, password } = req.query;

  User.createUser(name, email, password);
  // res.setHeader('Content-Type', 'aplication/json');
  res.status(200).json('Usuário Cadastrado');
});

app.listen(3001, () => {
  console.log('Express server is running on localhost:3001')
});
