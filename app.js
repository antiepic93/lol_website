var express = require("express");
var app = express();
// var Git = require("nodegit");



// Git.Clone("https://github.com/rgilham86/lol_site.git", "nodegit").then(function(repository) {
//   // Work with the repository object here.
// });



app.get('/', function(req, res){
	res.send('home page');
});

app.listen(3000, function(req, res){
	console.log("server listening on port 3000");
});