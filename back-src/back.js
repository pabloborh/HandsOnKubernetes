var zmq = require('zeromq');
var back_ID = Math.trunc(Math.random() * (10000 - 1) + 1)
var socketRep = zmq.socket('rep');

socketRep.on('message', function(message){
	
	var jsonMessage =JSON.parse(message.toString())
	
	console.log("Mensaje recibido en back:")
	console.log(jsonMessage.Topic);
	console.log(jsonMessage.Message);
	console.log ("- - - - - - - - - - - - -")

	socketRep.send("Hola desde el back " + back_ID);

});

socketRep.bind('tcp://*:9000',function(err){
	if(err){console.log(err);}else{console.log("Escuchando en 9000 !"); }

});



