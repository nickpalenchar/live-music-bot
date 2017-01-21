var io = null;
var socketio = require('socket.io');
var chalk = require('chalk');

module.exports = function (server) {

  if (io) return io;

  io = socketio(server);

  io.on('connection', function (socket) {

    socket.on('sendNote', function (note) {
      console.log("NOTE RECIEVED, note is ", note);
      socket.emit('test');
    });


    socket.on('disconnect',function () {
      console.log("discennected");
    })
  });

  return io;

};
