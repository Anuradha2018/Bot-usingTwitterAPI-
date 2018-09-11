var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);


//Setting up a user stream
var stream = T.stream('user');

//Anytimesomeone follows me 
stream.on('follow', followed);

setInterval(tweetIt, 1000*20);

tweetIt();


function tweetIt(){
    //to have different tweets always as we get error when tweet gets repeated
    /*
    var r = Math.floor(Math.random()*100);
    var tweet = {
        status: 'Here is random number' + r  + '#HappyHalloween!!!'
    }
    */ 
    var tweet = {
        
        status: '#HappyHalloween!!!'
    }
    
    T.post('statuses/update', tweet, tweeted);
    
    function tweeted(err, data, response) {
        if(err){
            console.log('Something went wrong');
        }
        else{
            console.log('It worked!!');
        }
        console.log(data)
      };
}
