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
    if (element.slice(0,1) === collection[i].name) {
      if (element.slice(2)) {
        collection[i].summary += parseInt(element.slice(2));
      } else {
        collection[i].summary += 1;
      }
    } else {
      differentTimes++;
    }
  }
  if (differentTimes === collection.length) {    
    if (element.slice(2)) {
      collection.push({name: element.slice(0,1), summary: parseInt(element.slice(2))});
    } else {
      collection.push({name: element.slice(0,1), summary: 1});
    }
  }
  differentTimes = 0;
}

module.exports = count_same_elements;
