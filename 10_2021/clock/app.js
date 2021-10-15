const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");


function setDate(){
  const nowDate = new Date();

  const getSecond = nowDate.getSeconds();
  const getMinute = nowDate.getMinutes();
  const getHour = nowDate.getHours();

  const secondDegree = (getSecond / 60) * 360;
  second.style.transform = `rotate(${secondDegree}deg)`;
  const minuteDegree = (getMinute / 60) * 360;
  minute.style.transform = `rotate(${minuteDegree}deg)`;
  const hourDegree = (getHour / 12) * 360;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);