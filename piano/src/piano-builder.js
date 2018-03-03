const pianoUtilities = require('./piano-utilities');
const pianoDOM = require('./piano-DOM');
const PianoBuilderError = require('./piano-build-error');
  
function buildWhiteKeys() {
  for (let i = 1; i <= this.whiteKeysAmount; i++) {
    const pianoKeyNumber = pianoUtilities.pianoKeyNumberFromWhiteKeyNumber(i, this.blackKeysArray);
    pianoDOM.whiteKeyMake.call(this, i, this.whiteKeyWidthPercent, pianoKeyNumber, this.whiteKeysAmount);
  }
}

function buildBlackKeys() {
  let blackKeyNumber = 1;
    
  let numberOfWhitesSinceLastBlack = 0;
  let isFirst = true;
  for (let i = 0; i <= this.blackKeysArray.length-1; i++) {
    if (this.blackKeysArray[i] === 0) {
      numberOfWhitesSinceLastBlack++;
      continue;
    }
    pianoDOM.blackBlankMake.call(this, numberOfWhitesSinceLastBlack, this.blackKeyWidthPercent, this.whiteKeyWidthPercent, isFirst);
    const numberOfWhites = i;
    pianoDOM.blackKeyMake.call(this, blackKeyNumber, this.blackKeyWidthPercent, numberOfWhites+blackKeyNumber, this.whiteKeysAmount);
    blackKeyNumber++;
    numberOfWhitesSinceLastBlack = 0;
    isFirst = false;
  }
}

function buildPianoWithWhiteKeysAmount(whiteKeysAmount, blackKeysLayout) {
  // Properties
  this.whiteKeysAmount = whiteKeysAmount;
  this.blackKeysLayout = blackKeysLayout;
  this.blackKeyWidthPercent = 100.0/whiteKeysAmount/1.5;
  this.whiteKeyWidthPercent = 100.0/whiteKeysAmount;

  // Utility
  this.blackKeysArray = pianoUtilities.arrayFromBlackKeys(blackKeysLayout);

  // DOM
  this.HTML = pianoDOM.pianoElementMake.call(this);
  buildWhiteKeys.call(this);
  buildBlackKeys.call(this);

  return this;
}
exports.buildPianoWithWhiteKeysAmount = buildPianoWithWhiteKeysAmount;


class PianoBuildError extends Error {}

/*
Note data has a note and an octave, valid octaves are 0 - 8
https://en.wikipedia.org/wiki/Piano
*/

function buildPianoWithNotes(startNoteData, endNoteData) {
  if (!startNoteData || !endNoteData) {
    throw new PianoBuilderError();
  }

  const keyMap= {'c':'c#', 'd': 'd#', 'f': 'f#', 'g': 'g#', 'a': 'a#'};
  const blackNotes = ['c#', 'd#', 'f#', 'g#','a#'];
  const whiteNotes = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
  const octaves = [0,1,2,3,4,5,6,7,8];
  
  if (!whiteNotes.includes(startNoteData.note) && !blackNotes.includes(startNoteData.note)) {
    // Invalid start note
    throw new PianoBuilderError();
  }
  if (!octaves.includes(startNoteData.octave)) {
    // Invalid start octave
    throw new PianoBuilderError();
  }

  if (!whiteNotes.includes(endNoteData.note) && !blackNotes.includes(endNoteData.note)) {
    // Invalid start note
    throw new PianoBuilderError();
  }
  if (!octaves.includes(endNoteData.octave)) {
    // Invalid start octave
    throw new PianoBuilderError();
  }

  this.startNoteData = startNoteData;
  this.endNoteData = endNoteData;

  return this;
}
exports.buildPianoWithNotes = buildPianoWithNotes;
