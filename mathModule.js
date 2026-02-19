// mathModule.js

// Named exports
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// Default export
export default function multiply(a, b) {
    return a * b;
}

// Part 7: Combine math + string
import { toUpperCase } from './stringmodule.js';

export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
}
