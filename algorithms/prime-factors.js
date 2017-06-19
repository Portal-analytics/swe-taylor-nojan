var prompt = require("prompt");
prompt.get(["number"], function(err, result) {
  console.log("Number Received");
  console.log("Number: " + result.number);
  function getFactors() {
    var primeFactors = [];
    for (i = 2; i <= result.number; i++) {
      while (result.number % i === 0) {
        primeFactors.push(i);
        result.number /= i;
      }
    }
    return primeFactors;
  }
  console.log(getFactors());
});
