const Discord = require('discord.io');
const express = require('express')
const rp = require('request-promise');


const app = express();

const { DISCORD: { TOKEN }, APP: { PORT } } = require('./configs/vars');
const { getReply } = require('./app/router');
const logger = require('./app/utils/logger');


app.get('/', function (req, res) {
  res.send('Discord bot - Health Check')
})

app.listen(PORT, () => {
  logger.info('Server started on port ' + PORT);
})

setInterval(async () => {
  // http.get('https://descord-chat-app.herokuapp.com/');
  const options = {
    uri: 'https://descord-chat-app.herokuapp.com/',
    json: true,
  };
  rp(options).then(()=>{}).catch(() => {})
}, 2000);

// Initialize Discord Bot
const bot = new Discord.Client({
  token: TOKEN,
  autorun: true
});

bot.on('ready', (evt) => {
  logger.info('Logged in as: ' + bot.username + ' - (' + bot.id + ')');
});


bot.on('message', async (user, userID, channelID, message, evt) => {
  if (bot.id === userID) {
    return null;
  }
  logger.info('==========');
  logger.info('userID: ' + userID + '  channelID: ', + channelID + '  message: ' + message);

  // get reply
  const reply = await getReply(message, userID, channelID);
  bot.sendMessage({ to: channelID, message: reply });
});

