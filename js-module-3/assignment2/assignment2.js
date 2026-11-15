'use strict';

const count = Number(prompt('How many participants?'));
const names = [];

for (let i = 1; i <= count; i++) {
  names.push(prompt(`Name of participant ${i}:`));
}

names.sort((a, b) => a.localeCompare(b));

const list = document.getElementById('list');
for (const name of names) {
  const li = document.createElement('li');
  li.textContent = name;
  list.appendChild(li);
}