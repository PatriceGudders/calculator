let numberOne;
let numberTwo;
let operator;


// Basic math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Check based on the operator which math function should be executed
function operate(numberOne, numberTwo, operator) {
    switch(operator) {
        case "+":
            add(numberOne,numberTwo);
            break;
        case "-":
            subtract(numberOne,numberTwo)
            break;
        case "*":
            multiply(numberOne,numberTwo)
            break;
        case "/":
            divide(numberOne,numberTwo)
            break;
    }
}

// Variable to store content of screen 
const screenContent = document.querySelector(".display");

// Check which button was clicked and go to callback function
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    if(button.className === "number") {
        button.addEventListener("click", () => {
            addNumberToScreen(button);
        });
    }
    
})

// Callback function to display number on screen
function addNumberToScreen(button) {
    return screenContent.innerText = button.innerText;
}


