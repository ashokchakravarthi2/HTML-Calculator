let displayValue = '0';
let currentOperator = '';
let prevValue = '';
let history = [];

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
  updateInputDisplay();
}

function setOperator(operator) {
  if (currentOperator !== '') {
    calculateResult();
  }
  currentOperator = operator;
  prevValue = displayValue;
  displayValue = '0';
  updateDisplay();
  updateInputDisplay();
}

function calculateResult() {
  const prev = parseFloat(prevValue);
  const current = parseFloat(displayValue);

  switch (currentOperator) {
    case '+':
      displayValue = prev + current;
      break;
    case '-':
      displayValue = prev - current;
      break;
    case '*':
      displayValue = prev * current;
      break;
    case '/':
      displayValue = prev / current;
      break;
  }

  history.push(`${prev} ${currentOperator} ${current} = ${displayValue}`);
  currentOperator = '';
  updateDisplay();
  updateInputDisplay();
}

function clearDisplay() {
  displayValue = '0';
  currentOperator = '';
  prevValue = '';
  updateDisplay();
  updateInputDisplay();
}

function calculateLog() {
  const current = parseFloat(displayValue);
  displayValue = Math.log10(current);
  updateDisplay();
  updateInputDisplay('log');
}

function calculateTrig(trigFunction) {
  const current = parseFloat(displayValue);

  switch (trigFunction) {
    case 'sin':
      displayValue = Math.sin(current);
      break;
    case 'cos':
      displayValue = Math.cos(current);
      break;
    case 'tan':
      displayValue = Math.tan(current);
      break;
  }

  updateDisplay();
  updateInputDisplay(trigFunction);
}

function updateInputDisplay(extraFunction = '') {
  let inputDisplay = prevValue + ' ' + currentOperator + ' ' + displayValue;
  if (extraFunction !== '') {
    inputDisplay += ` ${extraFunction}(${displayValue})`;
  }
  document.getElementById('userInput').innerText = inputDisplay;
}

function toggleHistory() {
  const historyContainer = document.getElementById('history');
  const historyList = document.getElementById('historyList');

  if (historyContainer.style.display === 'none') {
    historyContainer.style.display = 'block';
    displayHistory();
  } else {
    historyContainer.style.display = 'none';
  }
}

function displayHistory() {
  const historyList = document.getElementById('historyList');
  historyList.innerHTML = '';

  history.forEach((entry, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = entry;
    historyList.appendChild(listItem);
  });
}

function clearHistory() {
  history = [];
  displayHistory();
}

function toggleInstructions() {
  const instructionsContainer = document.getElementById('instructions');

  if (instructionsContainer.style.display === 'none') {
    instructionsContainer.style.display = 'block';
  } else {
    instructionsContainer.style.display = 'none';
  }
}
