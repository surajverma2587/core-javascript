export const getInfoByUvIndex = (uvIndex) => {
  if (uvIndex <= 0 || !Number.isInteger(uvIndex)) {
    console.log("ERROR: UV Index should be a positive integer");
  } else if (uvIndex === 1 || uvIndex === 2) {
    console.log("Low");
  } else if (uvIndex === 3 || uvIndex === 4 || uvIndex === 5) {
    console.log("Moderate");
  } else if (uvIndex === 6 || uvIndex === 7) {
    console.log("High");
  } else if (uvIndex === 8 || uvIndex === 9 || uvIndex === 10) {
    console.log("Very High");
  } else {
    console.log("Extreme");
  }
};

export const countdown = () => {
  let counter = 5;

  while (counter >= 0) {
    if (counter === 0) {
      console.log("GAME OVER");
    } else {
      console.log("Time remaining: " + counter);
    }

    counter--;
  }
};
