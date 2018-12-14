'use strict';

function even_to_letter(collection) {
  let even = collection.filter(isEven);
  return even.map(convertNumberToLetter);  
}

function isEven(number) {
  return number % 2 === 0;
}

function convertNumberToLetter(number) {
  return String.fromCharCode(number + 96);
}

module.exports = even_to_letter;
