var socket = io();
var synth = new Tone.AMSynth();

console.log('running');
socket.on('playNote', function(note){

  Tone.Transport.bpm.value = 40;

  var current_note = 0;
  var gain  = new Tone.Gain(0.5);

  synth.connect(gain);
  gain.toMaster();

  // synth.voice0.oscillator.type = 'triangle';
  // synth.voice1.oscillator.type = 'triangle';

  // Tone.Transport.scheduleRepeat(function(time) {
  //   var note = notes[current_note % notes.length];
  //   synth.triggerAttackRelease(note, '8n', time);
  //   current_note++;
  // }, '8n');

synth.triggerAttackRelease(note, '8n');

  // start the repeat
  Tone.Transport.start();
  // Tone.Transport.pause();
});
