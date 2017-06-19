var prompt = require("prompt");
prompt.start();
prompt.get(["timesToFlip"], function(err, result) {
  console.log("Command-line input received:");
  var heads = 0;
  var tails = 0;
  for (var i = 0; i < result.timesToFlip; i++) {
    var headsOrTails = Math.random();
    if (headsOrTails < 0.49) {
      heads++;
    } else {
      tails++;
    }
  }
  console.log("heads: ", heads, "tails: ", tails);
});
