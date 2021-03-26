
// import functions and grab DOM elements
import { 
    add, 
    subtract, 
    multiply, 
    divide, 
    toNumber
} from './calculator.js';


//initialize function Event Listener
function init(input1Id, input2Id, buttonId, displayId, operation) {
    const input1 = document.getElementById(input1Id);
    const input2 = document.getElementById(input2Id);
    const button = document.getElementById(buttonId);
    const display = document.getElementById(displayId);

    button.addEventListener ('click', () => {
        display.textContent = operation(toNumber(input1), toNumber(input2));
    });
}

//operations array
const operations = [
    {
        input1Id: 'add-one',
        input2Id: 'add-two',
        buttonId: 'add',
        displayId: 'sum',
        operation: add
    }, {
        input1Id: 'sub-one',
        input2Id: 'sub-two',
        buttonId: 'subtract',
        displayId: 'difference',
        operation: subtract
    }, {
        input1Id: 'mult-one',
        input2Id: 'mult-two',
        buttonId: 'multiply',
        displayId: 'product',
        operation: multiply
    }, {
        input1Id: 'div-one',
        input2Id: 'div-two',
        buttonId: 'divide',
        displayId: 'quotient',
        operation: divide
    }
];

//for loop
for (let i = 0; i < operations.length; i++) {
    let calculate = operations[i];
    init(calculate.input1Id, calculate.input2Id, calculate.buttonId, calculate.displayId, calculate.operation);
}

//Guess the sum
const checkOneInput = document.getElementById('check-one');
const checkTwoInput = document.getElementById('check-two');
const checkSumButton = document.getElementById('check-sum');
const guessInput = document.getElementById('guess-input');
const verifySumButton = document.getElementById('verify-guess');


checkSumButton.addEventListener ('click', () => {
    if (toNumber(guessInput) === toNumber(checkOneInput) + toNumber(checkTwoInput)) {
        verifySumButton.textContent = 'Yes!';
        verifySumButton.style.background = 'darkseagreen';
    } else {
        verifySumButton.textContent = 'Try Again';
        verifySumButton.style.background = 'salmon';
    }
});

/* Code before incorporating object array
// Operations
init('add-one', 'add-two', 'add', 'sum', add);
init('sub-one', 'sub-two', 'subtract', 'difference', subtract);
init('mult-one', 'mult-two', 'multiply', 'product', multiply);
init('div-one', 'div-two', 'divide', 'quotient', divide);
*/

/* Code before refactoring
//addition
const addOneInput = document.getElementById('add-one');
const addTwoInput = document.getElementById('add-two');
const addButton = document.getElementById('add');
const sumDisplay = document.getElementById('sum');

addButton.addEventListener ('click', () => {
    sumDisplay.textContent = add(toNumber(addOneInput), toNumber(addTwoInput));
});

//subtraction
const subOneInput = document.getElementById('sub-one');
const subTwoInput = document.getElementById('sub-two');
const subButton = document.getElementById('subtract');
const diffDisplay = document.getElementById('difference');

subButton.addEventListener ('click', () => {
    diffDisplay.textContent = subtract(toNumber(subOneInput), toNumber(subTwoInput));
});

//multiplication
const multOneInput = document.getElementById('mult-one');
const multTwoInput = document.getElementById('mult-two');
const multButton = document.getElementById('multiply');
const prodDisplay = document.getElementById('product');

multButton.addEventListener ('click', () => {
    prodDisplay.textContent = multiply(toNumber(multOneInput), toNumber(multTwoInput));
});

//division
const divOneInput = document.getElementById('div-one');
const divTwoInput = document.getElementById('div-two');
const divButton = document.getElementById('divide');
const quotDisplay = document.getElementById('quotient');

divButton.addEventListener ('click', () => {
    quotDisplay.textContent = divide(toNumber(divOneInput), toNumber(divTwoInput));
});
*/