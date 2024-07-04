console.log("1.", username);
// Output:

var username = "bobsmith";

console.log("2.", username);
// Output:

if (username === "bobsmith") {
  console.log("3.", username);
  // Output:

  var username = "alicesmith";

  console.log("4.", username);
  // Output:
}

console.log("5.", username);
// Output:

function foo() {
  console.log("6.", username);
  // Output:

  var username = "alicesmith";

  console.log("7.", username);
  // Output:
}

foo();

function bar() {
  console.log("8.", username);
  // Output:

  username = "carolsmith";

  console.log("9.", username);
  // Output:
}

bar();

var email;

console.log("10.", email);
// Output:
