function getDistance(array) {
  var currentSmallest = distance(
    array[0][0],
    array[0][1],
    array[1][0],
    array[1][1]
  );
  for (var i = 0; i < array.length; i++) {
    a = array[i][0];
    b = array[i][1];
    for (var j = 0; j < array.length; j++) {
      a2 = array[j][0];
      b2 = array[j][1];
      var small = distance(a, b, a2, b2);
      if (small < currentSmallest && small !== 0) {
        currentSmallest = small;
        finalA = a;
        finalB = b;
        finalA2 = a2;
        finalB2 = b2;
      }
    }
  }
  console.log("(" + a + "," + b + ") and " + "(" + a2 + "," + b2 + ")");
}

getDistance([[0, 1], [0, 2], [4, 5], [4, 6], [7, 10]]);

function distance(a, b, a2, b2) {
  answer = Math.sqrt(Math.pow(a2 - a, 2) + Math.pow(b2 - b, 2));
  return answer;
}
