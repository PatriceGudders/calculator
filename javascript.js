// Useful variables
let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let shouldResetDisplay = false;

// Node selectors
const display = document.querySelector(".display");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const resultBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const backspaceBtn = document.querySelector(".backspace");
const decimalBtn = document.querySelector(".decimal");

// Event listeners for buttons
numberBtns.forEach((button) =>
    button.addEventListener("click", () => appendNumber(button.dataset.number))
);

operatorBtns.forEach((button) =>
    button.addEventListener("click", () => setOperator(button.dataset.operator))
);

resultBtn.addEventListener("click", evaluate);
clearBtn.addEventListener("click", clear);
backspaceBtn.addEventListener("click", backspace);
decimalBtn.addEventListener("click", appendDecimal);

// Callback functions
function appendNumber(number) {
    if (Number(display.textContent) === 0 || shouldResetDisplay) {
        resetDisplay();
    }
    display.textContent += number;
}

function resetDisplay() {
    display.textContent = "";
    shouldResetDisplay = false;
}

function setOperator(operator) {
    if (currentOperator !== null) evaluate();
    firstNumber = display.textContent;
    currentOperator = operator;
    shouldResetDisplay = true;
}

function evaluate() {
    if (currentOperator === null || shouldResetDisplay) return;
    if (currentOperator === "/" && display.textContent === "0") {
        display.textContent = "Error: Division by 0";
        currentOperator = null;
        return;
    }
    secondNumber = display.textContent;
    display.textContent = roundResult(
        operate(+firstNumber, +secondNumber, currentOperator)
    );
    currentOperator = null;
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}

function clear() {
    display.textContent = "0";
    firstNumber = "";
    secondNumber = "";
    currentOperator = null;
    shouldResetDisplay = false;
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1) || "0";
}

function appendDecimal() {
    if (shouldResetDisplay) resetDisplay();
    if (!display.textContent.includes(".")) display.textContent += ".";
}

// Check based on the operator which math function to execute
function operate(numberOne, numberTwo, operator) {
    switch (operator) {
        case "+":
            return add(numberOne, numberTwo);
        case "-":
            return subtract(numberOne, numberTwo);
        case "*":
            return multiply(numberOne, numberTwo);
        case "/":
            return divide(numberOne, numberTwo);
        default:
            return null;
    }
}

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
