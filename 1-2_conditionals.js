// Lesson 2: Conditionals

// Section 1: The typeof operator

let myVariable = "hello";
console.log(typeof myVariable);

// Section 2: if / else if / else

// basic if statement
let temperature = -10;

if (temperature >= 25) {
  console.log("It's a hot day!");
} else if (temperature >= 15) {
  console.log("it's a warm day");
} else if (temperature > 0) {
  console.log("it's a chilly day!");
} else {
  console.log("It's freezing!");
}

// Section 3: Logical Operators: AND && and OR ||

let age = 18;
let hasLicense = true;
let banned = false;

// if the age is 18 or over and hasLicense is set to true, we console log "you can drive"

// && requires both conditions on left and right side to be true
if (age >= 18 && hasLicense && !banned) {
  console.log("You can drive!");
} else {
  console.log("You can't drive! get older or get your license!");
}

// || requires at least one of the conditions beside it to be true
const today = new Date();
const day = today.getDay();

let weekday;
if (weekday === 0) {
  weekday = "Sunday";
} else if (day === 1) {
  weekday = "Monday";
} else if (day === 2) {
  weekday = "Tuesday";
} else if (day === 3) {
  weekday = "Wednesday";
} else if (day === 4) {
  weekday = "Thursday";
} else if (day === 5) {
  weekday = "Friday";
} else if (day === 6) {
  weekday = "Saturday";
}

// let weekday = "Tuesday"

console.log(weekday);

if (weekday === "Saturday" || weekday === "Sunday") {
  console.log("It's the weekend! Yipee!");
} else if (
  weekday === "Monday" ||
  weekday === "Tuesday" ||
  weekday === "Wednesday" ||
  weekday === "Thursday" ||
  weekday === "Friday"
) {
  console.log("It's a weekday! back to work!");
} else {
  console.log("Please enter a valid day");
}

// using both && and ||

let referal = true;
let firstShop = true;
let premiumMember = false;

// IF the user has a referal AND it's their first shop, they get a discount OR if they are a premium member, they always get a discount.

// if (premiumMember) {
//   console.log("you get discount");
// } else if (firstShop) {
//   if (referal) {
//     console.log("you get discount");
//   } else {
//     console.log("you dont get discount");
//   }
// }

if ((referal && firstShop) || premiumMember) {
  console.log("You get a discount!");
} else {
  console.log("No discount.");
}

// Section 4: Ternary Conditional
// Ternary is best used for simple if/else conditions.

let isMember = false;

// if isMember is true, fee is $5, else fee is $10

// let fee;
// if (isMember) {
//   fee = "$5";
// } else {
//   fee = "$10";
// }

let fee = isMember ? "$5" : "$10";

console.log(fee);

// Section 5: Switch Statement
// A switch statement checks a value against multiple cases.

let fruit = "Kiwi";

switch (fruit) {
  case "apple":
    console.log("Apples are delicious!");
    break;
  case "banana":
    console.log("Bananas are a great source of potassium!");
    break;
  case "orange":
    console.log("Oranges are full of vitamin C!");
    break;
  default:
    console.log("Unknown fruit");
}

// Use if / else if → for complex or varied conditions
// Use switch → for one variable with many fixed values

// Section 6: Truthy/Falsey values

let value = "hello";

if (value) {
  console.log("This data was true");
} else {
  console.log("This data was false");
}

// Truthy
// Strings with values
// Positive Number
// Negative Number
// Array with values
// Empty Array
// Object with key value pairs
// Empty Object

// Falsey
// Empty String
// Number 0
// Undefined
// Null
// NaN (not a number)

// Section 7: Template String / Template Literal

const firstName = "Ola";
const lastName = "Nordmann";
const country = "Norway";
const town = "Oslo";

const greeting = `Welcome ${firstName} ${lastName} from ${town} ${country} to my website`;

// const greeting =
//   "Welcome," +
//   " " +
//   firstName +
//   " " +
//   lastName +
//   " " +
//   "from" +
//   " " +
//   town +
//   " " +
//   country +
//   " " +
//   "to my website";

console.log(greeting);
