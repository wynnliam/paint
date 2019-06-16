'use strict';

var express = require('express');
var socket = require('socket.io');

var server = express();

var io = socket(server.listen(process.env.PORT || 8080));

io.on('connection', function(objectSocket) {
	objectSocket.on('paint', function(paintData) {
		io.emit('renderPixel', paintData);
	});
});

console.log("Running server at 8080");
