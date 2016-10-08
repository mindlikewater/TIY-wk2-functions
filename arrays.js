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
  for (var count = 0; count < numbers.length; count++) {
    var currentNum = numbers[count];
    if (currentNum > largest) {
      largest = currentNum;
    }
  }
  return largest;
};

/* Brit says you could do it this way, although we saw an error in the sort function in class.
function sortMax (nums) {
  var numsCopy = nums.slice();
  return numsCopy.sort()[nums.length-1];
}; */

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

//Brit's instruction
var concat = function (array1, array2) {
  var newArray = [];

  for (var index = 0; index < array1.length; index++) {
    newArray.push(array1[index]);
  }

  for (var index = 0; index < array2.length; index++) {
    newArray.push(array2[index]);
  }

  return newArray;
};

//items1.concat(concat2);

// ---------------------------
// 7. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------

function findJSteachers (instructors) {
  var newArray = [];

  for (var i = 0; i < instructors.length; i++) {
    var currentObj = instructors[i];
    if (currentObj.teaches === 'JavaScript') {
      newArray.push(currentObj.firstname);
    }
  }
  for (var i = 0; i < newArray.length; i++) {
    newArray = newArray.sort();
  }
  return newArray;
};

/* var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : ['Ruby', 'Javascript']},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

The array above is called 'instructors' and holds 8 objects.
Eg. instructors[2] would give you the object containing Brit and Ruby.
Remember, arrays start at index 0, so JD and Javascript are in instructors[0].

If you want to pull out Brit's name, do this:
instructors[2].firstname;

The . is called a property accessor.

If you want the first language Brit teaches, you would do this:
instructors[2].teaches[0];

var instructor = instructors[x];
var firstlang = instructor.teaches[0];
----------------------------------------------------------------

var each = function (items, action) {
  for (var i = 0; i < items.length; i++) {
    var currentItem = items[i];
    action(currentItem);
  }
};
Note: Action is called a callback--that's another function to run.

Eg:
each(nums, function (x) { return x +1; })
This DOESN'T return the computation! The variable 'each' is in charge; it dictates
what gets returned.  You shouldn't use forEach when you want to keep the data.
forEach is for looping over something.

nums.forEach(function (x)) {
  return x +1;
})
---> This returns 'undefined'.

Eg:
var findEvens = function (nums) {
  var result = [];

  each(nums, function (number) {
    if (number % 2 === 0) {
      result.push(number);
    }
  });
};

var x = 1;
var result = []
each (nums, function(x) {result.push(x+1);})

type 'result' and get: [2, 3, 4, 5, 6]

function doubleNums (nums) {
  var result = [];
  nums.forEach(function(x) {
    result.push(nums[i] * 2);
  });
  return result;
}

*/
