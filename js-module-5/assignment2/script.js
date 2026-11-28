'use strict';

const form = document.querySelector('form');
const input = document.querySelector('#query');

form.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const value = input.value;

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`);
    const tvShows = await response.json();
    console.log(tvShows);
  } catch (error) {
    console.log(error.message);
  }
});