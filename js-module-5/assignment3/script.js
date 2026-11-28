'use strict';

const form = document.querySelector('form');
const input = document.querySelector('#query');
const results = document.querySelector('#results');

form.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const value = input.value;

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`);
    const tvShows = await response.json();
    console.log(tvShows);

    results.innerHTML = '';

    for (const tvShow of tvShows) {
      const article = document.createElement('article');

      const h2 = document.createElement('h2');
      h2.innerText = tvShow.show.name;

      const a = document.createElement('a');
      a.href = tvShow.show.url;
      a.innerText = 'Details';
      a.target = '_blank';

      const img = document.createElement('img');
      img.src = tvShow.show.image?.medium;
      img.alt = tvShow.show.name;

      const summary = document.createElement('div');
      summary.innerHTML = tvShow.show.summary;

      article.append(h2, a, img, summary);
      results.append(article);
    }
  } catch (error) {
    console.log(error.message);
  }
});