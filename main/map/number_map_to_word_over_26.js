'use strict';

const LETTER = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let number_map_to_word_over_26 = collection => collection.map(getLetterByCode);

let getLetterByCode = code => {
  if (code <= LETTER.length) {
    return LETTER[code - 1];
  } else {
    let firstLetter = getLetterByCode(Math.floor(code / LETTER.length));
    let secondLetter = LETTER[code % LETTER.length - 1];
    return firstLetter + secondLetter;
  }
};

module.exports = number_map_to_word_over_26;
