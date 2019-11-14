// const path = require('path');
const config = require('./vars');

module.exports = {
  client: 'postgresql',
  connection: {
    host: config.DATABASE.HOST,
    port: config.DATABASE.PORT,
    database: config.DATABASE.DATABASE,
    user: config.DATABASE.USER,
    password: config.DATABASE.PASSWORD,
  },
  pool: {
    min: 2,
    max: 20,
  },
  migrations: {
    // directory: path.join(__dirname, '/migrations'),
    directory: './migrations',
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: '../api/seeds',
  },
};
