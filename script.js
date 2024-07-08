const calculatorScreen = document.getElementById('calculator-screen');
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key) || key === '.') {
        handleNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        handleOperator(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clear();
    } else if (key === 'Backspace') {
        backspace();
    }
});

function handleNumber(num) {
    if (operator) {
        secondOperand += num;
        currentInput = secondOperand;
    } else {
        firstOperand += num;
        currentInput = firstOperand;
    }
    updateScreen(currentInput);
}

function handleOperator(op) {
    if (firstOperand && !secondOperand) {
        operator = op;
    }
}

function calculate() {
    if (firstOperand && secondOperand && operator) {
        firstOperand = String(eval(`${firstOperand}${operator}${secondOperand}`));
        currentInput = firstOperand;
        secondOperand = '';
        operator = '';
        updateScreen(currentInput);
    }
}

function clear() {
    currentInput = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
    updateScreen('');
}

function backspace() {
    if (secondOperand) {
        secondOperand = secondOperand.slice(0, -1);
        currentInput = secondOperand;
    } else if (operator) {
        operator = '';
    } else if (firstOperand) {
        firstOperand = firstOperand.slice(0, -1);
        currentInput = firstOperand;
    }
    updateScreen(currentInput);
}

function updateScreen(value) {
    calculatorScreen.value = value;
}
