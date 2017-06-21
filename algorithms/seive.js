var prompt = require("prompt");
prompt.start();
prompt.get(["number"], function(err, result) {
  num = Number(result.number);
  var number_list = [];
  var prime_list = [2];
  for (var i = 3; i < num; i++) {
    number_list.push(i);
  }
  for (var number in number_list) {
    if (number_list[number] % 2 != 0) {
      var prime_so_far = true;
      while (prime_so_far) {
        for (var prime_num in prime_list) {
          if (number_list[number] % prime_list[prime_num] == 0) {
            prime_so_far = false;
          }
        }
        if (prime_so_far) {
          prime_list.push(number_list[number]);
        }
      }
    }
  }
  console.log(prime_list);
});
