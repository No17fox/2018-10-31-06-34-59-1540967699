function collect_same_elements(collection_a, object_b) {
  let intersection = collection_a.filter(function (element) {
    for (let i = 0; i < object_b.value.length; i++) {
      if (element.key === object_b.value[i]) {
        return true;
      }  
    }
    return false;
  });
  return intersection.reduce(getAllValueFromObjectArray, []);
}

function getAllValueFromObjectArray(result, element, index) {
  result[index] = element.key;
  return result;
}

module.exports = collect_same_elements;
