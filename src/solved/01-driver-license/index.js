export const driverLicense = (age) => {
  if (!Number.isInteger(age)) {
    return "Please enter a valid age, your age should be a positive integer.";
  } else if (age > 0 && age < 18) {
    return "Sorry, you are not allowed to drive until you turn 18 years of age.";
  } else if (age >= 18 && age <= 65) {
    return "Great news, you are cleared to drive until the age of 65.";
  } else if (age > 65) {
    return "Attention, you need to apply for a senior's license by taking the senior's driving test.";
  } else {
    return "Please enter a valid age, your age should be a positive integer.";
  }
};
