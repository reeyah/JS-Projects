setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock(){
  const currDate = new Date();
  const secondsRatio = currDate.getSeconds() / 60;
  const minuteRatio = (secondsRatio + currDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currDate.getHours()) / 12;
  setRotation(secondHand , secondsRatio ); 
  setRotation(minuteHand, minuteRatio); 
  setRotation(hourHand, hourRatio); 
}

function setRotation(element, rotationRatio){
  element.style.setProperty('--rotate', rotationRatio*360);
}

setClock();