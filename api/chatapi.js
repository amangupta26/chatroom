var express = require('express');
var api = express.Router();


api.post('/echo',function(req,res){
	console.log(req.body.message);
	res.json(req.body.message);
});

api.post('/message',function(req,res){
	res.json("Message received");
});

module.exports = api;