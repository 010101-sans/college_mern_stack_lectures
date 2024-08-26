# JavaScript Syntax and Concepts

JavaScript is a versatile language used for both client-side and server-side web development. Here's a detailed guide to understanding the syntax and fundamental concepts of JavaScript.

# Table of Contents
- [JavaScript Syntax and Concepts](#javascript-syntax-and-concepts)
  - [Variables](#variables)
  - [Data Types](#data-types)
  - [Type Coercion and Type Checking](#type-coercion-and-type-checking)
  - [Operators](#operators)
    - [Arithmetic Operators](#arithmetic-operators)
    - [Comparison Operators](#comparison-operators)
    - [Logical Operators](#logical-operators)
  - [Functions](#functions)
    - [Function Declaration](#function-declaration)
    - [Function Expression](#function-expression)
    - [Arrow Function](#arrow-function)
    - [IIFE (Immediately Invoked Function Expression)](#iife-immediately-invoked-function-expression)
  - [Control Structures](#control-structures)
    - [Conditional Statements](#conditional-statements)
    - [Switch Statement](#switch-statement)
    - [Ternary Operator](#ternary-operator)
    - [Loops](#loops)
      - [For Loop](#for-loop)
      - [While Loop](#while-loop)
      - [Do While Loop](#do-while-loop)
      - [For...of Loop](#forof-loop)
      - [For...in Loop](#forin-loop)
  - [Error Handling](#error-handling)
  - [Objects and Arrays](#objects-and-arrays)
    - [Object-Oriented Programming (OOP) in JavaScript](#object-oriented-programming-oop-in-javascript)
      - [Basic Object Definition](#basic-object-definition)
      - [Constructor Functions](#constructor-functions)
      - [Prototype](#prototype)
      - [Classes](#classes)
      - [Inheritance](#inheritance)
      - [Encapsulation](#encapsulation)
      - [Polymorphism](#polymorphism)
    - [Array](#array)
  - [DOM Manipulation](#dom-manipulation)
    - [Selecting Elements](#selecting-elements)


## Variables
Variables are used to store data values. In JavaScript, you can declare a variable using `var`, `let`, or `const`.

- `var` declares a variable with function scope.
- `let` declares a variable with block scope.
- `const` declares a block-scoped constant.

Example:
```javascript
var name = "John";
let age = 30;
const birthYear = 1990;
```

## Data Types
JavaScript supports several data types:

- Primitive types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.
- Object types: `Object`, `Array`, `Function`, etc.

Example:
```javascript
let str = "Hello"; // string
let num = 100; // number
let bool = true; // boolean
let obj = { key: "value" }; // object
let arr = [1, 2, 3]; // array
```

## Type Coercion and Type Checking
JavaScript can coerce types implicitly and allows explicit type conversions.

Example:
```javascript
let numStr = "100";
let coercedNumber = Number(numStr); // explicit coercion
let implicitCoercion = numStr * 1;  // implicit coercion
console.log(typeof coercedNumber); // number
console.log(typeof implicitCoercion); // number
```

## Operators
JavaScript provides various operators:

### Arithmetic Operators
- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `%` Modulus
- `**` Exponentiation
- `++` Increment
- `--` Decrement

Example:
```javascript
let sum = 10 + 20; // 30
let product = 10 * 20; // 200
let power = 2 ** 3; // 8
let increment = 5;
increment++; // 6
```

### Comparison Operators
- `==` Equal to
- `===` Strict equal to
- `!=` Not equal to
- `!==` Strict not equal to
- `>` Greater than
- `<` Less than
- `>=` Greater than or equal to
- `<=` Less than or equal to

Example:
```javascript
let isEqual = (5 == '5'); // true
let isStrictEqual = (5 === '5'); // false
let isGreater = (10 > 5); // true
```

### Logical Operators
- `&&` Logical AND
- `||` Logical OR
- `!` Logical NOT

Example:
```javascript
let result = (true && false); // false
let resultOr = (true || false); // true
let notResult = !true; // false
```

## Functions
Functions are blocks of code designed to perform a particular task.

### Function Declaration
```javascript
function greet(name) {
  return "Hello " + name;
}
```

### Function Expression
```javascript
const greet = function(name) {
  return "Hello " + name;
};
```

### Arrow Function
```javascript
const greet = (name) => {
  return "Hello " + name;
};
```

### IIFE (Immediately Invoked Function Expression)
```javascript
(function() {
    console.log("IIFE invoked!");
})();
```

## Control Structures
JavaScript provides control structures to handle various conditions and iterations.

### Conditional Statements
```javascript
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
```

### Switch Statement
```javascript
switch (fruit) {
  case 'Apple':
    console.log('Apple');
    break;
  case 'Banana':
    console.log('Banana');
    break;
  default:
    console.log('Unknown fruit');
}
```

### Ternary Operator
```javascript
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Yes or No based on age
```

### Loops
#### For Loop
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

#### While Loop
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

#### Do While Loop
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

#### For...of Loop
```javascript
let array = [1, 2, 3];
for (let value of array) {
    console.log(value);
}
```

#### For...in Loop
```javascript
let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}
```

## Error Handling
JavaScript provides a way to handle runtime errors using `try`, `catch`, `finally`, and `throw`.

Example:
```javascript
try {
    let result = riskyFunction();
} catch (error) {
    console.error("Error caught:", error);
} finally {
    console.log("This will always execute");
}

function riskyFunction() {
    throw new Error("Something went wrong!");
}
```

## Objects and Arrays

### Object-Oriented Programming (OOP) in JavaScript

Object-Oriented Programming (OOP) in JavaScript involves the use of objects and classes to structure code in a modular and reusable way. Here, we'll cover the basics and advanced features of OOP in JavaScript.

#### Basic Object Definition
Objects are collections of key-value pairs.

```javascript
const person = {
  name: "John",
  age: 30,
  greet() {
    return "Hello " + this.name;
  },
  setName(newName) {
    this.name = newName;
  }
};
```

#### Constructor Functions
Constructor functions are used to create multiple instances of an object.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    return "Hello " + this.name;
  };
  this.setName = function(newName) {
    this.name = newName;
  };
}

const john = new Person("John", 30);
const mary = new Person("Mary", 25);
```

#### Prototype
Methods can be added to the prototype of the constructor function to save memory.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return "Hello " + this.name;
};

Person.prototype.setName = function(newName) {
  this.name = newName;
};

const john = new Person("John", 30);
const mary = new Person("Mary", 25);
```

#### Classes
ES6 introduced the `class` syntax, making it easier to create objects and handle inheritance.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return "Hello " + this.name;
  }

  setName(newName) {
    this.name = newName;
  }
}

const john = new Person("John", 30);
const mary = new Person("Mary", 25);
```

#### Inheritance
Classes can inherit from other classes using the `extends` keyword.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return "Hello " + this.name;
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  getJobTitle() {
    return this.jobTitle;
  }
}

const jane = new Employee("Jane", 28, "Engineer");
```

#### Encapsulation
Encapsulation restricts direct access to object data and methods to protect the integrity of the object's state.

```javascript
class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getName() {
    return this.#name;
  }

  setName(newName) {
    this.#name = newName;
  }

  getAge() {
    return this.#age;
  }

  setAge(newAge) {
    this.#age = newAge;
  }
}

const john = new Person("John", 30);
john.setName("Jonathan");
console.log(john.getName()); // Jonathan
```

#### Polymorphism
Polymorphism allows methods to do different things based on the object it is acting upon.

```javascript
class Person {
  greet() {
    return "Hello!";
  }
}

class Employee extends Person {
  greet() {
    return "Welcome to the office!";
  }
}

const genericPerson = new Person();
const companyEmployee = new Employee();

console.log(genericPerson.greet()); // Hello!
console.log(companyEmployee.greet()); // Welcome to the office!
```
### Array
Arrays are list-like objects.

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // 1

// Array Methods
numbers.push(6); // [1, 2, 3, 4, 5, 6]
numbers.pop(); // [1, 2, 3, 4, 5]
numbers.unshift(0); // [0, 1, 2, 3, 4, 5]
numbers.shift(); // [1, 2, 3, 4, 5]
```

## DOM Manipulation
JavaScript can be used to interact with the HTML and CSS of a web page.

### Selecting Elements
```javascript
let element = document.getElementById("myElement");
let elements = document.querySelectorAll(".myElements");
```

### Modifying Elements
```javascript
element.textContent = "New Content";
element.style.color = "red";

element.classList.add("active");
element.classList.remove("inactive");
```

### Creating Elements
```javascript
let newElement = document.createElement('div');
newElement.textContent = "I'm a new element";
document.body.appendChild(newElement);
```

## Events
JavaScript can handle events such as user interactions.

```javascript
element.addEventListener('click', function() {
  console.log('Element clicked!');
});

element.addEventListener('mouseover', function() {
  element.style.backgroundColor = 'blue';
});

element.addEventListener('mouseout', function() {
  element.style.backgroundColor = 'initial';
});
```

## Promises and Async/Await
JavaScript can handle asynchronous operations using Promises and `async`/`await`.

### Promises
```javascript
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Success!");
  } else {
    reject("Failure!");
  }
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});
```

### Async/Await
```javascript
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

(async () => {
  await fetchData();
})();
```