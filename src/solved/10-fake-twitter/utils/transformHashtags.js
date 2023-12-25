export const transformHashtags = (tweets) => {
  const transformedArray = tweets.map((tweet) => {
    const hashtags = tweet.hashtags;

    const transformedHashtags = hashtags
      .map((hashtag) => `#${hashtag}`)
      .join(" ");

    tweet.hashtags = transformedHashtags;

    return tweet;
  });

  return transformedArray;
};
