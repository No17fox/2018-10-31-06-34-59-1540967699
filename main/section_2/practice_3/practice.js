function count_same_elements(collection) {
  return convertObjToArrat(countSameElement(collection));
}

function countSameElement(collection) {
  let count = {};
  collection.map((element) => {
    let key = element.match(/[a-zA-Z]+/g)[0];
    let matchValue = element.match(/[0-9]+/g);
    let summary = matchValue ? matchValue[0] : 1;
    if (count[key]) {
      count[key] += parseInt(summary);
    } else {
      count[key] = parseInt(summary);
    }
  })
  return count;
}

function convertObjToArrat(obj) {
  return Object.keys(obj).map((element) => {
    return {
      name: element,
      summary: obj[element],
    };
  });
}

module.exports = count_same_elements;
