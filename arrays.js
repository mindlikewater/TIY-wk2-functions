// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------

function findLargest(numbers) {
  var largest = 0;
  var lastInArray = numbers.length;
  for (var count = 0; count < lastInArray; count++) {
    if (numbers[count] > largest) {
      largest = numbers[count];
    }
  }
  return largest;
};


// ---------------------------
// 2. Find longest string
// ---------------------------

function longestString(strings) {
  var longest = strings[0];

  for (var count = 0; count < strings.length; count++) {
    if (strings[count].length > longest.length) {
      longest = strings[count];
    }
    return longest;
  };


// ---------------------------
// 3. Find even numbers
// ---------------------------
function showEven(numbers) {
  var evenNums = [];

  for (var count = 0; count < numbers.length; count++) {
    if (numbers[count] % 2 === 0) {
      evenNums.push(numbers[count]);
    }
  }
  return evenNums;
};


// ---------------------------
// 4. Find odd numbers
// ---------------------------
function showOdd(numbers) {
  var oddNums = [];

  for (var count = 0; count < numbers.length; count++) {
    if (numbers[count] % 2 !== 0) {
      oddNums.push(numbers[count]);
    }
  }
  return oddNums;
};

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

function containsIs (strings) {
  var newArray = [];
  for (var count = 0; count < strings.length; count++) {
    if (strings[count].includes("is")) {
      newArray.push(strings[count]);
    }
  }
  return newArray;
};

// ---------------------------
// 6. Join Both Arrays Together
// ---------------------------
function joins (numbers, strings) {
  var newArray = [];
  for (var count = 0; count < numbers.length; count++) {
    newArray.push(numbers[count]);
  }
  for (var count = 0; count < strings.length; count++) {
    newArray.push(strings[count]);
  }
  return newArray;
};



// ---------------------------
// 7. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------

function findJSteachers (instructors) {
  var newArray = [];
  for (var count = 0; count < instructors.length; count++) {
    
};
