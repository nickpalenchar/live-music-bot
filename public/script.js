console.log("hello");

var socket = io();

$(function () {
  console.log("adding event");
  $('#test').click(function(){
    console.log("sending");
    socket.emit('test');
  });

});