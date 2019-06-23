# JS forEach(), map(), filter(), and Arrow Functions


## `.forEach()` [read more here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

## `.map()` [read more here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## `.filter()` [read more here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)


## Squares

```js
var nums = [1, 2, 3, 4, 5];
var numsSquared = [];

// Use .map() to get the square of nums and store the value in numsSquared
// numsSquared => [1, 4, 9, 16, 25]
```

## isDivisibleBy3

```js
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var isDivisibleBy3 = [];

// Use .filter() to find out the numbers that are divisible by 3 and store the value in isDivisibleBy3
// isDivisibleBy3 => [3, 6, 9]
```


## Abbreviations
```js
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let dayAbbreviations = [];

// Find the abbreviation of all days and add them to dayAbbreviations array
// dayAbbreviations => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

```

## Capitalize 


```js

const iAS = ['ghadeer', 'esra', 'moath', 'sarah'];
let capitalizedIAs = [];

// Capitalize all the strings in the IA's array and store them in the array capitalizedIA.
// capitalizedIAs => ["GHADEER", "ESRA", "MOATH", "SARAH"]

```


## Crazy numbers, again!

```js

// These crazy numbers are now strings 😯 😯  !!  
const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
let totalNumbersUnder4000 = 0;

// Convert numbers from strings to numbers and sum all numbers under 4000 and store them in totalNumbersUnder4000
// totalNumbersUnder4000 => 3802.4078926536
