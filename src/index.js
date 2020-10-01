
exports.min = function min (array) {
  if (!array || !array.length){
    return 0;
  }

  let min = array[0];
  let i = 1;
  while (i < array.length) {
    if (min > array[i]) {
      min = array[i];
    }
    i++;
  }
  return min;
}

exports.max = function max (array) {
  if (!array || !array.length){
    return 0;
  }

  let max = array[0];
  let i = 1;
  while (i < array.length) {
    if (max < array[i]) {
      max = array[i];
    }
    i++;
  }
  return max;
}

exports.avg = function avg (array) {
  if (!array || !array.length){
    return 0;
  }

  let sum = 0;
  let i = 0;
  while (i < array.length) {
    sum = sum + array[i];
    i++;
  }
  return sum / array.length;
}
