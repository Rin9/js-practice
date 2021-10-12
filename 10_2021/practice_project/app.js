console.log("Hi");


console.log("anthoer line");

let h1EL = document.querySelector("h1");

h1EL.style.color = "yellow";

let content = document.createElement("p");

content.innerHTML = "hey this is the content inside the p tag";

document.querySelector("body").appendChild(content);