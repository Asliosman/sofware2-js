'use strict';

const a = Number(prompt('Enter the first integer:'));
const b = Number(prompt('Enter the second integer:'));
const c = Number(prompt('Enter the third integer:'));

const sum = a + b + c;
const product = a * b * c;
const average = sum / 3;

document.getElementById('result').textContent =
  `Sum: ${sum}, product: ${product}, average: ${average.toFixed(2)}`;