import { filteredTweets } from "./utils/filteredTweets";
import { transformHashtags } from "./utils/transformHashtags";
import { transformTitle } from "./utils/transformTitle";
import { calculateLikes } from "./utils/calculateLikes";

const fakeTwitterData = (data) => {
  const transformedTweetsWithHashtags = transformHashtags(
    filteredTweets(data.tweets)
  );

  const transformedTweetsWithTitle = transformTitle(
    transformedTweetsWithHashtags
  );

  const sortedTweets = transformedTweetsWithTitle.sort((a, b) => {
    return b.id - a.id;
  });

  const likes = calculateLikes(sortedTweets);

  return {
    tweets: sortedTweets,
    likes: likes,
  };
};

export default fakeTwitterData;
