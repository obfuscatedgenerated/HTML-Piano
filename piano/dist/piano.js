!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t){e.exports={pianoKey:"piano-key",whiteKey:"white-key",blackKey:"black-key",keyUp:"key-up",keyDown:"key-down",keyHighlighted:"key-highlighted",piano:"piano",whiteKeys:"white-keys",blackKeys:"black-keys",pianoKeyNumber:e=>"piano-key-"+(e||""),pianoNote:e=>"piano-note-"+(e||""),pianoOctave:e=>"piano-octave-"+(e||"")}},function(e,t,n){const o=n(0);function i(e,t){if(!e)return null;if(!e.classList)return null;let n=null;const o=e.classList;for(elementClass of o)if(elementClass.startsWith(t)){n=elementClass.substr(t.length);break}return n}t.pianoKeyNumberFromWhiteKeyNumber=function(e=0,t=[]){let n=0;for(let o=0;o<e;o++)1==t[o]&&n++;return e+n},t.pianoKeyNumberFromBlackKeyNumber=function(e,t){},t.arrayFromBlackKeys=function(e){e=e||[];const t=[];for(layout of e){const e=layout.visible?1:0;for(let n=0;n<layout.amount;n++)t.push(e)}return t},t.keyNumber=function(e){const t=i(e,o.pianoKeyNumber());return t?Number(t):null},t.keyNote=function(e){const t=i(e,o.pianoNote());return t||null},t.keyOctave=function(e){const t=i(e,o.pianoOctave());return t?Number(t):null}},function(e,t){e.exports=class extends Error{}},function(e,t,n){const o=n(0);function i(e){const t=["z","x","c","v","b","n","m",",",".","/"],n=["a","s","d","f","g","h","j","k","l",";","'"];let o=[];for(let i=0;i<e.whiteKeysAmount;i++){1==e.blackKeysArray[i]&&i<n.length&&o.push(n[i]),i<t.length&&o.push(t[i])}return o}function s(e,t,n){const s=i(t);for(let i=0;i<s.length;i++)if(e===s[i]){const e=o.pianoKeyNumber(i+n),s=t.HTML.querySelectorAll("."+e);return s.length>0?s[0]:null}return null}t.keyArray=i,t.keyForLetter=s,t.addLettersToKeys=function(e,t){const n=i(e);for(const o of n){const n=s(o,e,t);if(!n)continue;const i=document.createElement("p");i.classList.add("musical-typing-letter"),i.innerText=o,n.appendChild(i)}},t.removeLettersFromKeys=function(e){const t=e.HTML.querySelectorAll(".musical-typing-letter");for(const e of t)e.remove()}},function(e,t,n){n(0);e.exports=function(n){let o={},i=[];return t=e.exports,document.addEventListener("keydown",function(e){if(!o[e.key]){for(piano of i){const t=n.keyForLetter(e.key,piano,piano.keyboardStartingKeyNumber);t&&piano._keyDown(t)}o[e.key]=!0}}),document.addEventListener("keyup",function(e){for(piano of i){const t=n.keyForLetter(e.key,piano,piano.keyboardStartingKeyNumber);t&&piano._keyUp(t)}o[e.key]=null}),t.addKeyboardEvents=function(e,t,n){e.keyboardStartingKeyNumber=n,i.push(e)},t.removeKeyboardEvents=function(e){const t=i.indexOf(e);t>-1&&i.splice(t,1)},t}},function(e,t,n){e.exports=function(e){n(1);const o=n(0);return t.pianoElementMake=function(){const t=e.createElement("div");t.classList.add(o.piano);const n=e.createElement("div");n.classList.add(o.whiteKeys),t.appendChild(n),this.whiteKeysWrapper=n,this.whiteKeys=[];const i=e.createElement("div");return i.classList.add(o.blackKeys),t.appendChild(i),this.blackKeysWrapper=i,this.blackKeys=[],t},t.whiteKeyMake=function(t,n,i,s){const a=e.createElement("div");return a.classList.add(o.pianoKey,o.whiteKey,o.keyUp,"white-key-"+t,o.pianoKeyNumber(i)),this.whiteKeysWrapper.appendChild(a),this.whiteKeys.push(a),a.style.cssText=`width: ${n}%`,a},t.blackKeyMake=function(t,n,i,s){const a=e.createElement("div");return a.classList.add(o.pianoKey,o.blackKey,"black-key-"+t,o.pianoKeyNumber(i)),this.blackKeysWrapper.appendChild(a),this.blackKeys.push(a),a.style.cssText=`width: ${n}%`,a},t.blackBlankMake=function(t,n,o,i=!1){const s=e.createElement("div");s.classList.add("black-key-blank"),this.blackKeysWrapper.appendChild(s),i&&t--;let a=i?o-n/2:o-n;for(let e=0;e<t;e++)a+=o;return s.style.cssText=`width: ${a}%; height: 10px;`,s},t}},function(e,t,n){e.exports=function(e){const o=n(1),i=n(5)(e||window.document),s=n(2),a=n(0);function r(e,t){return this.whiteKeysAmount=e,this.blackKeysLayout=t,this.blackKeyWidthPercent=100/e/1.5,this.whiteKeyWidthPercent=100/e,this.blackKeysArray=o.arrayFromBlackKeys(t),this.HTML=i.pianoElementMake.call(this),function(){for(let e=1;e<=this.whiteKeysAmount;e++){const t=o.pianoKeyNumberFromWhiteKeyNumber(e,this.blackKeysArray);i.whiteKeyMake.call(this,e,this.whiteKeyWidthPercent,t,this.whiteKeysAmount)}}.call(this),function(){let e=1,t=0,n=!0;for(let o=0;o<=this.blackKeysArray.length-1;o++){if(0===this.blackKeysArray[o]){t++;continue}i.blackBlankMake.call(this,t,this.blackKeyWidthPercent,this.whiteKeyWidthPercent,n);const s=o;i.blackKeyMake.call(this,e,this.blackKeyWidthPercent,s+e,this.whiteKeysAmount),e++,t=0,n=!1}}.call(this),this.numberOfWhiteKeys=e,this.numberOfBlackKeys=this.blackKeysArray.filter(e=>e).length,this}t.buildPianoWithWhiteKeysAmount=r;const c={whiteToBlackKeyMap:{c:"c-sh",d:"d-sh",f:"f-sh",g:"g-sh",a:"a-sh"},nextKeyMap:{c:"c-sh","c-sh":"d",d:"d-sh","d-sh":"e",e:"f",f:"f-sh","f-sh":"g",g:"g-sh","g-sh":"a",a:"a-sh","a-sh":"b",b:"c"},blackNotes:["c-sh","d-sh","f-sh","g-sh","a-sh"],whiteNotes:["c","d","e","f","g","a","b"],octaves:[0,1,2,3,4,5,6,7,8]};function l(e,t,n,o){const i=a.pianoKeyNumber(t),s=e.HTML.querySelector("."+i);s.classList.add(a.pianoNote(n)),s.classList.add(a.pianoOctave(o))}function u(e,t){!function(e,t){if(!e||!t)throw new s;if(!c.whiteNotes.includes(e.note)&&!c.blackNotes.includes(e.note))throw new s("Invalid Start Note");if(!c.octaves.includes(e.octave))throw new s("Invalid Start Octave");if(!c.whiteNotes.includes(t.note)&&!c.blackNotes.includes(t.note))throw new s("Invalid End Note");if(!c.octaves.includes(t.octave))throw new s("Invalid End Octave");if(e.octave>t.octave)throw new s("Can't build a piano if the starting octave is larger than the ending octave");if(e.octave===t.octave&&c.whiteNotes.indexOf(e.note)>c.whiteNotes.indexOf(t.note))throw new s;if(c.blackNotes.includes(e.note)||c.blackNotes.includes(t.note))throw new s}(e,t);let n=null,o=null;for(let i=0;i<c.whiteNotes.length;i++){const s=c.whiteNotes[i];n||s===e.note&&(n=i),o||s===t.note&&(o=i)}const i=c.whiteNotes.length;let a=o-n+1;a+=i*(t.octave-e.octave);let r=[];function l(e,t){r.push({visible:e,amount:t})}let u=1,y=0,h=null;for(let s=n+e.octave*i;s<o+t.octave*i;s++){const e=s%i,t=c.whiteNotes[e],n=c.whiteToBlackKeyMap[t];n?y++:u++,!n&&h&&(l(!0,y),y=0),n&&!h&&(l(!1,u),u=0),h=n}return y>0&&l(!0,y),{whiteKeysAmount:a,blackKeyLayout:r}}return t.buildPianoWithNotes=function(e,t){const n=u(e,t);this.startNoteData=e,this.endNoteData=t;const o=r.call(this,n.whiteKeysAmount,n.blackKeyLayout);let i=1,s=e.octave,a=e.note;for(;l(o,i,a,s),a!==t.note||s!==t.octave;)i++,(a=c.nextKeyMap[a])===c.whiteNotes[0]&&s++},t.keysFromNotes=u,t}},function(e,t,n){n(0);let o=!1;function i(e,t){for(key of t)key.addEventListener("pointerdown",function(t){if(o)return!1;o=!0,e._keyDown(this)}),key.addEventListener("pointerup",function(t){if(!o)return!1;o=!1,e._keyUp(this)}),key.addEventListener("pointerout",function(t){if(!o)return!1;e._keyUp(this)}),key.addEventListener("pointerover",function(t){if(!o)return!1;e._keyDown(this)})}t.addPianoKeyEventListeners=function(e){i(e,e.whiteKeys),i(e,e.blackKeys)}},function(e,t,n){"use strict";e.exports=function(e){const t=n(1),o=n(7),i=n(0),s=n(6)(e.document);let a={keyUp:()=>{},keyDown:()=>{},forceKeyDown:function(e){e&&e.classList&&this._keyDown(e)},forceKeyUp:function(e){e&&e.classList&&this._keyUp(e)},_keyDown:function(e){e.classList.remove(i.keyUp),e.classList.add(i.keyDown),this.keyDown(e)},_keyUp:function(e){e.classList.add(i.keyUp),e.classList.remove(i.keyDown),this.keyUp(e)},enableMusicalTyping:function(e=1){this._keyboardEvents.addKeyboardEvents(this,this._pianoLetters,e),this._pianoLetters.addLettersToKeys(this,e)},disableMusicalTyping:function(){this._keyboardEvents.removeKeyboardEvents(this),this._pianoLetters.removeLettersFromKeys(this)},get totalKeys(){return this.numberOfWhiteKeys+this.numberOfBlackKeys},get _keyboardEvents(){return n(4)(this._pianoLetters)},get _pianoLetters(){return n(3)},keyOctave:e=>t.keyOctave(e),keyNumber:e=>t.keyNumber(e),keyNote:e=>t.keyNote(e)};function r(e){const t=Object.create(a);return e(t),o.addPianoKeyEventListeners(t),t}function c(){return"number"==typeof arguments[0]?(e=arguments[0],t=arguments[1],r(n=>{s.buildPianoWithWhiteKeysAmount.call(n,e,t)})):"object"==typeof arguments[0]?(n=arguments[0],o=arguments[1],r(e=>{s.buildPianoWithNotes.call(e,n,o)})):null;var e,t,n,o}return e.newPiano=c,{newPiano:c}}},function(e,t,n){"use strict";n(8)(window),window.PianoBuildError=n(2)}]);