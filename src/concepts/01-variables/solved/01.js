console.log("1.", username);
// Output: 1. undefined

var username = "bobsmith";

console.log("2.", username);
// Output: 2. bobsmith

if (username === "bobsmith") {
  console.log("3.", username);
  // Output: 3. bobsmith

  var username = "alicesmith";

  console.log("4.", username);
  // Output: 4. alicesmith
}

console.log("5.", username);
// Output: 5. alicesmith

function foo() {
  console.log("6.", username);
  // Output: 6. undefined

  var username = "alicesmith";

  console.log("7.", username);
  // Output: 7. alicesmith
}

foo();

function bar() {
  console.log("8.", username);
  // Output: 8. alicesmith

  username = "carolsmith";

  console.log("9.", username);
  // Output: 9. carolsmith
}

bar();

var email;

console.log("10.", email);
// Output: 10. undefined
