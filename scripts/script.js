 'use strict';

let timer = setInterval(switchOn, 500);
let numberOfCalling = 0;
 function switchOn() {
  if (numberOfCalling == icones.children.length) {
  clearInterval(timer);
  return;
}
   icones.children[numberOfCalling].style.opacity = 1;
  numberOfCalling++;
}

let icones = document.querySelector('#icones');
for (let icone of icones.children) {
icone.onmouseover = icone.onmouseout = handler;
}

function handler(event) {
  if (event.type == 'mouseover') {
  for (let icone of icones.children) {
  if (icone !== event.target.closest('.icone')) {
  icone.style.opacity = 0.4;
}
}
}
if (event.type == 'mouseout') {
 for (let icone of icones.children) {
    icone.style.opacity = 1;

}
}
}

