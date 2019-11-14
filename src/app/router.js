const logger = require('./utils/logger');
const controller = require('./controller');

exports.getReply = (arg, userId, channelId) => {
  if (!arg && typeof arg !== 'string') {
    return 'Invalid message';
  }
  const message = arg.toLowerCase();
  // reply hey to hi
  if (message === 'hi')
    return 'hey'
  if (message.substring(0, 1) == '!') {
    let args = message.substring(1).split(' ');
    const cmd = args[0];
    args = args.splice(1).join(' ');
    logger.info('cmd: ' + cmd+ ',  args: '+ args);
    switch (cmd) {
      case 'google':
        return controller.fetchGoogleResult(args, userId, channelId);
        break;
      case 'recent':
        return controller.fetchRecentSearches(args, userId, channelId);
      default:         
    }
  }
  return 'To search send "!google query" or get recent search send "!recent qury"'
}