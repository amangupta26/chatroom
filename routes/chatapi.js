var User = require('../models/user');
module.exports = function(app,express){
	var api = express.Router();

	api.post('/echo',function(req,res){
		console.log(req.body.message);
		res.json(req.body.message);
	});

	api.post('/user',function(req,res){
		var user = new User({
			name : req.body.name
		});
		user.save(function(err){
			if(err)
				res.send(err);
			else
				res.json({message : "user created"});
		});

	});

	api.post('/message',function(req,res){
		
	});

	return api;
}





