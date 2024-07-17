const buttons = document.querySelectorAll(".col");
const display = document.querySelector(".display");
let firstNumber = 0;
let secondNumber = 0;
let operator = "";


function operate(firstNum, operatorType, secondNum) {
    firstNumOperate = +firstNum;
    secondNumOperate = +secondNum;
    switch (operatorType) {
        case "+":
            return add(firstNumOperate, secondNumOperate);
        case "-":
            return substract(firstNumOperate, secondNumOperate);
        case "*":
            return multiply(firstNumOperate, secondNumOperate);
        case "/":
            return divide(firstNumOperate, secondNumOperate);
    
        default:
            break;
    }
    console.log(typeof secondNumOperate);

}

// Listener handler for every button
buttons.forEach(element => element.addEventListener("click", (event) => {
    if (event.target.classList.contains("aNumber") && operator === "") {
        // To make operations from the beginning
        if (firstNumber == 0) {
            firstNumber = event.target.textContent;
        // Normal Operations (without starting with 0)
        } else {
            firstNumber += event.target.textContent;

        }
        display.textContent = firstNumber;
    }

    else if (event.target.classList.contains("operator") && secondNumber === 0) {
        operator = event.target.textContent;
    }
    // To do multiple operations in sequence without pressing Equals
    else if (event.target.classList.contains("operator") && secondNumber !== 0) {
        display.textContent = operate(firstNumber, operator, secondNumber);
        firstNumber = operate(firstNumber, operator, secondNumber);
        secondNumber = 0;
        operator = event.target.textContent;
    }

    else if(event.target.classList.contains("aNumber") && operator !== "") {
        if (secondNumber == 0) {
        secondNumber = event.target.textContent;
    } else {
        secondNumber += event.target.textContent;
    }
    display.textContent = secondNumber;
    }

    else if(event.target.textContent === "=" && operator !== ""){
        display.textContent = operate(firstNumber, operator, secondNumber);
        firstNumber = operate(firstNumber, operator, secondNumber);
        secondNumber = 0;
        operator = "";
    }
    else if(event.target.textContent === "Clear"){
        firstNumber = 0;
        secondNumber = 0;
        operator = "";
        display.textContent = firstNumber;

    }


}
));

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

