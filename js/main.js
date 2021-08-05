const hour = document.querySelector("#hand-hour");
const minutes = document.querySelector("#hand-minutes");
const seconds = document.querySelector("#hand-seconds");

const clockSetup = function () {
  const date = new Date();
  const secondsRatio = date.getSeconds() / 60;
  const minutesRatio = (secondsRatio + date.getMinutes()) / 60;
  const hourRatio = minutesRatio + date.getHours() / 12;

  setRotate(seconds, secondsRatio);
  setRotate(minutes, minutesRatio);
  setRotate(hour, hourRatio);
};

const setRotate = function (item, rotateRatio) {
  item.style.setProperty("--rotate", rotateRatio * 360);
};

setInterval(clockSetup, 1000);
clockSetup();
