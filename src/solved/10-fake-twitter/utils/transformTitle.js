export const transformTitle = (tweets) => {
  const transformedTweets = tweets.map((tweet) => {
    tweet.title = `Tweet from ${tweet.username}`;

    return tweet;
  });

  return transformedTweets;
};
