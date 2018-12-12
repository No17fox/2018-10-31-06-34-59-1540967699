'use strict';
var number_map_to_word = function(collection){
  return collection.map(convertNumberToLetter);
};

function convertNumberToLetter(number) {
  return String.fromCharCode(number + 96);
}

module.exports = number_map_to_word;
