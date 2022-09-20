const btnstart = document.querySelector('button[data-start]');
const btnstop = document.querySelector('button[data-stop]');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// const body = document.querySelector('body');
btnstop.disabled = true;
btnstart.addEventListener('click', onStart);
let timerId;

function doDisabledStart () {
  btnstart.disabled = true;
    btnstop.disabled = false;
}

function onStart(event) {
    // btnstart.disabled = true;
    // btnstop.disabled = false;
     doDisabledStart ()
    timerId = setInterval(() => {
        const bodyColor = getRandomHexColor();
        document.body.style.background = bodyColor;
    }, 1000);
}
btnstop.addEventListener('click', onStop);

function doDisabledStop () {
  btnstart.disabled = false;
  btnstop.disabled = true;
}

function onStop() {
  // btnstart.disabled = false;
  // btnstop.disabled = true;
   doDisabledStop()
  clearInterval(timerId);
}
