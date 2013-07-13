var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require ('fs'); // importar modulo para leer archivos
    fs.readFile('index.html', 
	function (err, data){
	    if (err) throw err;
	    response.send(data.toString());
	}
    );
    // reponse.send('Hello World 2!')
});
    
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
