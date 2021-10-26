const timerDayEl = document.querySelector(".timer-day");
const timerHourEl = document.querySelector(".timer-hour");
const timerMinEl = document.querySelector(".timer-min");
const timerSecEl = document.querySelector(".timer-sec");


const getTimeDifference = (start, end) => {
  let milliSeconds = Math.floor(end - start);
  let seconds = Math.floor(milliSeconds/1000);
  let minutes = Math.floor(seconds/60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours = hours - (days * 24);
  minutes = minutes - (days * 24 * 60) - (hours * 60);
  seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

  return {
    "days": days,
    "hours": hours,
    "minutes": hours,
    "seconds": seconds
  }
}



let timer = setInterval(() => {
  const startDate = new Date();
  const endDate = new Date("April 26, 2022 07:30:00");

  let timeDiffObj = getTimeDifference(startDate, endDate);
  timerDayEl.textContent = timeDiffObj.days;
  timerHourEl.textContent = timeDiffObj.hours;
  timerMinEl.textContent = timeDiffObj.minutes;
  timerSecEl.textContent = String(timeDiffObj.seconds).length < 2? "0"+timeDiffObj.seconds : timeDiffObj.seconds;
}, 1000);

