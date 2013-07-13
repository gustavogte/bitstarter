var express = require('express');

// importar modulo para leer y escribir archivos 
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 //   response.send('Hola mundo 3');
  fs.readFile('./index.html', function (err, data){
      if (err) throw err;
      var buffer = new Buffer(data);
      response.send(buffer.toString('utf-8'));
  });
    
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
