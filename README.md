# Calculator Project

## Overview

This project is a calculator built with **HTML**, **CSS**, and **JavaScript**. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator features a user-friendly interface and incorporates functionalities like clearing input, handling errors and supporting both button clicks (keyboard input still to add).

## Features

### Core Functionality
- Basic arithmetic operations: **add**, **subtract**, **multiply**, **divide**.
- Displays the result of operations.
- Still to add (Allows chaining of operations, using the result of the previous operation as the first number for the next.)

### Additional Features
- **Clear Button**: Resets the calculator to its initial state.
- **Decimal Support**: Allows input of floating-point numbers (one decimal point per number).
- **Backspace Button**: Removes the last input character.
- **Still to add - Keyboard Support**: Enables users to use their keyboard for input and operations.
- Handles long decimal numbers by rounding to prevent overflow.
- Displays a error message for division by zero.

## How It Works

1. **Input Handling**
   - Numbers and operators are stored in variables as the user interacts with the calculator.
   - The display updates dynamically to reflect user input.

2. **Performing Calculations**
   - User inputs are processed using an `operate` function, which calls the appropriate arithmetic operation (add, subtract, multiply, divide).
   - The result is displayed once the "=" button is pressed.

3. **Bug Handling**
   - Prevents evaluating incomplete operations (e.g., pressing "=" without entering two numbers and an operator).
   - Avoids crashes when users input invalid operations or press consecutive operator buttons.

## How to Use

1. **Basic Operations**:
   - Enter the first number, press an operator button, enter the second number, and press "=" to see the result.

2. **Still to add Chaining Operations**:
   - After pressing "=", continue with another operator and number to use the previous result in a new calculation.

3. **Clearing Input**:
   - Press the "Clear" button to reset the calculator.

4. **Error Handling**:
   - Division by zero results in a snarky error message but won’t crash the calculator.

5. **Keyboard Support**:
   - Use your keyboard to input numbers and operations (e.g., `+`, `-`, `*`, `/`).

6. **Extra Functionalities**:
   - Use the "." button to add decimals (one per number).
   - Press the "Backspace" button to undo the last input.

## Implementation Details

### JavaScript Functions
1. **Basic Operators**:
   - `add(a, b)`
   - `subtract(a, b)`
   - `multiply(a, b)`
   - `divide(a, b)`

2. **Operate Function**:
   - Takes an operator and two numbers, then calls the respective arithmetic function.

3. **Display Management**:
   - Updates the calculator display dynamically based on user input and operation results.

### HTML & CSS
- HTML provides the structure with buttons for digits, operators, and functionalities.
- CSS styles the calculator to make it visually appealing and easy to use.