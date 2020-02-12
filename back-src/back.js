var back_ID = Math.trunc(Math.random() * (10000 - 1) + 1)

var io = require('socket.io').listen(process.env.SOCKET_SERVER_PORT);

io.sockets.on('connection', function (socket) {
	
	// Echo back messages from the client
	socket.on('message', function (message) {
		var jsonMessage =JSON.parse(message.toString())
		console.log("Recived ->["+jsonMessage.Message+"]");
		socket.emit("message","Hi from back: " + back_ID);
	});  
});



