//all types
//String Number Boolean Object Null Undefined Symbol


/* //String
console.log('asdasdasd')
console.log('test')

//Number
console.log(123123)
console.log(3.14124)

//Boolean
console.log(true)
console.log(false)

//Variables
var myName = "Rin";
console.log(myName);

var age = 32;
var gpa = 3.123123;
var isMarried = false; */

//if statement
/* if(true) {
  console.log("it's true!");
} */

/* var num = 0;
if (num > 0) {
  console.log("positive")
}else if (num == 0){
  console.log("it's zero!")
}else {
  console.log("negative")
} */

//comparison and logical operators
/* if (6 === 6) {
  console.log("it's true!")
}else {
  console.log("nonono")
} */

/* var num = -4; */
/* if ( num > 0 && num % 2 === 0) {
  console.log("positive and even")
}
 */

/* if ( num > 0 || num % 2 === 0) {
  console.log("positive or even")
}
 */

/* if (!true) {
  console.log("oooops")
} */

//for loop
/* for (starting point; condisiton; increment/decrement){
    code block
}
*/
/* for (let i = 10; i > -1; i--) {
  console.log(i)
} 

let total = 0;

for (let i = 1; i <= 100; i++) {
   total += i;
}

console.log(total) */

//while loop
/* starter or initializer
   condition for when the loop should end
   increment or decrement
*/

/* let i = 0;
while (i < 10) {
  console.log("hello " + i)
  i+=1;
}

let n = 10;
while (n > 0) {
  console.log("hello " + n)
  n--;
} */

/* let total = 0;

let i = 1;
while(i <= 100) {
  total += i;
  i++;
}

console.log(total) */




//functions

//create
/* var greet = (username) => {
  console.log("Hi, I'm " + username)
}

let newName = "Bob";
//run
greet(newName); */

/* var signChecker = (randomNumber) => {
  if(randomNumber > 0){
    console.log("positive")
  }else if(randomNumber < 0){
    console.log("negative")
  }else {
    console.log("It's zero")
  }
}

signChecker(-10) */

/* var addFunction = (a,b) => {
  return a+b;
}

let result = addFunction(1, 2);

console.log(result); */

//Scope
// Global, Local, Block
// global var
/* const fullName = "Joe Harries"
console.log(fullName) */

//Local
/* var whatever = () => {
  let age = 68;
  console.log(age);
  if(true){
    //block scope
    //let result = "good";
    //const result = "good";

    //local scope
    //var result = "good";
  }
  console.log(result);
}

whatever(); */
//This is wrong
// console.log(age);

//block scope

//const things = "hi";

//when to use let or const? 
//Whenever you can use const, use const, or you use let if you have to.


//!!!! no var anymore !!!!


/* const things = "hi";
let newName = "Joe"; */


//Objects
/* 
const person = {
  eyes: 2,
  legs: 2,
  language: "English",
  speak: () => {
    return "hhhhhh";
  }
}

console.log(person.eyes);
console.log(person.speak()); 

person["eyes"];
console.log(person["legs"]);
 */

//Array
/* const fruits = ["apple", "banana", "pear"]
console.log(fruits[1]); */

