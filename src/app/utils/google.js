const rp = require('request-promise');

const { GOOGLE: { BASE_URL, ZENSERP_KEY } } = require('../../configs/vars');

exports.search = async (query) => {
  try {
    const options = {
      method: 'GET',
      url: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        'apikey': ZENSERP_KEY
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
      if (formattedResult.length < 5) {
        // const newObj = { title: obj.title, url: obj.url };
        formattedResult.push(`${obj.title}: ${obj.url}`); //JSON.stringify(newObj)
      }

    })
    return formattedResult;
  } catch (err) {
    return err.message || 'Found error'
  }
};
