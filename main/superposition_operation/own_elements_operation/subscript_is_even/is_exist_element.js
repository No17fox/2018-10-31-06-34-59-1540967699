'use strict';
let is_exist_element = (collection, element) => collection.filter((item, index) => index % 2 === 0).includes(element);

module.exports = is_exist_element;
