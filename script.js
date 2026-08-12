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
