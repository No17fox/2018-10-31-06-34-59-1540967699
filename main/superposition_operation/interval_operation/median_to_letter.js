'use strict';

const LETTER = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function median_to_letter(collection) {
  return getLetterbyCode(median(collection));
}

function median(collection) {
  let middle = collection.length / 2;
  if (collection.length % 2 === 0) {
    return Math.ceil((collection[middle - 1] + collection[middle]) / 2);
  } else {
    return collection[Math.floor(middle)];
  }
}

function getLetterbyCode(code) {
  if (code < LETTER.length) {
    return LETTER[code - 1];
  } else {
    let firstLetter = getLetterbyCode(Math.floor((code - 1) / LETTER.length));
    let secondLetter = LETTER[(code - 1) % LETTER.length];
    return firstLetter + secondLetter;
  }
}

module.exports = median_to_letter;
