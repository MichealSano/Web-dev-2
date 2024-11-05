/*
What is javascript ?
Javascript is a programming language used to interact with elements of web pages it also allowsus to add interactivity to a web page.
Its used to enhance our html and css such as validating forms, handling mouse events, adding responsiveness to the web page, etc.
Javascript is an object-based scripting language which is lightweight and cross platform.
its a translated language and not a compiled language.
The javascript translator(embedded in the browser) is responsible for translating the javascript code for the browser.

Applications: Client-side validation, Dynamic drop-down menus, Current date and time display, Displaying pop-ups and dialog boxes, etc.
*/

// Single line comments

// Using Variables in Javascript: We can use the var, let and const keywords to create variables.

// ES5
var a =20;

// let and const keywords are part of ES6 Javascript.
// semi-colons are used to end js statements.
let b =40;
const c ="George";

x =30;

console.log(a)
console.log(b)
console.log(c)
console.log(x)

// Variable declaration
let firstName, age, sex = null;

// Variable Initialization
console.log(age)

// Rules for Naming Variables:
/* 
    --Let and const are the most used to declare variables while var is outdated.
    1) Use a descriptive Name
    2) Start with a letter, an underscore or dollarsign, but not with a number.
    3) Avoid Reserved Keywords. E.g let, var, for, while, const, class, if, etc.
    4) Use camelCase for multi-word names e.g myBestFriend, userName.
    5) Case sensitivity: myVar and MyVar are treated as two diffrent variables.
    6) Avoid Special Characters: e.g @, !, #, %, etc Apart from (_ and $)
*/

/* 
    Case conventions
    1) Camel Case: Here the first letter is lowercase and the first letter of subsequent words are capitalized. (e.g myBestFriend, costomerOrderDetails, etc).
    2) Pascal Case: Here the first letter of every word is capitalized. (e.g MyVariableName, MyBestFood, etc).
    3) Snake Case: All letters are in lowercase but words are seperated by underscores. (e.g my_best_friend, customer_order_details, etc). 
    4) Kebab Case: All letters are in lowercase but words are seperated by hyphen. (e.g my-best-friend, customer-order-details, etc).
*/
// Data types in javascript

// 1) Strings: They are used to represent text.
let customerName ="Obinna";
// let is used when we intend to resign a variable to another value
const greeting = "Good morning Friend";
console.log(customerName);
console.log(greeting);

customerName = "Desire";
console.log(customerName);
// const is used when we you want to make a variable fixed(a variable cant be reasigned when cont is used)
greeting = "Good night";
console.log(greeting);

// We use the typeof() function to check the data type of a variable
// 2) Number: Its used to represent numeric values, whether integers or decimals(floats).
let user_age = 25;
const pi = 3.142;
console.log(age);
console.log(typeof(pi));
console.log(user_age + pi);


// 3) Boolean: They are  used to represent logical values indicating true or false.
const isClosed = true;
const isOpen = false

console.log(isCloud);
console.log(typeof(isOpen));

// 4) Null: This represents the intentional ommision/absence of a value.
let course = null;
let user = null;

// 5) Undefined: This represents a variable that has been declared but not assigned to a value.
let x, y, z;

// 6) Bigint: Bigint is a numeric data type that can represent integers with arbitrary precision. it is denoted by appending "n" to the end of an integer.
let bigNumber = 123456789012345678901234567890n;

// 7) Object: They are a collection of key-values pairs, where values can be of any data type. Including other objects, arrays, or functuons.
const person ={
    name: "john",
    age: 30,
    isAdmin: false,
};
