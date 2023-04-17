const Sequelize = require('sequelize');
require('dotenv').config();

const { DB_NAME, DB_USER, DB_PASSWORD, JAWSDB_URL } = process.env;

const sequelize = JAWSDB_URL
  ? new Sequelize(JAWSDB_URL)
  : new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      DB_PASSWORD:'1130'
    });

module.exports = sequelize;
