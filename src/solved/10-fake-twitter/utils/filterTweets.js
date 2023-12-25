const RESTRICTED_HASHTAGS = ["audi", "bmw", "honda"];

export const filterTweets = (tweets) => {
  const filteredTweets = tweets.filter((tweet) => {
    const hashtags = tweet.hashtags;

    return hashtags.every((hashtag) => !RESTRICTED_HASHTAGS.includes(hashtag));
  });

  return filteredTweets;
};
