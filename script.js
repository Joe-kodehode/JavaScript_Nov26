// Methods (built-in functions)

// A method in JavaScript is a built-in function that you use with a specific type of data, like strings, numbers or arrays. It lets you do something with that data—like change it, check it, copy or access part of it. Some methods alter the original piece of data, others don't alter the original!

// Section 1: String Methods

const text = "     Hello, JavaScript World World!      ";

console.log(text);
console.log(text.trim()); // removes whitespace from both ends of the string. Does not alter original string.
console.log(text.toUpperCase()); // converts the string to all uppercase
console.log(text.toLowerCase()); // converts the string to all lowercase
console.log(text.indexOf("World")); // returns the index of the first instance of the start of the passed in string
console.log(text.slice(5, 10)); // slices out a pice of the string between the given indexes (start included, end excluded).
console.log(text.replace("World", "Universe")); // replaces the first instance of the string with the new string
console.log(text.replaceAll("World", "Galaxy")); // replaces all instances of the string with the new string
console.log(text.charCodeAt(5)); // returns the unicode number for the character at the given index
console.log(text.repeat(3)); // repeats the string

console.log(text.length); // returns the length of the string (how many characters in total in the string)

// Section 1.1: Converting a String into an Array
console.log(text.trim().split(" "));

// Section 1.2: Converting a String into a Number
let numberString = "123.456xyz";

console.log(Number(numberString)); // returns the string as a number. if any part of the string is invalid, returns NaN (Not a Number)
console.log(parseInt(numberString)); // returns only the whole number, ignores invalid and decimals.
console.log(parseFloat(numberString)); // returns the number, including the decimal but stops when it gets to invalid characters

// Section 2: Array Methods
const colors = ["Red", "Green", "Blue"];

console.log(colors.length); // returns the number of elements in the array. Starts at 1, not 0! We're not checking the index!!

colors.push("Yellow"); // adds the passed in element to the end of the array
console.log(colors);
const poppedColor = colors.pop(); // removes the last element from the array, can be stored in a new variable if you want.
console.log(poppedColor);
console.log(colors);
colors.unshift("Purple"); // adds the passed in element to the start of the array
console.log(colors);
colors.shift(); // removes the first element from the array, can be stored in a new variable if you want.
console.log(colors);
console.log(colors.includes("Green")); // checks for element in the array, returns true or false
const newColors = colors.toSpliced(1, 2, "Brown"); // replaces element(s) with other element(s). Does not alter the original array. Syntax: toSpliced(startIndex, amount, replaceWith)
console.log(newColors);
console.log(colors);
colors.splice(0, 1, "Orange", "Pink"); // Same as toSpliced, but alters original array.
console.log(colors);

const unsortedNumbers = [4, 7, 3, 4, 3, 7, 5, 4, 8, 1];
const sortedNumbers = unsortedNumbers.toSorted(); // Sorts the array alphabetically, does not alter original array.
console.log(sortedNumbers);
unsortedNumbers.sort(); // Same as toSorted but alters the original array
console.log(unsortedNumbers);
console.log(colors.sort());
console.log(sortedNumbers[0]);
console.log(sortedNumbers.at(0)); // returns the element at the given index
console.log(sortedNumbers.at(-1)); // returns the last element in the array (increase number to go further)
const reversedNumbers = sortedNumbers.toReversed(); // reverses the array, does not alter the original
console.log(reversedNumbers);
sortedNumbers.reverse(); // same as .toReversed() but alters the original array
console.log(sortedNumbers);

// Section 2.1: Converting an Array into a String
console.log(colors);
console.log(colors.join(" "));

// Section 3: Number Methods
const myNum = 3.837549;

console.log(myNum.toExponential()); // converts our number into exponential notation
console.log(myNum.toFixed(2)); // rounds our number to the nearest 2 decimal places AND converts it to a string
console.log(myNum.toString()); // converts the number into a string

// Section 4: Chaining methods together

const rawString = "   JavaScript is fun!    ";
// remove whitespace from both ends
// replace "fun" with "cool"
// convert to all uppercase

const processedString = rawString.trim().replace("fun", "cool").toUpperCase();
console.log(processedString);

const wordsArr = ["hElLO", "woRLD"];
// convert our array into a string and make it lowercase

const fixedWords = wordsArr.toLowerCase().join(" ");
console.log(fixedWords);

// Bonus: Rounding numbers with Math

console.log(Math.round(123.89)); // Math.round() rounds to the nearest whole number.
console.log(Math.ceil(123.45)); // Math.ceil() rounds up
console.log(Math.floor(123.89)); // Math.floor() rounds down

// If a console error says "is not a function" you're probably running a method on the wrong datatype!!
