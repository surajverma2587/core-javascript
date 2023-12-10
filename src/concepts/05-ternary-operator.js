const score = 25;

let message;

if (score > 50) {
  message = "You win!!";
} else {
  message = "You lose!!";
}

console.log(message);

// Ternary operator -> (condition) ? TRUE : FALSE
const displayMessage = score > 50 ? "You win!!" : "You lose!!";

console.log(displayMessage);
