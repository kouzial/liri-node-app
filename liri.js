// Require access to all of the exports in our key.js

var access = require('./key.js');
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');

// Print data that is in the exports

console.log(access.twitterKeys);

// Takes in all of the command line arguments
var inputString = process.argv;

// Parses the command line argument to capture the "operand" (my-tweets, spotify-this-song, movie-this, do-what-it-says) and the data
var operand = inputString[2];
var data = inputString[3];



// if statement

if (operand === "my-tweets") {
  var client = new Twitter(access.twitterKeys);
  client.get(
  	'statuses/home_timeline',
  	function(error, tweets, reponse) {
  		for (var i=0; i < tweets.length; i++) {
  			console.log(tweets[i].text + " " + tweets[i].created_at);  		
  		}
  	}
  )
}

else if (operand === "spotify-this-song") {

	spotify.search(
		{
			type:'track',
			query:data === undefined ? "the sign" : data
		},
		function(err, data) {
			if (err) {
				console.log('Error occured: '+ err);
				return;
			}
			data.tracks.items.map(
				function(a) {
					console.log("Artist: " + a.artists[0].name + ", Song: " + a.name + ", Album: " + a.album.name + ", Link: " +a.external_urls.spotify);
					return;
				}
			)
		}

	)

}

else if (operand === "movie-this") {




}

else if (operand === "do-what-it-says") {

var fs = require("fs");

fs.readFile("random.txt", "utf8", function(error, data) {


  // We will then print the contents of data
  console.log(data);


  
});

}