const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'joao',
  password: 'jg996167',
  database: 'login_system'
});

module.exports = connection;
