const loadingBarItemEl = document.querySelector(".loading-bar-item");
const btn1El = document.querySelector(".btn1");
const btn2El = document.querySelector(".btn2");
const btn3El = document.querySelector(".btn3");

let width = 1;
let loadingBar = setInterval(() => {
  if(width >= 100){
    clearInterval(loadingBar);
  }else {
    width++;
    loadingBarItemEl.style.width = width + "%";
  }
}, 10);

btn1El.addEventListener("click", ()=> {
  const btn1Interval = setInterval(() => {
    if(width > 30){
      width--;
      setWidth(width);
    }else if(width < 30){
      width++;
      setWidth(width);
    }else {
      clearInterval(btn1Interval);
    }
  }, 10);
})


btn2El.addEventListener("click", ()=> {
  const btn2Interval = setInterval(() => {
    if(width > 60){
      width--;
      setWidth(width);
    }else if(width < 60){
      width++;
      setWidth(width);
    }else {
      clearInterval(btn2Interval);
    }
  }, 10);
})
btn3El.addEventListener("click", ()=> {
  const btn3Interval = setInterval(() => {
    if(width < 100){
      width++;
      setWidth(width);
    }else {
      clearInterval(btn3Interval);
    }
  }, 10);
})

const setWidth = (width) => {
  loadingBarItemEl.style.width = width + "%";
}


