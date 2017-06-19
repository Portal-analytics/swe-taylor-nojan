var prompt = require("prompt");
prompt.start();
prompt.get(["num_one", "num_two"], function(err, result) {
  //
  // Log the results.
  //
  console.log("Command-line input received:");
  console.log(Math.pow(result.num_one, result.num_two));
});
