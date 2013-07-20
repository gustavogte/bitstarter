var express = require('express');
var fs = require ('fs');
var htmlfile = 'index.html';

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    fs.readFile(htmlfile, 
	function (err, data){
	    if (err) throw err;
	    response.send(data.toString());
	}
    );
    // reponse.send('Hello World 2!') desde awshost 1
});
    
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
