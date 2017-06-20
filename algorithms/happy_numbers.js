var prompt = require("prompt");
prompt.start();
prompt.get(["number"], function(err, result) {
  initnum = result.number;
  num = String(result.number);
  while (num !== "1") {
    num_list = [];
    num_sq_list = [];
    sum_num = 0;
    for (var i = 0; i < num.length; i++) {
      num_list.push(num[i]);
    }
    console.log(num_list);
    for (var i = 0; i < num_list.length; i++) {
      num_sq_list.push(Math.pow(Number(num_list[i]), 2));
    }
    for (var i = 0; i < num_sq_list.length; i++) {
      sum_num += num_sq_list[i];
    }
    num = String(sum_num);
    console.log(num);
  }
  console.log(initnum + " is happy!");
});
