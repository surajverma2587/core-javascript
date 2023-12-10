export const pangram = (sentence) => {
  if (!sentence) {
    return "Error, invalid sentence!";
  }

  const characters = "abcdefghijklmnopqrstuvwxyz";

  const charactersArray = characters.split("");
  const sentenceArray = sentence.toLowerCase().trim().split("");

  const isPangram = charactersArray.every((character) =>
    sentenceArray.includes(character)
  );

  return isPangram ? "Hurray, it is a pangram!" : "Sorry, it is NOT a pangram!";
};
