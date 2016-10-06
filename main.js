///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum(num1, num2) {
  return num1 + num2;
};


// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg(value1, value2, value3) {
  return (value1 + value2 + value3) / 3;
};

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

//I don't know the answer.
function getLength(words) {
  wordsArray = words.split("");
  console.log(wordsArray);
};


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan(value1, value2) {
  if (value2 > value1) {
    return true;
  }
  else return false;
};


// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet(name) {
  return "Hello, " + name + "!";
};


// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

function madlib(word1, word2, word3, word4) {
  return "The " + word1 + " man walked " + word2 + " with a" +
  word3 + " while talking to " + word4 + ".";
};


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2) {
    if (num1 > num2) {
      return num1;
    }
    else {
      return num2;
    }
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
      return num1;
    }
    else if (num2 > num1 && num2 > num3) {
      return num2;
    }
    else if (num3 > num1 && num3 > num2) {
      return num3;
    }
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
    if (char === "a" || char === "A") {
      return true;
    }
    else if (char === "e" || char === "E") {
      return true;
    }
    else if (char === "i" || char === "I") {
      return true;
    }
    else if (char === "o" || char === "O") {
      return true;
    }
    else if (char === "u" || char === "U") {
      return true;
    }
    else {
      return false;
    }
};

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(string) {
    /*
      var tempString = "";
      split string into array of characters.
      if (char !isVowel) {
        tempString = consonant + "o" + consonant;
      }
      else {
      tempString = original character;
    } */

};

rovarspraket("this is fun");

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string) {
  var tempString = "";
  for (count = string.length-1; count >= 0; count--) {
    tempString += string[count];
  }
    return tempString;
  };
