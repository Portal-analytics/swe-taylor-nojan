var prompt = require("prompt");
prompt.start();
prompt.get(["BinaryOrDecimal", "number"], function(err, result) {
  //
  // Log the results.
  //
  console.log("Command-line input received:");
  if (result.BinaryOrDecimal == "Binary") {
    binary = result.number;
    console.log(parseInt(binary, 2));
  }
  if (result.BinaryOrDecimal == "Decimal") {
    decimal = result.number;
    console.log((decimal >>> 0).toString(2));
  }
});
