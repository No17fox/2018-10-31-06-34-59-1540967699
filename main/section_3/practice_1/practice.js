'use strict';

let create_updated_collection = (collection_a, object_b) => {
  return collection_a.map((item) => {
    if (object_b.value.includes(item.key)) {
      item.count -= 1;
    }
    return item;
  });  
};

module.exports = create_updated_collection;
