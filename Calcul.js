let display = document.getElementById('display');

let firstOperand = '';
let secondOperand = '';
let currentNumber = 0;

function AppendNumber(number) {
    return currentNumber += number;
    display.innerText = currentNumber;
    firstOperand ='';
    secondOperand = '';
    currentNumber =0;
}

