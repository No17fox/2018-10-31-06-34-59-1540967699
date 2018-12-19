'use strict';

const LETTER = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let getIntegerInterval = require('./get_integer_interval.js');

function get_letter_interval(number_a, number_b) {
  let collection = getIntegerInterval(number_a, number_b);
  return collection.map(getLetterFromCode);
}

function getLetterFromCode(code) {
  return LETTER[code - 1];
}

module.exports = get_letter_interval;
