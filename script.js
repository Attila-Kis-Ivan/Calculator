const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

function sendNumberValue(number) {
    // if the curren t display value is 0 replace it if not add number
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number
;}

function addDecimal() {
    // if no decimal, add one
    if(!calculatorDisplay.textContent.includes('.') ) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

// add event lsiteners for number operators and decimal buttons
inputBtns.forEach((inputBtn) => {
    if(inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal());
    } 
});

// reset display
function resetAll() {
    calculatorDisplay.textContent = '0';
}

//Event listener
clearBtn. addEventListener('click', resetAll);