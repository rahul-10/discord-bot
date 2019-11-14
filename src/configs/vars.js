// const path = require('path');
// require('dotenv').config({
//   path: path.join(__dirname, '../../.env'),
//   sample: path.join(__dirname, '../../.env.example'),
// })

const config = {
  DATABASE: {
    HOST: process.env.DATABASE_HOST || 'localhost',
    PORT: process.env.DATABASE_PORT || 5432,
    USER: process.env.DATABASE_USER || 'root',
    PASSWORD: process.env.DATABASE_PASSWORD || '1234',
    DATABASE: process.env.DATABASE_NAME || 'discord_bot',
  },
  DISCORD: {
    TOKEN: process.env.DISCORD_TOKEN
  },
  GOOGLE: {
    BASE_URL: 'https://app.zenserp.com/api/v2/search',
    ZENSERP_KEY: process.env.ZENSERP_KEY
  }
};

module.exports = config;
