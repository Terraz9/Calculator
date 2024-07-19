const buttons = document.querySelectorAll(".col");
const display = document.querySelector(".display");
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let maxCharacters = 8


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

}



// Listener handler for every button
buttons.forEach(element => element.addEventListener("click", (event) => {
    if (event.target.classList.contains("aNumber") && operator === "") {
        // To make operations from the beginning
        if (firstNumber === 0 || firstNumber === "0") {
            firstNumber = event.target.textContent;
        // Normal Operations (without starting with 0)
        } else {
            firstNumber += event.target.textContent;
        }
        if (firstNumber.length > maxCharacters) {
            firstNumber = firstNumber.substring(0, maxCharacters);
        } 

        display.textContent = firstNumber;
    }
    // Select the Operator
    else if (event.target.classList.contains("operator") && secondNumber == 0) {
        operator = event.target.textContent;
    }
    // To do multiple operations in sequence without pressing Equals
    else if (event.target.classList.contains("operator") && secondNumber != 0) {
        display.textContent = operate(firstNumber, operator, secondNumber).toString().substring(0,maxCharacters);
        firstNumber = operate(firstNumber, operator, secondNumber).toString().substring(0, maxCharacters);
        secondNumber = 0;
        operator = event.target.textContent;
    }
    // Select a second number
    else if(event.target.classList.contains("aNumber") && operator !== "") {
        if (secondNumber === 0 || secondNumber === "0") {
        secondNumber = event.target.textContent;
    } else {
        secondNumber += event.target.textContent;
    }
    if (secondNumber.length > maxCharacters){
        secondNumber = secondNumber.substring(0, maxCharacters);
    }
    display.textContent = secondNumber;
    }
    // Equals button
    else if(event.target.textContent === "=" && operator !== ""){
        display.textContent = operate(firstNumber, operator, secondNumber).toString().substring(0, maxCharacters);
        firstNumber = operate(firstNumber, operator, secondNumber).toString().substring(0, maxCharacters);
        secondNumber = 0;
        operator = "";
    }
    // Clear Button
    else if(event.target.textContent === "Clear"){
        firstNumber = 0;
        secondNumber = 0;
        operator = "";
        display.textContent = firstNumber;

    }
    
    else if(event.target.textContent === ".") {
        firstNumber = firstNumber.toString();
        secondNumber = secondNumber.toString();
        if(!firstNumber.includes(".") && operator === "") {
            firstNumber = (firstNumber + ".");
            display.textContent = firstNumber;
        }
        else if(!secondNumber.includes(".") && operator !== "") {
            secondNumber = (secondNumber + ".");
            display.textContent = secondNumber;
        }


    }
    
    else if(event.target.textContent === "%"){
        if(firstNumber != 0 && secondNumber == 0){
            firstNumber = getPercentage(firstNumber)
            display.textContent = firstNumber;
        }
        else if(secondNumber != 0){
            secondNumber = getPercentage(secondNumber);
            display.textContent = secondNumber;
        }
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
function getPercentage(a) {
    return a / 100;
}

