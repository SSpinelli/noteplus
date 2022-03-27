const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/signup', (req, res) => {
  const { name, email, password } = req.query;

  console.log(name, email, password);

  res.status(200).send({ name, email, password });
})

app.listen(5000, () => {
  console.log('Ouvindo a porta 5000')
})
