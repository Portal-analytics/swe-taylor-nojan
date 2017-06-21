var prompt = require("prompt");
prompt.start();
prompt.get(["number"], function(err, result) {
  number = Number(result.number);
  var steps = 0;
  if (number <= 1) {
    console.log("number needs to be greater than one.");
  } else {
    while (number != 1) {
      if (number % 2 == 0) {
        number = number / 2;
        steps++;
      } else {
        number = number * 3 + 1;
        steps++;
      }
    }
    console.log(steps);
  }
});
