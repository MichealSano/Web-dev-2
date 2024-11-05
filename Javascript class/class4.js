// Using conditionals
/*
Syntax:
if(condition){
        code block or execution
        }else{
        code block or Execution
    };
    or(with else if statement to check for multiple conditions)
    if(condition){
    Code block or Execution;
    } else if (condition){
     code block or Execution;
     }else{
     code block or execution;
    };
write a program that prompt the user for their name and age and then console.log "Hi"
username you are eligible to vote "if the user age is greater than or equal 18, and vice verse.
*/
alert("Say your user name ");

let userName = prompt("Enter user name: ");
let age = prompt ("Enter your age");

if(age >=18){
    console.log(`Hi ${username}you are eligible to vote!`)
}else{
    console.log(`Sorry ${username}you are not eliglible to vote!`)
};

/*
write a program that takes in  the user surname,age sex(m/f) and according to the 
users input console.log if the user is a man,boy,girl,or woman.e.g Hi john you are 25yrs old and you're a man.
*/

let surname = prompt("Enter surname:");
let age =parseInt(prompt("Enter your age:"));
let gender = prompt("Enter your Gender(m/f):")

if (age>=20 && gender=='m'){
    console.log(`Hi ${pname}, you are ${age}years old and you are a man.`)
}else if (age<20&& gender=='m'){
    console.log(`Hi ${pname}, you are ${age}years old and you are a Boy.`) 
}else if (age<20&& gender=='f'){
    console.log(`Hi ${pname}, you are ${age}years old and you are a woman.`)
}else{
    console.log(`Hi ${pname}, you are ${age}years old and you are a girl.`)
}

(age >=20&&(gender=='m' || 'M'))?console.log(`Hi ${pname}, you are ${age}years old and you are a Boy.`) 
(age <20&& gender=='m')?  console.log(`Hi ${pname}, you are ${age}years old and you are a Boy.`) 
(age >=20&& gender== 'f') ?console.log(`Hi ${pname}, you are ${age}years old and you are a woman.`)
console.log(`Hi ${pname}, you are ${age}years old and you are a girl.`)

console.error("This is an error")
console.warn("Thi is a warning")













// Using Ternary Operatiors: Syntax:(Condition)? code: execution;
(userAge >=18)? console.log(`Hi ${Username} you are eligible to vote!`) :console.log(`Sorry ${username} you are not eliglible to vote!`)

/*
//Using ternary operators,prompt the user to enter his cours of study,if the cousrs is science output,hi you are
studying a science course else if its an art output hi you are studying an art course else output you are studing
other coursea*/

let course=prompt("Enter course of study")









(age >= 20)