var http = require('http'), 
    fs = require('fs'), 
    port = 8080;
    url = require('url');
    cp = require('child_process');

/* Global variables */
var listingData, server;

fs.readFile('listings.json', 'utf8', function(err, data) {

  if(err){
    console.log('There was a problem reading the file');
    console.log('Fix problems then restart');
    return;
  }

  listingData = data;

});

server = http.createServer(function(request, response) {
  
  var pathTaken = url.parse(request.url).pathname;

  switch(pathTaken){
    case('/listings'):
      successMessage(response, listingData);
      break;
    default:
      response.writeHead(404, {'Content-Type' : 'text/plain'});
      response.end('Bad Gateway Error');
      return;
  }
  response.end();
}).listen(8080);


function successMessage(response, message){
  response.writeHead(200, {'Content-Type' : 'text/plain'});
  response.write(message);
}



