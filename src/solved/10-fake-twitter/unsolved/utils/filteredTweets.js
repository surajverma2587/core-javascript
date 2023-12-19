const RESTRICTED_HASHTAGS = ["audi", "bmw", "honda"];

export const filteredTweets = (tweets) => {
  const filteredTweets = tweets.filter((tweet) => {
    const hashtags = tweet.hashtags;

    let isPresent = true;

    hashtags.forEach((hashtag) => {
      if (RESTRICTED_HASHTAGS.includes(hashtag)) {
        isPresent = false;
      }
    });

    return isPresent;
  });

  return filteredTweets;
};
