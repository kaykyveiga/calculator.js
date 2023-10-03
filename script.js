let numberOne = null;
let operator = null;
let numberTwo = null;

function addNumber(number) {
  const result = document.getElementById('result');
  result.value += number;
}

function addOperator(op) {
  const result = document.getElementById('result');
  numberOne = parseFloat(result.value)
  operator = op;
  result.value = '';

}

function calculate() {
  const result = document.getElementById('result');
  numberTwo = parseFloat(result.value);
  let finalResult = 0;

  switch (operator) {
    case '-': finalResult = numberOne - numberTwo; break;
    case '+': finalResult = numberOne + numberTwo; break;
    case '*': finalResult = numberOne * numberTwo; break;
    case '/': finalResult = numberOne / numberTwo; break;
    case '%': finalResult = numberOne * numberTwo / 100; break;
  }

  result.value = finalResult
}

function clean() {
  const result = document.getElementById('result')
  result.value = '';
  numberOne = null;
  operator = null;
  numberTwo = null;
}