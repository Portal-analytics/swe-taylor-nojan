var prompt = require("prompt");
prompt.start();
prompt.get(["width", "height", "cost"], function(err, result) {
  width = result.width;
  height = result.height;
  cost = result.cost;
  sq_ft = width * height;
  total_cost = sq_ft * cost;
  console.log(total_cost);
});
