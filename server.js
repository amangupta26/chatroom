var express = require('express');
var bodyParser = require('body-parser');		//required to parse POST method params which are url-encoded
var route = require('./api/chatapi');


var app = new express();
app.use(bodyParser.json());								
app.use(bodyParser.urlencoded({extended : true}));

app.use('/api',route);							//middleware to register api with the server

app.listen(3000,function(){
	console.log("Server Started");

	app.get('/',function(req,res){
		res.send('Chatroom');
	});
});
