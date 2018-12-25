'use strict';

const LETTER = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let getIntegerInterval = require('./get_integer_interval.js');

let get_letter_interval_2 = (number_a, number_b) => getIntegerInterval(number_a, number_b).map(getLetterByCode);

let getLetterByCode = code => {
  if (code <= LETTER.length) {
    return LETTER[code - 1];
  } else {
    let firstLetter = getLetterByCode(Math.floor((code - 1) / LETTER.length));
    let secondLetter = LETTER[(code - 1) % LETTER.length];
    return firstLetter + secondLetter;
  }
}

module.exports = get_letter_interval_2;

