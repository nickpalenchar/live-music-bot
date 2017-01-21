var socket = io();

$(function () {
  console.log("adding event");
  $('#test').click(function(){
    console.log("sending");
    socket.emit('sendNote', 'C4');
  });

});
$("input").click(function (e) {
  var clickedButtonValue = e.target.value;
    socket.emit('sendNote', clickedButtonValue);
});
