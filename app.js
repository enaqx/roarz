// Create web app
var app = require('express')();

// Create web server
var server = require('http').Server(app);

// Emitter and receiver of events
var io = require('socket.io')(server);

// Port web server resides on
var PORT = 8000;

io.on('connection', function(socket) {
  socket.on('event:new:image',function(data) {
    socket.broadcast.emit('event:incoming:image',data);
  });
});

server.listen(PORT, function() {
  console.log('Socket.io Running');
});
