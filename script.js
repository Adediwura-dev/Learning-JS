//Prompt and Alert

alert("Hi, Bushra here!");

console.error("Double check for errors");
console.warn("Are you sure you want to proceed?");

let grade = 80;
console.log(typeof grade);

let newGrade = prompt("Enter your grade");
let newMark =
  newGrade >= 80
    ? "You have passed this course"
    : "You have failed this course";
alert(newMark);

//Conditionals

//if statement
if (5 > 2) {
  alert("five is greater");
}

let age2 = 20;

if (age2 >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

//Template Literal
let name = "Bushra";
let age = 15;
alert(`My name is ${name} and my age is ${age}`);

let userAccess = prompt("What are you wearing?").toLowerCase();
if (userAccess == "shoe") {
  alert("You can enter");
} else if (userAccess == "sandals") {
  alert("You can enter with your sandals");
} else if (userAccess == "injury") {
  alert("Sorry, you can enter now");
} else {
  alert("You cannot enter");
}

//Write a Prompt that tells a user if they are eligible to vote

const userAge = prompt("Enter your age");
if (userAge >= 18) {
  alert(`Your age is ${userAge} and you can go on to vote`);
} else {
  alert(`Sorry, you are ${userAge} and you are not eligible to vote`);
}

//Create a system that tells a User if a number is even or odd
const newNum = parseInt(prompt("Enter a number"));
if (newNum % 2 == 0) {
  alert("Number is even");
} else if (newNum == 1) {
  alert("Number is neither even nor odd ");
}
alert("Number is odd");

//Write a prompt that tells a User which is greater of three numbers
const numOne = parseInt(prompt("Enter the first number"))
const numTwo = parseInt(prompt("Enter the second number"))
const numThree = parseInt(prompt("Enter the third number"))
if (numOne > numTwo && numOne > numThree) {
    alert(`${numOne} is greater than ${numTwo} and ${numThree}`)
} else if (numTwo > numOne && numTwo > numThree) {
    alert(`${numTwo} is greater than ${numOne} and ${numThree}`)
} else if (numThree > numOne && numThree > numTwo) {
    alert(`${numThree} is greater than ${numOne} and ${numTwo}`)
}

//Write a prompt that tells a User  if the number entered is positive or negative
const newnewNum = parseInt(prompt("Enter newnewNum"))
if (newnewNum < 0) {
    alert(`${newnewNum} is a negative number`)
} else if (newnewNum > 0) {
    alert(`${newnewNum} is a positive number`)
}