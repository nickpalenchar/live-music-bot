var noteLib = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];

function makeNote(word){
  if(!word) return noteLib[0];

  var letters = word.split("");
  var code = letters.reduce(function(a, b) {
    console.log(a, b)
    return a + b.charCodeAt(0)}, 0);

  var noteIndex = code % 7;

  return noteLib[noteIndex];
}

function makeNotesFromSentence(sentence) {
  var words = sentence.split(" ");
  var notes = words.map(makeNote);
  return notes.concat(noteLib[0]);
}
