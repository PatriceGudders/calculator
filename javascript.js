let numberOne;
let numberTwo;
let operator;

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