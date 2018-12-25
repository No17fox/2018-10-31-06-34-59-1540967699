'use strict';

let even_to_letter = collection => collection.filter(isEven).map(convertNumberToLetter);

let isEven = number => number % 2 === 0;

let convertNumberToLetter = number => String.fromCharCode(number + 96);

module.exports = even_to_letter;
