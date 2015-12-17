var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Post = require('./schemas/postSchema');
var app = express();
app.use(bodyParser.json());
var config = require('./config/server_config.json');
mongoose.connect('mongodb://'+config.db.address);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'Connection Error: '));
db.once('open',function(callback){
	console.log('Connected to MongoDb at: '+config.db.address+', Port:'+config.db.port);
});
app.use(express.static('public'));

app.get('/',function(req,res){
	res.render('index.html');
});
app.post('/posts/global',function(req,res){
	var post = new Post({
		author: 'Unknown',
		title: req.body.title,
		text: req.body.text,
		postDate: new Date(),
		hidden: false
	});
	post.save(function(err,data){
		if(err)
		{
			console.log(err);
			res.sendStatus(500);
		}
		else
		{ 
			console.log(data);	
		}
	});
	res.sendStatus(200);
});
app.get('/posts/global',function(req,res){
	
	Post.find({},function(err,docs){
		if(err){
			console.log(err);
			res.sendStatus(500);	
		}
		else {
			res.send(docs);
		}
	});
});


app.listen(config.port);
