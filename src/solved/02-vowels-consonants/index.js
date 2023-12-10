export const vowelsAndConsonants = (sentence) => {
  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwxyz";

  if (!sentence) {
    return "Error: Invalid sentence, should contain alphabetical characters at minimum";
  }

  const normalisedSentence = sentence.toLowerCase();
  const normalisedSentenceArray = normalisedSentence.split("");

  const hasAlphabet = normalisedSentenceArray.some((character) => {
    return vowels.includes(character) || consonants.includes(character);
  });

  if (!hasAlphabet) {
    return "Error: Invalid sentence, should contain alphabetical characters at minimum";
  }

  let vowelCounter = 0;
  let consonantCounter = 0;

  normalisedSentenceArray.forEach((each) => {
    if (vowels.includes(each)) {
      vowelCounter += 1;
    }

    if (consonants.includes(each)) {
      consonantCounter += 1;
    }
  });

  return `Vowels: ${vowelCounter} | Consonants: ${consonantCounter}`;
};
