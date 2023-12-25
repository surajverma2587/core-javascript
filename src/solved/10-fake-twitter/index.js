import { filterTweets } from "./utils/filterTweets";
import { transformHashtags } from "./utils/transformHashtags";
import { transformTitle } from "./utils/transformTitle";
import { calculateLikes } from "./utils/calculateLikes";

export const fakeTwitterData = (data) => {
  const filteredTweets = filterTweets(data.tweets);

  const sortedTweets = filteredTweets.sort((a, b) => {
    return b.id - a.id;
  });

  const likes = calculateLikes(sortedTweets);

  const tweetsWithTransformedHashtags = transformHashtags(sortedTweets);

  const tweets = transformTitle(tweetsWithTransformedHashtags);

  return {
    tweets,
    likes,
  };
};
