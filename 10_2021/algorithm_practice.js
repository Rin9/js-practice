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
  
}
