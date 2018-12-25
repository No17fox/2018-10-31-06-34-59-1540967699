'use strict';

let countSameElements = require("../../../main/section_2/practice_2/practice.js");

let create_updated_collection = (collection_a, object_b) => {
  return countSameElements(collection_a).map((item) => {
    if (object_b.value.includes(item.key)) {
      item.count -= Math.floor(item.count / 3);
    }
    return item;
  });
};

module.exports = create_updated_collection;
