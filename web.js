var express = require('express');

// importar modulo para leer y escribir archivos 
var fs = require('fs');

///// leer archivo de index.html

var leerArchivo = function(archivo) {
    fs.readFile(archivo, function (err, data){
	if (err) throw err;
	data.toString();
    });
};
////////
 
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 //   response.send('Hola mundo 3');
  fs.readFile('./index.html', function (err, data){
  if (err) throw err;
  response.send(data.toString());
  });

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
