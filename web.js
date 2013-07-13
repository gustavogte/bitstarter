var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   response.send('Hola mundo 3');
});
    
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
