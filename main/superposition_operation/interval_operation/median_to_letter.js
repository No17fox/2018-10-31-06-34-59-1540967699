'use strict';

function median_to_letter(collection) {
  return numberToLetter(median(collection));
}

function median(collection) {
  let middle = collection.length / 2;
  if (collection.length % 2 === 0) {
    return Math.ceil((collection[middle - 1] + collection[middle]) / 2);
  } else {
    return collection[Math.floor(middle)];
  }
}

function numberToLetter(number) {
  let multiple = number / 26;
  let reminder = number % 26;
  let firstCode = 0;
  let lastCode = 0;
  if (multiple <= 1) {
    lastCode = number + 96;
  } else if (reminder === 0) {
    firstCode = multiple - 1 + 96;
    lastCode = 26 + 96;
  } else {
    firstCode = Math.floor(multiple) + 96;
    lastCode = reminder + 96;
  }
  return String.fromCharCode(firstCode) + String.fromCharCode(lastCode);
}

module.exports = median_to_letter;
