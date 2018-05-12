var zmq = require('zeromq');
var front = zmq.socket('req')
var front_ID = Math.trunc(Math.random() * (10000 - 1) + 1)

front.on('message',function (respuesta){
	console.log("respuesta recibida ["+respuesta.toString()+"]");
	
});


///////////////////////////////////
front.connect("tcp://my-back:9000");
///////////////////////////////////

var jsonMessage='{"Topic": "KubernetesIsAwesome", "Message": "Hola ke ase"}'

console.log("Enviando.. "+jsonMessage)
front.send(jsonMessage);


//- - - - - - - WEBSITE - - - - - - - -//

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from Kubernetes!! Soy ' + front_ID + '\n');
}).listen(8080, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8080/');

// - - - - - - - - - - - - - - - - - - //
