var socket = io();

$("input").click(function (e) {
  var clickedButtonValue = e.target.value;
    socket.emit('sendNote', clickedButtonValue);
});
