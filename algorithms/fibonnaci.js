var prompt = require("prompt");

prompt.start();
prompt.get(["number"], function(err, result) {
  console.log("Number Received");
  console.log("Fibonacci number: " + result.number);
  function fibonacci() {
    var first = 1,
      second = 0,
      temp;
    while (result.number > 0) {
      temp = first;
      first += second;
      second = temp;
      result.number--;
    }
    return second;
  }
  console.log(fibonacci());
});
