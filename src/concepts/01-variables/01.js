console.log("1.", username);

var username = "bobsmith";

console.log("2.", username);

if (username === "bobsmith") {
  console.log("3.", username);

  var username = "alicesmith";

  console.log("4.", username);
}

console.log("5.", username);

function foo() {
  console.log("6.", username);

  var username = "alicesmith";

  console.log("7.", username);
}

foo();

function bar() {
  console.log("8.", username);

  username = "carolsmith";

  console.log("9.", username);
}

bar();

var email;

console.log("10.", email);
