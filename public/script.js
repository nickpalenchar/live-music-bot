var socket = io();

$('input').click(function (e) {
  var clickedButtonValue = e.target.value;
    socket.emit('sendNote', clickedButtonValue);
});

$('#submit-text').on('click',function (e) {
  console.log('here');
  var typedText = $('#text').val();
  console.log(makeNotesFromSentence(typedText));
})
