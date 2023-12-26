const score = 30;

if (score >= 50) {
  console.log("Gold");
} else if (score >= 20 && score < 50) {
  console.log("Silver");
} else {
  console.log("Bronze");
}

const hasError = true;

if (hasError) {
  console.log("Something went wrong!");
}

let counter = 5;

while (counter > 0) {
  console.log(counter);
  counter -= 1;

  if (counter === 0) {
    console.log("BOOM");
  }
}
