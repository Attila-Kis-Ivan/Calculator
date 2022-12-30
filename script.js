const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');


let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function sendNumberValue(number) {
// Replace the current display value if ifrst value is entered
if(awaitingNextValue) {
    calculatorDisplay.textContent = number;
    awaitingNextValue = false;
}else {
    // if the curren t display value is 0 replace it if not add number
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
}
}

function addDecimal() {
    //if operator pressed do not add decimal
    if(awaitingNextValue = ture) return;
    // if no decimal, add one
    if(!calculatorDisplay.textContent.includes('.') ) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    // ASsign firstValue if no value
    if(!firstValue) {
        firstValue = currentValue;
    } else {
        console.log('currenvalue', currentValue);
    }
    // ready for the next value, store operatot
    awaitingNextValue = true;
    operatorValue = operator;
    console.log('first value', firstValue);
    console.log('operator', operatorValue);
}

// add event lsiteners for number operators and decimal buttons
inputBtns.forEach((inputBtn) => {
    if(inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal());
    } 
});

// reset  all values ,display
function resetAll() {
    firstValue = 0;
    operatorValue = '';
    awaitingNextValue = false;
    calculatorDisplay.textContent = '0';
}

//Event listener
clearBtn. addEventListener('click', resetAll);