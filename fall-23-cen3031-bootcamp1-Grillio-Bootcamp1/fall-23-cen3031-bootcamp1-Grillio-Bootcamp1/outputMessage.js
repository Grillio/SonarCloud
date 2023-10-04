var response = process.argv[0];
var message = process.argv[1];

function successMessage(){
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write(message);
}