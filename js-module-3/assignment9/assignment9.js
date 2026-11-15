'use strict';

function even(numbers) {
  const result = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      result.push(number);
    }
  }
  return result;
}

const original = [2, 7, 4, 9, 10, 13, 6];
const evens = even(original);

console.log('Original array:', original);
console.log('Even numbers:', evens);