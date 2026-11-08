'use strict';

const year = Number(prompt('Enter a year:'));
let isLeap = false;

if (year % 400 === 0) {
  isLeap = true;
} else if (year % 100 === 0) {
  isLeap = false;
} else if (year % 4 === 0) {
  isLeap = true;
}

const result = document.getElementById('result');
if (isLeap) {
  result.textContent = `${year} is a leap year.`;
} else {
  result.textContent = `${year} is not a leap year.`;
}