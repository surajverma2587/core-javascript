export const palindrome = (str) => {
  if (!str || typeof str !== "string") {
    return "Error, invalid input string!";
  }

  const validCharacters = "abcdefghijklmnopqrstuvwxyz";

  const normalisedStr = str.toLowerCase();

  const normalisedStrArr = str.toLowerCase().split("");

  const hasInvalidCharacters = normalisedStrArr.some((each) => {
    return !validCharacters.includes(each);
  });

  if (hasInvalidCharacters) {
    return "Error, invalid input string!";
  }

  if (normalisedStrArr.reverse().join("") === normalisedStr) {
    return `Hurray, ${str} a palindrome!`;
  }

  return `Sorry, ${str} is not a palindrome!`;
};
