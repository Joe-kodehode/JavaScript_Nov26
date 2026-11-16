// Functions

// A function is a block of code designed to do one specific task. It lets you write code once and reuse it, keeping your program clean and organized. However, the function won't do anything until you call it.

// Section 1: Function Declarations and Hoisting

// Regular function can be called before creation due to hoisting
function sayHello() {
  console.log("Hello World");
}

// function call
sayHello();

// Section 2: Arrow Functions

// arrow functions cannot be called before creation (no hoisting)
const arrowFunction = () => {
  console.log("Hello from the arrow function!");
};

arrowFunction();

// Section 3: Return and Scope
// Variables declared inside functions are only scoped to the function (dont exist outside the function!)
// Global scope variables are accessable from inside functions.
// We can use the return keyword to send data from our function to the function call (it replaces the function call basically)
// Once a return runs, all code below is not read. Return exits the function.

function returnData() {
  const myMessage = "This is my message";
  return myMessage;
}

console.log(returnData());

// Section 4: Parameters and Arguments

// Example 1 - hard coded function

function add() {
  return 3 + 4;
}

console.log(add());

// Example 2 - soft coded functions (dynamic)

function minus(num1, num2) {
  return num1 - num2;
}

console.log(minus(10, 5));
console.log(minus(100, 47));
console.log(minus(10000, 8460));

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(10, 7));

// Example 3 - a greeter function using parameters and template strings

const greeter = (time, name) => {
  return `Good ${time} ${name}`;
};

console.log(greeter("evening", "Tom"));
console.log(greeter("afternoon", "Wendy"));
console.log(greeter("night", "Wendy"));

// Section 5: Implicit Return in Arrow Functions
// If we instantly return in an arrow function, we can remove the return keyword and the {}

// without implicit return:
// const divide = (num1, num2) => {
//   return num1 / num2;
// };

// with implicit return:
const divide = (num1, num2) => num1 / num2;

console.log(divide(10, 3));
console.log(divide(1, 20));

// Section 6: Calculator function using Switch (conditionals in function)

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Error: Invalid Operator";
  }
}

console.log(calculator(100, 20, "+"));
console.log(calculator(100, 20, "-"));
console.log(calculator(100, 20, "*"));
console.log(calculator(100, 20, "/"));
console.log(calculator(100, 20, "cat"));

const returnedData = calculator(100, 100, "*");

console.log(calculator(returnedData, 20, "/"));

// Section 7: Updating a global variable using a funciton

let health = 100;
let maxHealth = 250;

// make a function where the health can go up or down by an amount.

const updateHealth = (direction, amount) => {
  if (direction === "up") {
    health += amount;
    if (health > maxHealth) {
      health = maxHealth;
    }
  } else if (direction === "down") {
    health -= amount;
    if (health <= 0) {
      console.log("Game Over");
      health = 100;
    }
  }
};

console.log(health);
updateHealth("up", 10); // 110
console.log(health);
updateHealth("down", 10); // 100
console.log(health);
updateHealth("down", 50); // 50
console.log(health);
updateHealth("up", 1000);
console.log(health);
updateHealth("down", 1000);
console.log(health);

// if the player takes damage, health goes down, else if the player heals health goes up. ✅
// decide how much it goes up or down by ✅
// set the player's max hp to 200. if they heal over 200, their health gets set to 200 ✅
// if health goes below or equal to 0 console.log a game over message and reset health back to 100 ready for the next game. ✅

// Section 8: Using Template Literal and Ternary in a Function

const fruits = ["Banana", "Apple", "Pear", "Kiwi"];

// Make a function to check each element in the array. Compare it to a passed in fruit and console.log if it is or isn't in the array.

// const checkItem = (fruit) => {
//   if (fruits.includes(fruit)) {
//     return "The fruit is in the array";
//   } else {
//     return "The fruit is not in the array";
//   }
// };

const checkItem = (fruit) =>
  `The array ${fruits.includes(fruit) ? "does" : "doesn't"} include ${fruit}`;

console.log(checkItem("Kiwi"));
console.log(checkItem("Strawberries"));
