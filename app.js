'use strict';
let quoteGen = [
  {
    quote:
      'A writer is someone for whom writing is more difficult than it is for other people',
    author: 'Thomas Mann',
  },
  {
    quote: 'Quiet people have the loudest minds.',
    author: 'Stephen King',
  },
  {
    quote:
      'I was not rescued by a prince; I was the administrator of my own rescue.',
    author: 'Elizabeth Gilbert',
  },
  {
    quote:
      "Live your life in such a way that you'll be remembered for your kindness, compassion, fairness, character, benevolence, and a force for good who had much respect for life, in general.",
    author: 'Germany Kent',
  },
  {
    quote:
      'I am no longer accepting the things I cannot change. I am changing the things I cannot accept.',
    author: 'Angela Davis',
  },
  {
    quote:
      'You are on the eve of a complete victory. You can’t go wrong. The world is behind you.',
    author: 'Josephine Baker',
  },
];

// declare variables for each element where quote will be displayed + button
const quotes = document.querySelector('blockquote');
const button = document.querySelector('#quote-btn');
const cite = document.querySelector('#cite');

function generator() {
  // this will get a random number from the array length and round it to nearest int
  const random = Math.floor(Math.random() * quoteGen.length);
  quotes.innerText = quoteGen[random].quote;
  cite.innerText = quoteGen[random].author;
}

button.addEventListener('click', generator);
