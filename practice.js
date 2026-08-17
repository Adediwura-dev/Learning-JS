// alert(5 + 6);

// let age = 16;
// let text = "You can Not drive";

// if (age >= 18) {
//   text = "You can drive";
//   alert(text)
// }

//Loops
// for (let a = 3; a <= 9; a++) {
//   console.log(a);
// }

// let b = 1;
// while (b <= 10) {
//   console.log(b);
//   b++;
// }

// let c = 11;
// do {
//   console.log(c);
//   c++;
// } while (c <= 20);

// for (let a = 1; a <= 50; a++) {
//   if (a % 2 === 1) {
//     console.log(a);
//   } else if (a % 2 === 0) {
//     console.log("an even number");
//   }
// }

//Write a program that prints out multiplication table two
// for (a = 1; a <= 20; a++) {
//   for (b = 1; b <= 12; b++) {
//     let c = `${a} x ${b} = ${b * a}`;
//     console.log(c);
//   }
// }

//Write a program that prints out the even multiplicators
// for (a = 1; a <= 20; a++) {
//   for (b = 1; b <= 12; b++) {
//     if (b % 2 === 0) {
//       let c = `${a} x ${b} = ${b * a}`;
//       console.log(c);
//     }
//   }
// }

//Functions
// function addNum(a) {
//   console.log(a + 2)
// }
// addNum(10)

const userName = (yourName) => {
  console.log(yourName)
}
userName("Bushra")

function userAddress(yourAddress) {
  console.log(yourAddress)
}
userAddress("Badejoko")

function age(a) {
  console.log(a)
}
age(20)

ageTwo = (newAge) => {
  console.log(newAge)
}
ageTwo(50)

// function myFunction() {
//   document.getElementById("demo1").innerHTML = "Hello Dolly!";
//   document.getElementById("demo2").innerHTML = "How are you?";
// }
