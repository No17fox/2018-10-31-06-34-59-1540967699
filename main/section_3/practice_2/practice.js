'use strict';

let create_updated_collection = (collection_a, object_b) => {
  return collection_a.map((item) => {
    if (object_b.value.includes(item.key)) {
      item.count -= Math.floor(item.count / 3);
    }
    return item;
  }); 
};

module.exports = create_updated_collection;
