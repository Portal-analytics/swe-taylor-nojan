var prompt = require("prompt");
prompt.start();
prompt.get(["number"], function(err, result) {
  var num = result.number;
  factorial = num;
  if (num != 0) {
    while (num != 1) {
      factorial *= num - 1;
      num = num - 1;
    }
    console.log(factorial);
  } else {
    console.log(1);
  }
});
