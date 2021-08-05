setInterval(clockSetup, 1000);
const hour = document.querySelector("#hand-hour");
const minutes = document.querySelector("#hand-minutes");
const seconds = document.querySelector("#hand-seconds");

function clockSetup() {
  const currDate = new Date();
  const secondsRatio = currDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currDate.getMinutes()) / 60;
  const hourRatio = minutesRatio + currDate.getHours() / 12;

  setRotate(seconds, secondsRatio);
  setRotate(minutes, minutesRatio);
  setRotate(hour, hourRatio);
}

function setRotate(element, rotateRatio) {
  element.style.setProperty("--rotate", rotateRatio * 360);
}

clockSetup();
