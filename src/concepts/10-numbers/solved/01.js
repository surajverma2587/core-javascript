export const areaAndPerimeter = (shape, sideA, sideB) => {
  if (shape !== "SQUARE" && shape !== "RECTANGLE") {
    return "Invalid shape!";
  }

  if (
    Number.isNaN(sideA) ||
    Number.isNaN(sideB) ||
    sideA === 0 ||
    sideB === 0 ||
    !Number.isInteger(sideA) ||
    !Number.isInteger(sideB) ||
    sideA < 0 ||
    sideB < 0
  ) {
    return "Invalid side!";
  }

  const area = sideA * sideB;
  const perimeter = 2 * (sideA + sideB);

  return { area, perimeter };
};
