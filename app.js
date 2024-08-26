var display = document.getElementById('display');
var currentOperand = '';
var operator = '';
var previousOperand = '';

function appendNumber(number) {
    if (currentOperand.includes('.') && number === '.') return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function operate(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operator = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    var computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation;
    operator = '';
    previousOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentOperand;
}
