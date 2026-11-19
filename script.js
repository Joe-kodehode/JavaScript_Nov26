// Functions & Methods recap

// Section 1: Check if an item is in an array

// make a function which checks if an item is in the array
// 1. it's not always cheese. ✅
// 2. we're not actually checking if the list includes the item ✅
// 3. refactor using ternary rather than if/else
// 4. What if I want to check a different array but use the same function ?

// function checkItem(item) {
//   if (shoppingList.includes(item)) {
//     return `The list does include ${item}`;
//   } else {
//     return `The list doesn't include ${item}`;
//   }
// }

const shoppingList = ["milk", "bread", "cheese"];
const gamesList = [
  "GTA6",
  "pong",
  "WoW",
  "Solitaire",
  "Zelda",
  "Animal Crossing",
  "Hello kitty: island adventure",
];

function checkItem(item, arr) {
  const doesDoesnt = arr.includes(item) ? "does" : "doesn't";

  return `The list ${doesDoesnt} include ${item}`;
}

console.log(checkItem("cheese", shoppingList)); // check the shopping list
console.log(checkItem("cucumber", shoppingList)); // check the shopping list
console.log(checkItem("Zelda", gamesList)); // check the games list

// Section 2: Convert a String into Kebab Case

function toKebabCase(string) {
  return string.replaceAll(" ", "-");
}

console.log(toKebabCase("hello this is kebab case"));
console.log(toKebabCase("bla bla bla"));

// Section 3: Function to check if a word is a palindrome

function checkPalindrome(word) {
  //   do a check to see if "word" is the same as "word" reversed
  if (word === word.split("").reverse().join("")) {
    return `The word ${word} is a palindrome`;
  } else {
    return `The word ${word} is not a palindrome`;
  }
}

console.log(checkPalindrome("Racecar"));
console.log(checkPalindrome("banana"));

// Section 4: Math.random()

// Pseudo random - simulated randomness

// Math.random() is a built-in JavaScript method that gives you a random number between 0 (inclusive) and 1 (exclusive).  0.0000000000000000 - 0.9999999999999999

// 0.0000000000000000 - 0.9999999999999999
console.log(Math.random());

// 0-9
// console.log(Math.floor(Math.random() * 10));

// 1-10
// console.log(Math.floor(Math.random() * 10) + 1);

// 5-10
console.log(Math.floor(Math.random() * 6) + 5);

const pokemon = [
  "pikachu",
  "diglett",
  "electrode",
  "machop",
  "magikarp",
  "mew",
  "blastoise",
  "vaporeon",
  "psyduck",
  "meowth",
];

// get a random number between 0-9
const randomIndex = Math.floor(Math.random() * 10);

// log a random pokemon based on the random index
console.log(pokemon[randomIndex]);

// Section 5: Shorten a string

function shorten(string, maxLength) {
  if (string.length > maxLength) {
    return string.slice(0, maxLength) + "...";
  }

  return string;
}

console.log(shorten("This is a long sentence that needs shortening!", 20)); //20
console.log(shorten("This is short", 10)); //10

// Section 6: Rock, Paper, Scissors - function, methods, random

function rockPaperScissors(p1Answer, p2Answer) {
  switch (p1Answer + p2Answer) {
    case "Rock" + "Rock":
    case "Scissors" + "Scissors":
    case "Paper" + "Paper":
      return "It's a draw!";
    case "Rock" + "Scissors":
    case "Scissors" + "Paper":
    case "Paper" + "Rock":
      return "computer 1 wins!";
    case "Scissors" + "Rock":
    case "Paper" + "Scissors":
    case "Rock" + "Paper":
      return "computer 2 wins!";
    default:
      return "Error!";
  }
}

// Set computer variable to a random answer "Rock", "Paper", "Scissors"
const possibleAnswers = ["Rock", "Paper", "Scissors"];

// Random number between 0-2
const ranInd1 = Math.floor(Math.random() * 3);
const ranInd2 = Math.floor(Math.random() * 3);

// Variables to store random answers, "Rock", "Paper" or "Scissors"
let computer1 = possibleAnswers[ranInd1];
let computer2 = possibleAnswers[ranInd2];

// Sending the answers to the console
console.log("Comp1 answer:", computer1);
console.log("Comp2 answer:", computer2);

// Calling the function, passing in the random answers
console.log(rockPaperScissors(computer1, computer2));
