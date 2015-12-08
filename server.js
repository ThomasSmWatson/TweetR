var express = require('express');
var app = express();
var config = require('./config/server_config.json');
app.use(express.static('public'));

app.get('/',function(req,res){
	res.render('index.html');
});

app.listen(config.port);
