'use strict';

var express = require('express');
var socket = require('socket.io');

var server = express();

var io = socket(server.listen(process.env.PORT || 8080));

server.get('/', function(req, res) {
	res.sendFile(__dirname + '/paint.html');
});

io.on('connection', function(objectSocket) {
	objectSocket.on('paint', function(paintData) {
		io.emit('renderPixel', paintData);
	});
});

console.log("Running server at 8080");
