const rp = require('request-promise');

const { GOOGLE: { BASE_URL } } = require('../../configs/vars');

exports.search = async (query) => {
  try {
    const options = {
      method: 'GET',
      url: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        'apikey': '327ce2d0-06b8-11ea-aa79-01716ca70952' // should be in env variable
      },
      body: JSON.stringify({
        q: query,
        search_engine: 'google.com',
        hl: 'en',
      })
    }
    let googleResult = await rp(options);
    googleResult = JSON.parse(googleResult);
    formattedResult = [];
    googleResult.organic.map((obj) => {
      if (!obj.title || !obj.url)
        return null;
      if (formattedResult.length <= 5) {
        formattedResult.push(JSON.stringify({ title: obj.title, url: obj.url }));
      }

    })
    return formattedResult;
  } catch (err) {
    return err.message || 'Found error'
  }
};
