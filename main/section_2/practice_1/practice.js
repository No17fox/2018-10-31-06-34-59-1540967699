function count_same_elements(collection) {
  return convertObjectToArray(count(collection));
}

function count(collection) {
  let elementType = {};
  for (let item of collection) {
    if (elementType[item]) {
      elementType[item] += 1;
    } else {
      elementType[item] = 1;
    }
  }
  return elementType;
}

function convertObjectToArray(obj) {
  return Object.keys(obj).map((element) => {
    return {
      key: element,
      count: obj[element],
    };
  });
}


module.exports = count_same_elements;
