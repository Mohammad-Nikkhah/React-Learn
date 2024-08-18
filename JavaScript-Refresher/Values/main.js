// JavaScript values are classified into two categories: primitives and objects.

// ** primitives ** : (Primitives are basic data types and are immutable (cannot be changed) 

// String
let name = 'Mohamamd';
// Number
let age = 21;
// Bigint 
let bigint = 1234567890123456789012345678901234567890n;
// Boolean
let isTrue = true;
// Undefined (Represents a variable that has been declared but not initialized.);
let notdefined;
console.log(notdefined); // Output: undefined
// Null
let nothing = null; // Represents a deliberate non-value. It is often used to indicate the absence of a value.
// Symbol
let smy = Symbol('description'); // Represents a unique and immutable value, often used as object property keys.



//  ** Object  ** : A special data type that can store collections of data and more complex entities.

// Object Literals:
let student = {
  name:'Mohammad',
  age: 21,
  greeting: function() {
     console.log(`hello ${name} !`);
  }
}

// Array 
// Arrays are special kinds of objects used to store ordered collections of values.

let numbers = [1,2,3,4,5,6,7,8,9];

// Function
// Functions in JavaScript are first-class objects. They can be assigned to variables,
//  passed as arguments, and returned from other functions.


function add(a,b) {
  return a+b;
}


// Classes:
// ES6 introduced classes as a syntactical sugar over JavaScript’s existing prototype-based inheritance.

class Person {
    constructor(name,age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(`Hello,my name is ${this.name}`);
    }
}