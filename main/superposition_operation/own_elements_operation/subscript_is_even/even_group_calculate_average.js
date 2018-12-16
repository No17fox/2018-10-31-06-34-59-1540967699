'use strict';
var even_group_calculate_average = function(collection){
  let evenPositionElement = [];
  for (let i = 0; i < Math.floor(collection.length / 2); i++) {
    evenPositionElement.push(collection[i * 2 + 1]);
  }
  let even = evenPositionElement.filter(isEven);
  let average = [];
  if (even.length === 0) {
    average.push(0);
  } else {
    let lessThanTen = even.filter(isLessThanThen);
    let lessThanHundred = even.filter(isLessThanHundred);
    let lessThanThousand = even.filter(isLessThanThousand);
    if (lessThanTen.length === 0 && lessThanHundred.length === 0) {
      average.push(lessThanThousand.reduce(sum) / lessThanThousand.length);
    } else {
      average.push(lessThanTen.reduce(sum) / lessThanTen.length);
      average.push(lessThanHundred.reduce(sum) / lessThanHundred.length);
      average.push(lessThanThousand.reduce(sum) / lessThanThousand.length);
    }
  }
  return average;
};

function sum(last, current) {
  return last + current;
}

function isEven(number) {
  return number % 2 === 0;
}

function isLessThanThen(number) {
  return number < 10;
}

function isLessThanHundred(number) {
  return number < 100 && number > 9;
}

function isLessThanThousand(number) {
  return number < 1000 && number > 99;
}

module.exports = even_group_calculate_average;
