console.log('The follow bot is starting');
var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);



var exec = require('child_process').exec;
var fs = require('fs');



//Setting up a user stream
var stream = T.stream('user');

//Anytimesomeone follows me 
stream.on('follow', followed);


//a callback for 'follow' event, when someone follows me The function is executed
function followed(eventMsg){
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;
    tweetIt('@' + screenName + ' Thank You for following me');
}

setInterval(tweetIt, 1000*20);

//tweetIt();


function tweetIt(){
    //to have different tweets always as we get error when tweet gets repeated
    /*
    var r = Math.floor(Math.random()*100);
    var tweet = {
        status: 'Here is random number' + r  + '#HappyHalloween!!!'
    }
    */ 
    
    var cmd = 'processing-java --sketch="%../sketch%" --run';

    exec(cmd, processing);
    function processing(){
        var filename = 'sketch/output.png';
        var params = {
            encoding: 'base64'
        }
        var b64content = fs.readFileSync(filename, params);
        T.post('media/upload', { media_data: b64content }, uploaded );

        function uploaded(err, data, response){
            var id = data.media_id_string
            var tweet = {
                status: '#codingnode from node.js'
            }
        }
    }

    

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
