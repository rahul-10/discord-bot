const Discord = require('discord.io');

const { DISCORD: { TOKEN } } = require('./configs/vars');
const { getReply } = require('./app/router');
const logger = require('./app/utils/logger');

// Initialize Discord Bot
const bot = new Discord.Client({
  token: TOKEN,
  autorun: true
});

bot.on('ready', (evt) => {
  logger.info('Logged in as: ' + bot.username + ' - (' + bot.id + ')');
});


bot.on('message', async (user, userID, channelID, message, evt) => {
  if(bot.id === userID){
    return null;
  }
  logger.info('==========');
  logger.info('userID: ' + userID + '  channelID: ', + channelID + '  message: ' + message);

  // get reply
  const reply = await getReply(message, userID, channelID);
  bot.sendMessage({ to: channelID, message: reply });
});