var count_same_elements = require("../../../main/section_2/practice_1/practice.js");

function create_updated_collection(collection_a, object_b) {
  let elementType = count_same_elements(collection_a);
  for (let i = 0; i < elementType.length; i++) {
    for (let j = 0; j < object_b.value.length; j++) {
      if (elementType[i].key === object_b.value[j]) {
        elementType[i].count -= parseInt(elementType[i].count / 3);
      }
    }
  }
  return elementType;
}

module.exports = create_updated_collection;
