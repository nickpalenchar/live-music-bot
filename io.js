var io = null;
var socketio = require('socket.io');
var chalk = require('chalk');

module.exports = function (server) {

  if (io) return io;

  io = socketio(server);

  io.on('connection', function (socket) {
    console.log('connectedddd   ');

    socket.on('sendNote', function (note) {
      console.log("TEST RECIEVED ", note);
      io.sockets.emit('playNote', note);
    });

    socket.on('disconnect',function () {
      console.log("discennected");
    })
  });

  return io;

};
