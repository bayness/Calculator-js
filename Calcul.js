let display = document.getElementById('display');

let firstNumber = '';
let secondNumber = '';
let currentNumber = 0;
let operator = '';

const  AppendNumber = (number) =>  {
    currentNumber += number;
     display.innerText = currentNumber;
   
}

const Operation = (op) => {
    if ( currentNumber ==='' && op !== '-' ) return;
    if ( currentNumber !== '' && op === '')
    return firstNumber = currentNumber;
else if ( currentNumber !== '' && op) return CalculatorResult()
firstNumber ='';
secondNumber ='';
currentNumber = 0;
} 

const  CalculatorResult = () => {
  if (currentNumber === '' || firstNumber === '') return;
  secondNumber = currentNumber;

  let result = 0;

  switch (operator) {

    case '+' : result = parseFloat(firstNumber) + parseFloat(secondNumber); break;
    case '-' : result = parseFloat(firstNumber) - parseFloat(secondNumber); break;
    case '*' : result = parseFloat(firstNumber) * parseFloat(secondNumber); break;
    case '/' : result = parseFloat(firstNumber) / parseFloat(secondNumber); break;


  }

  display.innerText = result;
  firstNumber ='';
  secondNumber ='';
  operator = '';
  currentNumber = '';


}

const ClearButton = () => {
    firstNumber ='';
    secondNumber ='';
    operator = '';
    currentNumber = '';
    display.innerText = '0';

}

