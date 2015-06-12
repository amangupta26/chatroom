var express = require('express');
var bodyParser = require('body-parser');		//required to parse POST method params which are url-encoded

var morgan = require('morgan');
var _ = require('underscore');
var mongoose = require('mongoose');
var config = require('./config');

var app = new express();
var route = require('./routes/chatapi')(app,express);

app.use(bodyParser.json());								
app.use(bodyParser.urlencoded({extended : true}));
app.use(morgan('dev'));
app.use('/api',route);							//middleware to register api with the server
app.use(express.static(__dirname + "/public"));

app.get('/',function(req,res){
	res.sendFile(__dirname + '/public/app/views/index.html');
});
mongoose.connect(config.database,function(err){
	if(err)
		console.log("Could not conect to the database");
	else{
		console.log("Database connected");
		var server = app.listen(3000,function(){
			console.log("Server Started");
		});

		var io = require('socket.io').listen(server);
		io.on('connection', function(socket){
		  console.log('a user connected');
		});
	}
});
