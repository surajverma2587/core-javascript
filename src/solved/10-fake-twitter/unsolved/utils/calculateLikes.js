export const calculateLikes = (tweets) => {
  return tweets.reduce((acc, tweet) => {
    return acc + tweet.likes;
  }, 0);
};
