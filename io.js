var io = null;
var socketio = require('socket.io');
var chalk = require('chalk');

module.exports = function (server) {

  if (io) return io;

  io = socketio(server);

  io.on('connection', function (socket) {

    socket.on('test', function () {
      console.log("TEST RECIEVED ");
      socket.emit('test');
    });


    socket.on('disconnect',function () {
      console.log("discennected");
    })
  });

  return io;

};
