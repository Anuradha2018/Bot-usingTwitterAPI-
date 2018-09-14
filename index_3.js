console.log('The replier bot is starting');
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

//Setting up a user stream
var stream = T.stream('user');

//Anytime someone follows me 
stream.on('tweet', tweetEvent);
//a callback for 'tweet' event, when someone tweets me The function is executed
function tweetEvent(eventMsg){
    /*var fs = require('fs');
    var json = JSON.stringify(eventMsg,null,2);
    fs.writeFile("tweet.json", json);*/

    var replyto = eventMsg.in_reply_to_screen_name;
    var text = eventMsg.text;
    var from = eventMsg.user.screen_name;

    console.log(replyto + ' '+ from);

    if(replyto ==='Anuradh99367944'){
        var newtweet = '@' + from + 'thank You for tweeting me!';
        tweetIt(newtweet);
    }
}
function tweetIt(txt){
    //to have different tweets always as we get error when tweet gets repeated
    //var r = Math.floor(Math.random()*100);
    var tweet = {
        status: txt
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
