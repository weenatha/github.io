// Current Solution

let integrate = (coefficient, exponent) => (`${Math.abs(coefficient/(exponent + 1)).toString()}x^${Math.abs((exponent + 1)).toString()}`)

// Previous Solution:
function integrate(coefficient, exponent) {
  return `${coefficient/(exponent+1)}x^${exponent+1}`
}

/* DESCRIPTION
Create a function that finds the integral of the expression passed.

In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.

For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).

Notes:

The output should be a string.
The coefficient and exponent is always a positive integer.
Examples
 3, 2  -->  "1x^3"
12, 5  -->  "2x^6"
20, 1  -->  "10x^2"
40, 3  -->  "10x^4"
90, 2  -->  "30x^3"*/




/* Test Cases
const { assert } = require('chai');

const randNum = (min, max) => Math.ceil((Math.random()*(max-min))+min);

describe('Submission tests', () => {
  it("Should work with example test cases", () => {
    assert.strictEqual(integrate(3,2), "1x^3", 'integrate(3, 2)');
    assert.strictEqual(integrate(12,5), "2x^6", 'integrate(12, 5)');
    assert.strictEqual(integrate(20,1), "10x^2", 'integrate(20, 1)');
    assert.strictEqual(integrate(40,3), "10x^4", 'integrate(40, 3)');
    assert.strictEqual(integrate(90,2), "30x^3", 'integrate(90, 2)');
  });

  it("Should work with randomly generated test cases", () => {
    let randCo;
    let randEx;
    for(let i = 0; i < 50; i++) {
      randCo = randNum(1,100);
      randEx = randNum(3,100);
      assert.strictEqual(integrate(randCo * randEx, randEx - 1), `${randCo}x^${randEx}`, `integrate(${randCo * randEx}, ${randEx - 1})`);
    }
  });
});*/
