// app.js

import multiply, { add, subtract, addAndLogUpper } from './mathmodule.js';
import { toUpperCase, toLowerCase } from './stringmodule.js';
import { findMax, reverseArray } from './arraymodule.js';

// test math
console.log('Add: ', add(5, 3));
console.log('Subtract: ', subtract(10, 4));
console.log('Multiply: ', multiply(4, 5));
addAndLogUpper(10, 20);  // logs 30 as uppercase

// test strings
console.log('Uppercase: ', toUpperCase('hello'));
console.log('Lowercase: ', toLowerCase('WORLD'));

// test arrays
console.log('Max: ', findMax([1, 2, 3, 4, 5]));
console.log('Reversed: ', reverseArray([1, 2, 3]));

// Part 8: Combine array + math + string modules
const numbers = [3, 7, 2, 9, 5];
const maxNum = findMax(numbers);
const multiplied = multiply(maxNum, 2);
const finalResult = toUpperCase(multiplied.toString());
console.log('Final Combined Result: ', finalResult); // 18 → '18'
