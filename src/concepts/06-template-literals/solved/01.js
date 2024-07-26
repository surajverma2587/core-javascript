export const greeting = (timeOfDay, user) => {
  if (timeOfDay === "morning") {
    return `Good morning, ${user.firstName} ${user.lastName}!!`;
  }

  if (timeOfDay === "afternoon") {
    return `Good afternoon, ${user.firstName} ${user.lastName}!!`;
  }

  if (timeOfDay === "evening") {
    return `Good evening, ${user.firstName} ${user.lastName}!!`;
  }

  if (timeOfDay === "night") {
    return `Goodnight, ${user.firstName} ${user.lastName}!!`;
  }
};
