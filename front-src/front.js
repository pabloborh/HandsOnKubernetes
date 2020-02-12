
var front_ID = Math.trunc(Math.random() * (10000 - 1) + 1)
var io = require('socket.io-client')
var socket = io(process.env.BACKEND_ENDPOINT);

var jsonMessage='{"Message": "Hi from front: '+front_ID+' !"}'

console.log("Sending ->["+jsonMessage.toString()+"]")

socket.emit("message",jsonMessage)

socket.on('message', function (data) {
    console.log("Response ->["+data.toString()+"]");

  });


//- - - - - - - WEBSITE - - - - - - - -//

var htmlCode = "\
<html>\
<body style='background-color:white;'>\
<h1>Hello from Kubernetes!! I am " + front_ID + "</h1>\
</body>\
</html>\
"


var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end('Hello from Kubernetes!! I am ' + front_ID + '\n');
    res.end(htmlCode)
}).listen(process.env.WEB_PORT);
console.log('Website listening en :'+process.env.WEB_PORT);

// - - - - - - - - - - - - - - - - - - //
