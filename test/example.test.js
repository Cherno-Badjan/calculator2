// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getSum, getDifference, getProduct, getDiv } from '../utils.js';

const test = QUnit.test;

test('For the love of god please return the correct sum when given two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 100;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSum(50, 50);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);

    const expected2 = 200;


    const actual2 = getSum(100, 100);


    expect.equal(actual2, expected2);

});


test('For the love of god please return the correct difference when given two numbers', (expect) => {

    const expected = 25;

    const actual = getDifference(50, 25);

    expect.equal(actual, expected);

    const expected2 = 10;

    const actual2 = getDifference(50, 40);

    expect.equal(actual2, expected2);

});
test('For the love of god please return the correct product when given two numbers', (expect) => {

    const expected = 5000;

    const actual = getProduct(50, 100);

    expect.equal(actual, expected);

    const expected2 = 64;

    const actual2 = getProduct(8, 8);

    expect.equal(actual2, expected2);
});
test('For the love of god please return the correct quotient when given two numbers', (expect) => {

    const expected = 10;

    const actual = getDiv(20, 2);

    expect.equal(actual, expected);

    const expected2 = 100;

    const actual2 = getDiv(200, 2);

    expect.equal(actual2, expected2);
});
