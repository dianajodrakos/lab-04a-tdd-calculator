// IMPORT MODULES under test here:
import { 
    add, 
    subtract, 
    multiply, 
    divide, 
    toNumber 
} from '../calculator.js';

const test = QUnit.test;

test('add', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //inputs?
    const x = 11;
    const y = 2;
    const expected = 13;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtract', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //inputs?
    const x = 11;
    const y = 2;
    const expected = 9;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multiply', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //inputs?
    const x = 11;
    const y = 2;
    const expected = 22;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('divide', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //inputs?
    const x = 11;
    const y = 2;
    const expected = 5.5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('0 divided by 0 returns 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //inputs?
    const x = 0;
    const y = 0;
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('toNumber test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //inputs?
    const expected = 7;
    const input = document.createElement('input');
    input.value = '7';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = toNumber(input);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Empty string returns 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //inputs?
    const expected = 0;
    const input = '';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = toNumber(input);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
