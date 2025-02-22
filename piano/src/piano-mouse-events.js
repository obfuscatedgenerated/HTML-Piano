const pianoClassNames = require('./piano-class-names');

// True if the mouse is currently down
let mouseDown = false;


function addMouseEventListenersToKeys(piano, keys) {
  for (key of keys) {
    key.addEventListener('pointerdown', function(event) {
      if (mouseDown) {return false;}
      mouseDown = true;
      piano._keyDown(this);
      // return false;
    });
    key.addEventListener('pointerup', function(event) {
      if (!mouseDown) {return false;}
      mouseDown = false;
      piano._keyUp(this);
      // return false;
    });
    key.addEventListener('touchend', function(event) {
      if (!mouseDown) {return false;}
      mouseDown = false;
      piano._keyUp(this);
      // return false;
    });
    key.addEventListener('mouseout', function(event) {
      if (!mouseDown) {return false;}
      piano._keyUp(this);
      // return false;
    });
  }
}

function addPianoKeyEventListeners(piano) {
  addMouseEventListenersToKeys(piano, piano.whiteKeys);
  addMouseEventListenersToKeys(piano, piano.blackKeys);
}
exports.addPianoKeyEventListeners = addPianoKeyEventListeners;
