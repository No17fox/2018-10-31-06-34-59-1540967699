'use strict';

const LETTER = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let getIntegerInterval = require('./get_integer_interval.js');

let get_letter_interval = (number_a, number_b) => getIntegerInterval(number_a, number_b).map(getLetterFromCode);

let getLetterFromCode = code => LETTER[code - 1];

module.exports = get_letter_interval;
