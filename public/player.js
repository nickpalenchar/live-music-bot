var socket = io();

console.log('running');
socket.on('playNote', function(note){
  // use note with tone.js
  console.log("got the note ", note);
});