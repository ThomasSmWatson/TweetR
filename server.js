var express = require('express');
var mongoose = require('mongoose');
var app = express();
var config = require('./config/server_config.json');
mongoose.connect('mongodb://'+config.db.address+':'+config.db.port);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'Connection Error: '));
db.once('open',function(callback){
	console.log('Connected to MongoDb at: '+config.db.address+', Port:'+config.db.port);
});
app.use(express.static('public'));

app.get('/',function(req,res){
	res.render('index.html');
});

app.listen(config.port);
