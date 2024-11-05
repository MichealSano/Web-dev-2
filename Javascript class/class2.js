// Browser Object:
// 1) Window Object: The window object represents a window in the browser. Some methods include alert(), prompt(), confirm(), etc

alert("Welcom to Class!!!!");

let userName = prompt("Enter your Name: ");
// Concatenation: Is the process of adding strings or adding a variable to a string.
let greet = "Hello " + "World"
let sayHi = "Hi " + userName + "How are you?"
console.log(greet);
console.log(sayHi);

// String litteralas or Template litterals
let sayHello = `Hello ${userName}, how are you doing today?`

let color = prompt(`Hi ${userName} Enter your desired color:`);

document.body.style.backgroundColor = color;

let student = confirm("Are you a student?");
if(student){
    document.write("Hello World I am a student");
} else{
    document.write("Hello World I still be student no belive watin them talk.");
};


//let num1 = 