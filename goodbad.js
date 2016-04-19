//Let's requirew /import HTTP module

var http = require ('http');
var insults = ['You look like an ugly animal ', 'You smell like guida cheese mixed with cat farts ', 'There are no good words for you '];
var goodComps = ['You are a delight ', 'You make the world a better place ', 'You can do anything '];

var randomInsult = insults[Math.floor(Math.random() * insults.length)];
var randomComps = goodComps[Math.floor(Math.random() * goodComps.length)];



//Let's define a port we want to listen to
var PORT1 = 7000;
var PORT2 = 7500;

//We need a function which handles requestes and send a response -- Good response 
function handleGoodRequest(request, response){
	response.end('It works!! ' + randomComps + request.url);
}

//We need a function which handles requestes and send a response -- Bad response 
function handleBadRequest(request, response){
	response.end('It works!! '+ randomInsult + request.url);
}

//Create a server
var server = http.createServer(handleGoodRequest);
var serverBad = http.createServer(handleBadRequest);

//Let's start our server
server.listen(PORT1, function (){
	//callback triggered when service is succesffuly listening. Hurray!
	console.log("server is listening on: http://localhost:%s",PORT1);
});

serverBad.listen(PORT2, function (){
	//callback triggered when service is succesffuly listening. Hurray!
	console.log("server is listening on: http://localhost:%s",PORT2);
});