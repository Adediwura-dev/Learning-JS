//Functions
function addNum(a) {
  console.log(a + 2);
}
addNum(10);

const userName = (yourName) => {
  console.log(yourName);
};
userName("Bushra");

function userAddress(yourAddress) {
  console.log(yourAddress);
}
userAddress("Badejoko");

function age(a) {
  console.log(a);
}
age(20);

ageTwo = (newAge) => {
  console.log(newAge);
};
ageTwo(50);

const myFruits = ["mango", "pawpaw", "apple", "pineapple"]
console.log(myFruits)
myFruits.splice(2, 1)
console.log(myFruits)
console.log(myFruits.join(" "))
console.log(myFruits.indexOf("pawpaw"))
console.log(myFruits.includes("orange"))

const myStudents = [{name : "Bushra", age : 20, ms : "single"},
  {name : "Fatiah", age : 21, ms : "single"},
  {name : "Favour", age : 22, ms : "engaged"},
  {name : "Bola", age : 23, ms : "engaged"},
  {name : "Mariam"}
]

// myStudents.forEach((stdName, index) => {
//   console.log(stdName)
// })
//value, index
//.Map gives a new version of every item
myStudents.map((allData, index) => {
  console.log(allData.name)
})


