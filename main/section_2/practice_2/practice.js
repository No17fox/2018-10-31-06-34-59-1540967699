function count_same_elements(collection) {
  return convertObjectToArray(count(collection));
}

function count(collection) {
  let elementList = {};
  collection.map((element) => {
    let key = element.match(/[a-zA-Z]+/g)[0];
    let matchValue = element.match(/[0-9]+/g);
    let summary = matchValue ? matchValue[0] : 1;
    if (elementList[key]) {
      elementList[key] += parseInt(summary);
    } else {
      elementList[key] = parseInt(summary);
    }
  });
  return elementList;
}

function convertObjectToArray(obj) {
  return Object.keys(obj).map((element) => {
    return {
      key: element,
      count: obj[element],
    }
  })
}

module.exports = count_same_elements;
