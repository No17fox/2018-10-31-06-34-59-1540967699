function collect_same_elements(collection_a, object_b) {
  return collection_a.filter(function (element) {
    for (let i = 0; i < object_b.value.length; i++) {
      if (element === object_b.value[i]) {
        return true;
      }  
    }
    return false;
  });
}

module.exports = collect_same_elements;
