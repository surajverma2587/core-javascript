export const transformTitle = (tweets) => {
  const transformedTweets = tweets.map((tweet) => {
    const username = tweet.username;

    const title = `Tweet from ${username}`;

    tweet.title = title;

    return tweet;
  });

  return transformedTweets;
};
