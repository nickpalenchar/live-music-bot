console.log("hello");

var socket = io();

$(function () {
  console.log("adding event");
  $('#d').click(function(){
    console.log("sending");
    socket.emit('sendNote', 'D4');
  });

  $('#e').click(function(){
    console.log("sending");
    socket.emit('sendNote', 'E4');
  });

});