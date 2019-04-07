const Twitter = require('twitter');
 const CONSTANTS = require('./constants');

module.exports = new Twitter({
  consumer_key: CONSTANTS.TWITTER_CONSUMER_KEY,
  consumer_secret: CONSTANTS.TWITTER_CONSUMER_SECRET,
  access_token_key: CONSTANTS.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: CONSTANTS.TWITTER_ACCESS_TOKEN_SECRET
});
 
