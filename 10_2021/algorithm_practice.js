/**
==========================

1. vowels count

==========================
**/

function getCount(str) {
  let vowelsCount = 0;
  
  // enter your majic here
  const vowels = "aeiou";
  for (let elem of str) {
    if(vowels.includes(elem)){
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

console.log(getCount("dogooo"));



/**
==========================

2. opposite numbers

==========================
**/

function opposite(number) {
  //your code here
  return number * (-1)
}

console.log(opposite(10));


/**
==========================

3. even or odd

==========================
**/

/* function even_or_odd(number) {
   if(number % 2 === 0){
     return "Even";
   }
   return "Odd";
} */

function even_or_odd(number) {
  return number%2 === 0 ? "Even" : "Odd";
}

console.log(even_or_odd(11));


/**
==========================

4. get middle

==========================
**/


function getMiddle(s)
{
  //Code goes here!
  const k = s.length;
  
  return k % 2 === 0 ? s.slice(k/2 - 1, k/2 + 1) : s[Math.floor(k/2)]
}

console.log(getMiddle("abcd"));

/**
==========================

5. Jaden case

==========================
**/

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

const toJadenCase = (str) => {
  //...
  let wordList = str.split(" ");
  let result = [];
  for(let word of wordList){
    result.push(capitalize(word));
  }
  return result.join(" ");
};



console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));




/**
==========================

6. accum

==========================
**/


const capitalizeAndAccum = (word, num) => {

  console.log(word);

  let suffixStr = "";
  const preffixStr = word.toUpperCase();
  const suffixLetter = word.toLowerCase();


  while (num > 0){
    suffixStr += suffixLetter;
    num --;
  }

  return preffixStr + suffixStr;
}


function accum(s) {
	// your code
  let wordList = s.split("");
  console.log(wordList)
  let result = [];
  for(let i = 0; i < wordList.length; i++){
    result.push(capitalizeAndAccum(wordList[i], i));
  }
  return result.join("-");
}


console.log(accum("abcd"));

/**
==========================

best-solution

function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

==========================
**/



/**
==========================

7. find max

==========================
**/

const findMax = (nums) => {
  let tempMax = nums[0];
  for(let i = 1; i < nums.length; i++){
    if( tempMax <= nums[i] ){
      tempMax = nums[i];
    }
  }
  return tempMax;
}

const findMin = (nums) => {
  let tempMin = nums[0];
  for(let i = 1; i < nums.length; i++){
    if( tempMin >= nums[i] ){
      tempMin = nums[i];
    }
  }
  return tempMin;
}

console.log(findMax([77,-5,2,88,44,22]));
console.log(findMin([77,-5,2,88,44,22]));


/**
==========================

8. square every digit

==========================
**/



function squareDigits(num){

  /* const numStr = num.toString();

  let resultStr = "";

  for(let i = 0; i < numStr.length; i++){
    resultStr = resultStr.concat(Math.pow(parseInt(numStr.charAt(i)), 2))
  } */

  let resultStr = num.toString().split("").map((intChar) => {
    let i = parseInt(intChar);
    return i * i;
  })

  return parseInt(resultStr.join(""));
}

console.log(squareDigits(811181));


/**
==========================

9. Exes and Ohs 

==========================
**/

function XO(str) {
  //code here
  let countOfX = 0;
  let countOfO = 0;

  const strArray = str.split("");
  for (let i = 0; i < strArray.length; i++) {
    if(strArray[i].toLowerCase().match("x") > -1){
      countOfX ++;
    }else if(strArray[i].toLowerCase().match("o") > -1){
      countOfO ++;
    }
  }

  console.log(countOfX)

  console.log(countOfO)
  
  return countOfO === countOfX;

}

console.log(XO("sasdasx"));



/**
==========================

10. Who likes it?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.

==========================
**/



function likes(names) {
  // TODO
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return `${names[0]} + likes this`; break;
    case 2: return `${names[0]} and ${names[1]} like this`; break;
    case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`; break;
    default: return `${names[0]}, ${names[1]} and ${(names.length - 2)} others like this`;
  }
}

console.log(likes(["Bob","Tom","Bob"]));



/**
==========================

better solution:

function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

==========================
**/



/**
==========================

11. Format a string of names like 'Bart, Lisa & Maggie'.

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

==========================
**/

const list = (names) => {

  if(names.length === 0){
    return "";
  }

  let result = names[0]["name"];
  for(let i = 1; i < names.length; i++){
    if( i === names.length - 1){
      result = result.concat(` & ${names[i]["name"]}`);
    }else{
      result = result.concat(`, ${names[i]["name"]}`);
    }
  }

  return result;
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));


/**
==========================

12. A square of squares

Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples

-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false

==========================
**/

isSquare = (num) => {
  if(num < 0){
    return false
  }else{
    const x = parseFloat(Math.sqrt(num));
    return !isNaN(Math.sqrt(num)) && (x | 0) === x;
  }

}
console.log(isSquare(0));

/* 
  best solution:

  function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
} 

*/


/**
==========================

13. Playing with digits

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

Example:
digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51


==========================
**/

const digPow = (n,p) => {
  const numList = n.toString().split("");
  let calResult = 0;
  for(let i = 0; i < numList.length; i++){
    calResult += Math.pow(numList[i],p);
    p++
  }
  return (calResult / n) % 1 === 0 ? calResult / n : -1;
}

console.log(digPow(89,1));
console.log(digPow(92,1));
console.log(digPow(695, 2));
console.log(digPow(46288,3));



/**
==========================

14. Is this a triangle?

Implement a function that accepts 3 integer values a, b, c. The function should return true if a 

triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

==========================
**/

function isTriangle(a,b,c)
{
   if(a + b > c || a + c > b || b + c > a || (a === b && b === c) ){
     return true;
   }
   return false;
}



/**
==========================

15. First non-repeating character

Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

==========================
**/

function firstNonRepeatingLetter(s) {
  // Add your code here

  let result = "";
  let letterNow = "";
  let preSliced = "";
  let sufSliced = "";

  for (let i = 0; i < s.length; i++) {
    letterNow = s.charAt(i);
    preSliced = s.slice(0,i);
    sufSliced = s.slice(i+1);

    if(sufSliced.toLocaleLowerCase().includes(letterNow.toLocaleLowerCase()) || preSliced.toLocaleLowerCase().includes(letterNow.toLocaleLowerCase())){
      continue
    }else{
      result = s.charAt(i);
      break
    }
  } 
  return result;
}

console.log(firstNonRepeatingLetter("sTreSS"));


/**
==========================

16. Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

==========================
**/

var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  let result = [];
  let elementNow = typeof iterable === "String" ? iterable.charAt(0) : iterable[0];
  let elementNext = "";

  for (let i = 1; i <= iterable.length; i++) {
    elementNext = typeof iterable === "String" ? iterable.charAt(i) : iterable[i];
    if(elementNow !== elementNext) {
      result = result.concat(elementNow);
      elementNow = typeof iterable === "String" ? iterable.charAt(i) : iterable[i];
    }
  }

  return result;
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder([1,2,2,3,3]));

/*

Best solution:

function uniqueInOrder(it) {
  var result = []
  var last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  
  return result
} 


*/


/**
==========================

17. Product of consecutive Fib numbers

The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prod you will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.

Some Examples of Return:
(depend on the language)

productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 

==========================
**/

//get Nth Fib number;
const getFib = (n) => {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {

    let c = a + b;
    a = b;
    b = c;
  } 
  return b;
}

function productFib(prod){
  // ...
  let nthFibNumber, nplusFibNumber, nplusMoreFibNumber;

  for (let i = 1; ; i++) {
    nthFibNumber = getFib(i);
    nplusFibNumber = getFib(i + 1);
    nplusMoreFibNumber = getFib(i + 2);
    

    if(prod / nthFibNumber % 1 === 0 && prod === (nthFibNumber * nplusFibNumber)){
      return [nthFibNumber, nplusFibNumber, true];
    }else if( prod > (nthFibNumber * nplusFibNumber) && prod < (nplusFibNumber * nplusMoreFibNumber)){
      return [nplusFibNumber, nplusMoreFibNumber, false];
    }
  }

}

console.log(productFib(714));
console.log(productFib(800));


/**
==========================

18. Vasya - Clerk

The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

==========================
**/

function tickets(peopleInLine){
  
  let numberA = 0;
  let numberB = 0;
  if(peopleInLine[0] !== 25){
    return "NO";
  }

  for(let i = 0; i < peopleInLine.length; i++){
    switch (peopleInLine[i]) {
      case 25:
        numberA += 1;
        break;
      case 50:
        if(numberA > 0){
          numberA -= 1;
          numberB += 1;
          break;
        }else{
          return "NO"
        }
      case 100:
        if(numberB > 0 && numberA > 0){
          numberA -= 1;
          numberB -= 1;
          break;
        }else if(numberA >= 3){
          numberA -= 3;
          break;
        }else{
          return "NO"
        }
      default:
        break;
    }

  }

  return "YES";
}

