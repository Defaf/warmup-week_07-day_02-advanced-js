// 1 Squares
var nums = [1, 2, 3, 4, 5];
var numsSquared = [];

// Use .map() to get the square of nums and store the value in numsSquared
// numsSquared => [1, 4, 9, 16, 25]

// resultsArray = srcArra.map(callBack)
numsSquared = nums.map(num => num * num);
console.log(numsSquared);


// 2 isDivisibleBy3
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var isDivisibleBy3 = [];

// Use .filter() to find out the numbers that are divisible by 3 and store the value in isDivisibleBy3
// isDivisibleBy3 => [3, 6, 9]

isDivisibleBy3 = nums.filter(num => num % 3 === 0)
console.log(isDivisibleBy3);


// 3 Abbreviations
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayAbbreviations = [];

// Find the abbreviation of all days and add them to dayAbbreviations array
// dayAbbreviations => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
dayAbbreviations = days.map(day => day.slice(0, 3));
console.log(dayAbbreviations);


// 4 Capitalize
const iAS = ['ahmed', 'sami', 'moath', 'ghadeer'];
let capitalizedIAs = [];

// Capitalize all the strings in the IA's array and store them in the array capitalizedIA.
// capitalizedIAs => ["GHADEER", "ESRA", "MOATH", "SARAH"]
capitalizedIAs = iAS.map(name => name.toUpperCase());
console.log(capitalizedIAs);


// 5 Crazy numbers, again!
// These crazy numbers are now strings 😯 😯  !!  
const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
let totalNumbersUnder4000 = 0;

// Convert numbers from strings to numbers and sum all numbers under 4000 and store them in totalNumbersUnder4000
// totalNumbersUnder4000 => 3802.4078926536
stringNumbers.forEach((number) => {
  // convert to number
  number = parseFloat(number);

  // check under 4000
  if (number < 4000) {
    // sum
    totalNumbersUnder4000 += number;
  }
});
console.log(totalNumbersUnder4000);