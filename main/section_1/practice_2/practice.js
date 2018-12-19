function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter((element) => flaten(collection_b).includes(element));
}

function flaten(collection) {
  return collection.reduce((acc, cur) => acc.concat(cur), []);
}

module.exports = collect_same_elements;
