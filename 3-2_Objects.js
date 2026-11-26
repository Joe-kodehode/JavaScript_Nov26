// Objects

// Section 1: What is an Object?

// An object stores related data in key-value pairs.

const person = {
  name: "Alice",
  age: 28,
  isPremium: true,
};

console.log(person); // log the entire object
console.log(person.age); // dot notation
console.log(person["name"]); // bracket notation

// Dot vs bracket:
// - Use dot when you know the key name at code time: person.name
// - Use brackets when the key is dynamic or not a valid identifier: person[key]

// Section 2: Creating, Modifying and Deleting in an Object

person.country = "Norway"; // create a new key-value pair
person.isPremium = false; // modifying an existing key's value
delete person.age; // deletes a key-value pair from the object

console.log(person);

// Section 3: Looping through an Object using 'for in' loop

const user = {
  name: "Joe",
  age: 38,
  location: "Stavanger",
  hobbies: "gaming",
};

for (let key in user) {
  console.log(key); // key
  console.log(user[key]); // value
}

// Dynamic key access is useful when you don’t know the property name in advance, like when looping through an object or handling user input.

// Section 4: Nested Objects and Arrays

const userData = {
  firstName: "Olav",
  lastName: "Hansen",
  age: 31,
  isPremium: true,
  hobbies: ["Golf", "Hiking", "Cinema"],
  address: {
    streetName: "Solskinnsgaten",
    streetNumber: 38,
    postCode: 4050,
  },
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(userData);
console.log(userData.isPremium);
console.log(userData.hobbies[2]);
console.log(userData.address.postCode);
console.log(userData.fullName());

// Section 5: Array of Objects

const products = [
  {
    productName: "Shirt",
    productId: 5,
    stock: 32,
  },
  {
    productName: "Pants",
    productId: 6,
    stock: 5,
  },
  {
    productName: "Socks",
    productId: 10,
    stock: 22,
  },
];

console.log(products[1].productName);
console.log(products[2].productId);

// Shirt is id number 5 and has 32 in stock currently.
// Pants is id number 6 and has 5 in stock currently.
// Socks is id number 10 and has 22 in stock currently.

for (let product of products) {
  console.log(
    `${product.productName} is id number ${product.productId} and has ${product.stock} in stock currently`,
  );
}

// Section 6: Descriptive strings with Objects

const people = [
  {
    name: "Thomas",
    isMember: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    isMember: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    isMember: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    isMember: true,
    age: 28,
    hobbies: ["coding"],
  },
  {
    name: "Phillip",
    isMember: true,
    age: 24,
    hobbies: ["boxing", "mma"],
  },
  {
    name: "Otto",
    isMember: true,
    age: 36,
    hobbies: ["movies", "cinema", "music", "fixin up old cars"],
  },
  {
    name: "Annabelle",
    isMember: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping", "warhammer", "rock climbing"],
  },
  {
    name: "Cathy",
    isMember: false,
    age: 18,
    hobbies: ["design"],
  },
  {
    name: "Thomas",
    isMember: false,
    age: 38,
    hobbies: ["gaming"],
  },
];

for (let person of people) {
  // ternary to show nothing or "not" depending on if isMember is true or false
  const membership = person.isMember ? "" : "not";

  // a random index between 0 - hobbies.length (dynamic depending on how many hobbies)
  const ranIndex = Math.floor(Math.random() * person.hobbies.length);

  console.log(
    `${person.name} is ${person.age}, is ${membership} a member and enjoys ${person.hobbies[ranIndex]}.`,
  );
}

// section 7: Working with object data

// calculate the total age of all people

let totalAge = 0;

for (let person of people) {
  totalAge += person.age;
}

console.log(totalAge);

// Section 8: Combining Hobbies into one single array using Spread Syntax

// using ... in front of an array gives us access to the contents of the array rather than the array itself.

const allHobbies = [];

for (let person of people) {
  allHobbies.push(...person.hobbies);
}

console.log(allHobbies);

// Section 9: Adding new properties to Objects in an Array

for (let person of people) {
  person.discount = person.isMember ? "10%" : "None";
  console.log(person);
}

// --------------------------------------
// Summary
// --------------------------------------

// ✅ Objects use key-value pairs to store data.
// ✅ Dot and bracket notation let you access or update values.
// ✅ Objects can contain arrays, other objects, or even functions.
// ✅ You can loop through objects with for...in.
// ✅ Arrays can contain objects and be used with loops.
// ✅ Spread syntax can flatten nested arrays.
// ✅ You can dynamically add or modify object properties.
