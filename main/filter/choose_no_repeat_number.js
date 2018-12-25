'use strict';

let choose_no_repeat_number = collection => collection.filter(uniqueElement);

let uniqueElement = (element, index, array) => array.indexOf(element) === index;

module.exports = choose_no_repeat_number;
