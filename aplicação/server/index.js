const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const { getAll, createUser, deleteUser } = require('./controlers/userControler')

app.get('/home', getAll);

app.post('/signup', createUser);

app.delete('/home/:id', deleteUser)

app.listen(3001, () => {
  console.log('Express server is running on localhost:3001')
});
