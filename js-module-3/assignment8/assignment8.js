'use strict';

function concat(array) {
  let result = '';
  for (const item of array) {
    result += item;
  }
  return result;
}

const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
document.getElementById('result').textContent = concat(names);