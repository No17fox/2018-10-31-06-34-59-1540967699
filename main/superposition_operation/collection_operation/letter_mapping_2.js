'use strict';

let average_to_letter = collection => {
  let average = collection.reduce((acc, cur) => acc + cur) / collection.length;
  return convertNumberToLetter(Math.ceil(average));
};

let convertNumberToLetter = number => String.fromCharCode(number + 96);

module.exports = average_to_letter;

