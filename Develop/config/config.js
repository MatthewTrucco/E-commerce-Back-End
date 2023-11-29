require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  },
  production: {
    username: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PW,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  },
};
