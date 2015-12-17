var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema(
{
	author: String,
	title: String,
	text: String,
	postDate:Date,
	hidden:Boolean,
});

module.exports  = mongoose.model('Post',postSchema);
