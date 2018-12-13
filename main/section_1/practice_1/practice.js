function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(function (element) {
    for (let i = 0; i < collection_b.length; i++) {
      if (element === collection_b[i]) {
        return true;
      }         
    }
    return false;
  });
}

module.exports = collect_same_elements;
