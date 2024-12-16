// Import the twitter-api-v2 library
require("dotenv").config();
const { TwitterApi } = require("twitter-api-v2");

// Initialize the Twitter API client with your keys and tokens
const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// Function to post a tweet
async function postTweet(message) {
  try {
    await client.v2.tweet(message);
    console.log("Tweet posted successfully!");
  } catch (error) {
    console.error("Error posting tweet:", error);
  }
}

// Post a tweet
postTweet("Hello, Twitter from my Node.js bot!");
