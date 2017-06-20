var prompt = require("prompt");
prompt.start();
prompt.get(["cost", "tax"], function(err, result) {
  cost = result.cost;
  tax = result.tax / 100;
  tax_amount = tax * cost;
  total_amount = Number(tax_amount) + Number(cost);
  console.log("tax: " + tax_amount + ", total amount: " + total_amount);
});
