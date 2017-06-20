var prompt = require("prompt");

prompt.start();
prompt.get(["cost", "given"], function(err, result) {
  console.log("Input received");
  console.log("The cost was " + result.cost + " and you paid " + result.given);
  function getChange() {
    var moneyBack = result.given - result.cost;
    if (moneyBack >= 1) {
      console.log("Dollars: " + Math.floor(moneyBack / 1));
      moneyBack = moneyBack - Math.floor(moneyBack / 1);
    }
    if (moneyBack > 0) {
      console.log("Quarters: " + Math.floor(moneyBack / 0.25));
      moneyBack = moneyBack - Math.floor(moneyBack / 0.25) * 0.25;
    }
    if (moneyBack > 0) {
      console.log("Dimes: " + Math.floor(moneyBack / 0.1));
      moneyBack = moneyBack - Math.floor(moneyBack / 0.1) * 0.1;
    }
    if (moneyBack > 0) {
      console.log("Nickels: " + Math.floor(moneyBack / 0.05));
      moneyBack = moneyBack - Math.floor(moneyBack / 0.05) * 0.05;
    }
    if (moneyBack >= 0.01) {
      console.log("Pennies: " + Math.floor(moneyBack * 100));
    }
  }
  console.log(getChange());
});
