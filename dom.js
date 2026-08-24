const myButton = document.getElementById("demo")
myButton.textContent = "No, my name is Bushra Gbadegesin"
myButton.style.backgroundColor = "green"
myButton.style.width = "200px"
myButton.style.fontSize = "25px"

myButton.addEventListener("click", () => {
    myButton.textContent = "No, my name is Adediwura"
    myButton.style.height = "70px"
})