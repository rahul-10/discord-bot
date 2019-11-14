const config = {
  DATABASE: {
    HOST: process.env.DATABASE_HOST || 'localhost',
    PORT: process.env.DATABASE_PORT || 5432,
    USER: process.env.DATABASE_USER || 'root',
    PASSWORD: process.env.DATABASE_PASSWORD || '1234',
    DATABASE: process.env.DATABASE_NAME || 'discord_bot',
  },
  DISCORD: {
    TOKEN: process.env.DISCORD_TOKEN || 'NjQ0MDU4MzM3OTUyMTM3MjI4.Xcwupw.Jle2-HbOV6bKFzsnePY5mD2a0iA'
  },
  GOOGLE: {
    BASE_URL: 'https://app.zenserp.com/api/v2/search',
  }
};

module.exports = config;
