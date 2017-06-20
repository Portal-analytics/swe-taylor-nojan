var prompt = require("prompt");

prompt.start();
prompt.get(["firstNumber", "operator", "secondNumber"], function(err, result) {
  var firstNumber = Number(result.firstNumber);
  var secondNumber = Number(result.secondNumber);
  console.log("Equation received");
  function solveEquation() {
    if (result.operator === "+") {
      answer = firstNumber + secondNumber;
      console.log(firstNumber + "+" + secondNumber + "=" + answer);
    }
    if (result.operator === "*") {
      answer = firstNumber * secondNumber;
      console.log(firstNumber + "*" + secondNumber + "=" + answer);
    }
    if (result.operator === "/") {
      answer = firstNumber / secondNumber;
      console.log(firstNumber + "/" + secondNumber + "=" + answer);
    }
    if (result.operator === "-") {
      answer = firstNumber - secondNumber;
      console.log(firstNumber + "-" + secondNumber + "=" + answer);
    }
  }
  solveEquation();
});
