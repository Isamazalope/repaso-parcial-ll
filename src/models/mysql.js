const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,       // Dirección del servidor de la base de datos
  user: process.env.DB_USER,       // Usuario de la base de datos
  password: process.env.DB_PASSWORD,  // Contraseña del usuario
  database: process.env.DB_NAME    // Nombre de la base de datos
});

module.exports = pool;