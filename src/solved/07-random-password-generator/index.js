import { getRandomIndex } from "./getRandomIndex";

export const lowercase = "abcdefghijklmnopqrstuvwxyz";
export const uppercase = "ABCDEFGHIJKLMNOPQRTSUVWXYZ";
export const numbers = "1234567890";
export const specialCharacters = "!@£$%^&*()_+";

export const randomPasswordGenerator = (length, passwordCriteria) => {
  const isValidPasswordCriteria =
    Object.values(passwordCriteria).filter((e) => e).length > 1;

  if (
    length < 8 ||
    length > 128 ||
    !Number.isInteger(length) ||
    !isValidPasswordCriteria
  ) {
    return "Error: Please enter a valid length between 8 and 128 characters.";
  }

  const selectedCriteria = [];

  const lowercaseArray = lowercase.split("");
  const uppercaseArray = uppercase.split("");
  const numbersArray = numbers.split("");
  const specialCharactersArray = specialCharacters.split("");

  if (passwordCriteria.isLowercase) {
    selectedCriteria.push(lowercaseArray);
  }

  if (passwordCriteria.isUppercase) {
    selectedCriteria.push(uppercaseArray);
  }

  if (passwordCriteria.isNumeric) {
    selectedCriteria.push(numbersArray);
  }

  if (passwordCriteria.isSpecial) {
    selectedCriteria.push(specialCharactersArray);
  }

  const emptyPasswordArray = new Array(length).fill("");

  const randomPasswordArray = emptyPasswordArray.map(() => {
    const randomCriteriaIndex = getRandomIndex(selectedCriteria);

    const randomCriteria = selectedCriteria[randomCriteriaIndex];

    const randomCharacterIndex = getRandomIndex(randomCriteria);

    const randomCharacter = randomCriteria[randomCharacterIndex];

    return randomCharacter;
  });

  const randomPassword = randomPasswordArray.join("");

  return `Random password: ${randomPassword}`;
};
