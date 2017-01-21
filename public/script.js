var socket = io();

$("input").click(function (e) {
  var clickedId = e.target.id
    socket.emit('sendNote', clickedId);
});
