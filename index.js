console.log('Hello World');

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

var params = {
    q: 'tennis', 
    count: 20
};

T.get('search/tweets', params, gotData);

//function called when data is returned from the API
function gotData(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length ; i++){
        console.log(tweets[i].text);
    }
  };




  