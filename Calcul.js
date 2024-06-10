let display = document.getElementById("display");

let firstNumber = "";
let secondNumber = "";
let currentNumber = 0;
let operator = "";
let reusltDisplayed = false;

const AppendNumber = (number) => {
  if (reusltDisplayed) {
    currentNumber = number.toString();
    reusltDisplayed = false;
  } else {
    currentNumber += number.toString();
  }

  display.innerText = currentNumber;

  updateDisplay();
};

const Operation = (op) => {
  if (currentNumber === "" && op !== "-") return;
  if (operator === "") {
    firstNumber = currentNumber;
    operator = op;
    currentNumber = "";
  } else if (currentNumber !== "") {
    CalculatorResult();
    firstNumber = display.innerText;
    operator = op.innerText;
    currentNumber = 0;
  }

  updateDisplay();
};

const CalculatorResult = () => {
  if (currentNumber === "" || firstNumber === "") return;
  secondNumber = currentNumber;

  let result = 0;

  switch (operator) {
    case "+":
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case "-":
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case "*":
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case "/":
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
  }

  display.innerText = `${firstNumber} ${operator} ${secondNumber} = ${result}`;
  currentNumber = result.toString();
  firstNumber = "";
  secondNumber = "";
  operator = "";
};

const ClearButton = () => {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  currentNumber = "";
  display.innerText = "0";
  reusltDisplayed = true;
};

const updateDisplay = () => {
  if (operator && currentNumber === "") {
    display.innerText = `${firstNumber} ${operator}`;
  } else if (operator) {
    display.innerText = `${firstNumber} ${operator} ${currentNumber}`;
  } else {
    display.innerText = currentNumber;
  }
};
