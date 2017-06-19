var prompt = require("prompt");
prompt.start();
prompt.get(["creditNum"], function(err, result) {
  //
  // Log the results.
  //
  var every_other_sum = 0;
  console.log("Command-line input received:");
  for (var i = 0; i < result.creditNum.length; i++) {
    every_other_sum += Number(result.creditNum[i]);
  }
  console.log(every_other_sum);
});
