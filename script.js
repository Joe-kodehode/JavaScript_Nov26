// Loops

// A loop is a way to repeat code without writing it multiple times.

// Section 1: Why we use loops.

const names = ["Tom", "Eric"];

// D.R.Y - Don't Repeat Yourself!

console.log(`Hei ${names[0]}`);
console.log(`Hei ${names[1]}`);
console.log(`Hei ${names[2]}`);

// Section 2: "For loop"

// Where does the loop start? / When does the loop end? / What changes between each loop?
for (let i = 0; i < 3; i++) {
  console.log(`Hei ${names[i]}`);
}

// Dynamic, loops however many times equal to the length of the names array. Fixes issues with undefined if we had too few names in the array and issues with never hitting names if we had too many in the array.
for (let i = 0; i < names.length; i++) {
  console.log(`Hei ${names[i]}`);
}

// We can start i where we want, end when we want and increment how we want
for (let i = 10; i > 0; i--) {
  console.log(i);
}

for (let i = 10; i > 0; i -= 2) {
  console.log(i);
}

// Combining loops with functions and methods

function greetEveryone(nameArray) {
  for (let i = 0; i < nameArray.length; i++) {
    const cleanedName =
      nameArray[i].trim().charAt(0).toUpperCase() +
      nameArray[i].trim().slice(1).toLowerCase();

    console.log(cleanedName);
  }
}

const people = ["alICe  ", "   BOB   ", "ChaRlIE  ", "  DeBBY "];
const people2 = ["joE  ", "BilLY"];

greetEveryone(people);
greetEveryone(people2);

// Section 3: The "For of" loop
// The for of loop, loops over an entire array from start to finish.

const colors = ["Red", "Green", "Blue", "Yellow"];

for (let color of colors) {
  console.log(color);
}

const artists = [
  "Queen",
  "The beatles",
  "Tool",
  "Beastie Boys",
  "Connor Price",
  "Tool",
];
const uniqueArtists = [];

for (let artist of artists) {
  if (!uniqueArtists.includes(artist)) {
    uniqueArtists.push(artist);
    console.log(uniqueArtists);
  }
}

// Section 4: The "While" Loop

// useful when we don't know how many loops are needed

let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}

// random num between 1-10
const secretNum = Math.floor(Math.random() * 10) + 1;

let guess = 0;

while (guess !== secretNum) {
  guess++;
  console.log(`Guessing: ${guess}`);

  if (guess === secretNum) {
    console.log(`You win! The number was: ${secretNum}`);
  }
}

// Section 5: Filling an empty array using a loop

// Goal: Generate 10 random numbers between 1-20

function makeRandomArray(arrLength, max) {
  const results = [];

  // a loop that runs 10 times and generates a ranNum between 1-20 then pushes that number to the results array

  for (let i = 0; i < arrLength; i++) {
    results.push(Math.floor(Math.random() * max) + 1);
  }

  return results;
}

console.log(makeRandomArray(50, 10));
console.log(makeRandomArray(5, 2000));

const ranNumArr = makeRandomArray(100, 1000);

// 1. We decide how many numbers in the array. 10, 20, 50, 100 etc ✅
// 2. We decide what the numbers are between. 1-100, 1-10, 1-6 etc ✅

// Section 6: Finding the biggest number in an array

function findBiggest(numArray) {
  let biggestNum = 0;

  // Loop over an array of numbers
  for (let number of numArray) {
    if (number > biggestNum) {
      biggestNum = number;
      console.log(biggestNum);
    }
  }
  return biggestNum;
}

console.log(findBiggest([1, 10, 3, 15, 3, 4, 5, 6, 100, 50, 3, 3, 1]));

console.log(ranNumArr);
console.log("The biggest number in the array was", findBiggest(ranNumArr));

// Section 7: Break and Continue

const moreNames = [
  "Tom",
  "Eric",
  "Jessica",
  "Scott",
  "Anna",
  "Carl",
  "Elisabeth",
  "Benny",
  "Oliver",
  "Andy",
  "Jenny",
  "Ashley",
  "Erin",
  "Patrick",
];

for (let name of moreNames) {
  if (name === "Andy") {
    continue; // jumps to the next loop
  }

  if (name === "Ashley") {
    break; // stops looping all together
  }

  console.log(name);
}
