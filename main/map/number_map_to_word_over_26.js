'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(convertNumberToLetter);
};

function convertNumberToLetter(number) {
  let multiple = number / 26;
  let reminder = number % 26;
  if (multiple <= 1) {
    return numberToString(number);
  } else if(number % 26 === 0) {
    return numberToString(Math.floor(number) - 1) + numberToString(26);
  } else {
    return numberToString(Math.floor(multiple)) + numberToString(reminder);
  }
}

function numberToString(number) {
  return String.fromCharCode(number + 96);
}

module.exports = number_map_to_word_over_26;
