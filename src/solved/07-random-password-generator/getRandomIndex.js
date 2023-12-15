export const getRandomIndex = (array) => {
  if (array.length === 0) {
    return 0;
  }

  return Math.floor(Math.random() * array.length);
};
