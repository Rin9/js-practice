const btnEl = document.querySelector(".roll-btn");
const diceEl = document.querySelector(".dice-image");


function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

btnEl.addEventListener("click", (e) => {

  e.preventDefault();

  const random = randomIntFromInterval(1, 6);

  diceEl.src = `/images/dice${random}.png`;

})