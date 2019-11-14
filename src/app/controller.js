const logger = require('./utils/logger');
const queryModel = require('./query.model');
const { search } = require('./utils/google');


exports.fetchGoogleResult = async (str, userId, channelId) => {
  if (!str || !userId || !channelId) {
    return 'search query can\'t be null';
  }
  try {
    // fetch records from google
    const result = await search(str);
    // insert str into db
    const queryObj = {
      query: str,
      user_id: userId,
      channel_id: channelId
    }
    const res = await queryModel.insertQuery(queryObj);
    const strResult = result.join(', ');
    logger.info('strResult: ', +strResult);
    return strResult;//   JSON.stringify(result);
  } catch (err) {
    return err.message || 'Something went wrong';
  }
}

exports.fetchRecentSearches = async (str, userId, channelId) => {
  try {
    const records = await queryModel.fetchQueriesByUserId(userId, str);
    if (!records || records.length === 0) {
      return 'recent search not found'
    }
    let resultString = [];
    records.map((obj) => {
      resultString.push(obj.query);
    })
    resultString = resultString.join(', ')
    logger.info('resultString: ', +resultString);
    return resultString;
  } catch (err) {
    return err.message || 'Something went wrong';
  }
}