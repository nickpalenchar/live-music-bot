// algorithm

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

// Tone.js

Tone.Transport.bpm.value = 40;

var notes = makeNotesFromSentence("who let the dogs out?");

// var notes = ['F4', 'E4', 'G4', 'B4'];
var current_note = 0;

// http://tonejs.org/docs/#DuoSynth
var synth = new Tone.AMSynth();
var gain  = new Tone.Gain(0.5);

synth.connect(gain);
gain.toMaster();

// synth.voice0.oscillator.type = 'triangle';
// synth.voice1.oscillator.type = 'triangle';

Tone.Transport.scheduleRepeat(function(time) {
  var note = notes[current_note % notes.length];
  synth.triggerAttackRelease(note, '8n', time);
  current_note++;
}, '8n');

// start the repeat
Tone.Transport.start();
// Tone.Transport.pause();