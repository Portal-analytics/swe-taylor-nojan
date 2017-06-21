function bubbleSort(array) {
  var length = array.length;
  for (var i = length - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (array[j - 1] > array[j]) {
        var temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([3, 2, 1]));
console.log(bubbleSort([3, 4, 1, 8, 2, 4]));

function mergeSort(array) {
  var length = array.length;
  if (length <= 1) return array;
  var middleNumber = Math.floor(length / 2),
    left = array.slice(0, middleNumber),
    right = array.slice(middleNumber);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  var result = [],
    leftLength = left.length,
    rightLength = right.length,
    l = 0,
    r = 0;
  while (l < leftLength && r < rightLength) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
}

console.log(mergeSort([1, 4, 2, 3]));
console.log(mergeSort([3, 4, 1, 8, 2, 4]));
