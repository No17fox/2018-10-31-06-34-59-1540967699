'use strict';

function even_to_letter(collection) {
  return collection.filter(isEven).map(convertNumberToLetter);
}

function isEven(number) {
  return number % 2 === 0;
}

function convertNumberToLetter(number) {
  return String.fromCharCode(number + 96);
}

module.exports = even_to_letter;
