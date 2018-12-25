'use strict';

let collect_same_elements = (collection_a, collection_b) => collection_a.filter((element) => flaten(collection_b).includes(element));

let flaten = collection => collection.reduce((acc, cur) => acc.concat(cur), []);

module.exports = collect_same_elements;
