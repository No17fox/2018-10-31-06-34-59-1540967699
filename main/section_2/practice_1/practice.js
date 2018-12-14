function count_same_elements(collection) {
  let elementType = [];
  for (let i = 0; i < collection.length; i++) {
    count(collection[i], elementType);
  }
  return elementType;
}

function count(element, collection) {
  let differentTimes = 0;
  for (let i = 0; i < collection.length; i++) {
    if (element === collection[i].key) {
      collection[i].count += 1;
    } else {
      differentTimes++;
    }
  }
  if (differentTimes === collection.length) {
    collection.push({key: element, count: 1});
  }
  differentTimes = 0;
}


module.exports = count_same_elements;
