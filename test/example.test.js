// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getSum } from '../utils.js';

const test = QUnit.test;

test('For the love of god please return 5 when give 3 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSum(3, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
