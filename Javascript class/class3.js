

// the point method returns a string by default
let num1 = prompt("Enter first number");
let num2 = prompt("Enter Second number");
console.log(typeof(num1));
console.log(parseFloat(num1) + parseInt(num2));
// Type conversions
// 1 implicit type conversion
let num = 10;
let str = 5;
console.log(num + str);

//2 Explicit type conversion
let newNum = Number(str);
console.log(num + newNum);
let dec = 30.567;
let decInt = parseInt(dec);
let dec2 = 20.345;
let decFloat = parseFloat(dec2);

console.log(dec, decInt, dec2, decFloat);

//Basic Operation in javasccript
// 1 Arithmetic Operations 
let sum = 8 + 5;
let mul = 2 * 2;
let minus = 5 - 2;
let div = 10 / 2;
let rem = 10 % 3 

// 2 Assignment Operation 
let score = 100;
let olor = "green";

// 3 increment /Decrement operation
malaria--; // malaria = malaria - 1; malaria -= 1;
score++; // score = score + 1; score += 1;
console.log(score);
console.log(malaria);

score+= 50;
malaria*=2;

console.log(score);


//4 comparism operators
// i Equality(== or ==) i.e loosely ans strictly equal to respectively.
let a = 5, b = 5;
console.log(a==b);
console.log(a===b);
// for example the strict equality checks both the valuse and the data types while the loose checks just the value.

//5 inequality( ! = or !==)
console.log(a !=c);//false
console.assert.log(a !==c);// true

//6 relational operation (>,<, >=.<=)

