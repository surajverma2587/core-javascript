const result1 = greeting("bobsmith");
console.log(result1);

// function declaration
function greeting(username) {
  if (!username) {
    return "Please provide an username!";
  } else {
    return "Welcome " + username + "!";
  }
}

// function expression
const anotherGreeting = function (username) {
  if (!username) {
    return "Please provide an username!";
  } else {
    return "Welcome " + username + "!";
  }
};

const result2 = anotherGreeting("alicesmith");
console.log(result2);

// function expression with es6 arrow function
const arrowGreeting = (username) => {
  if (!username) {
    return "Please provide an username!";
  } else {
    return "Welcome " + username + "!";
  }
};

const result3 = arrowGreeting("davesmith");
console.log(result3);

const refactoredGreeting = (username) =>
  !username ? "Please provide an username!" : "Welcome " + username + "!";

const result4 = refactoredGreeting("jacksmith");
console.log(result4);
