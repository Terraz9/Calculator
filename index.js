const buttons = document.querySelectorAll(".col");
let firstNumber = "";
let secondNumber = "";
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

}

buttons.forEach(element => element.addEventListener("click", (event) => {
    if (event.target.classList.contains("aNumber") && operator === "") {
        firstNumber += event.target.textContent;
    }
    else if (event.target.classList.contains("operator") && firstNumber !== "" && secondNumber === "") {
        operator = event.target.textContent;
    }
    else if(event.target.classList.contains("aNumber") && operator !== "") {
        secondNumber += event.target.textContent;
    }
    else if(event.target.textContent === "="){
        console.log(firstNumber,operator,secondNumber)
        console.log("result", operate(firstNumber, operator, secondNumber));
        firstNumber = operate(firstNumber, operator, secondNumber);
        secondNumber = "";
        operator = "";
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

