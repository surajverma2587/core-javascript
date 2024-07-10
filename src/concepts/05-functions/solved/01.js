export const calculator = (num1, num2, operation) => {
  if (operation === "ADD") {
    return num1 + num2;
  }

  if (operation === "SUBTRACT") {
    return num1 - num2;
  }

  if (operation === "MULTIPLY") {
    return num1 * num2;
  }

  if (operation === "DIVIDE") {
    return num1 / num2;
  }

  if (operation === "MODULUS") {
    return num1 % num2;
  }

  return "Invalid operation";
};

export const authentication = (username, password) => {
  if (!username || !password) {
    return "Missing credentials";
  }

  if (username === "bobsmith" && password === "Password123!") {
    return "Success";
  }

  return "Invalid credentials";
};
