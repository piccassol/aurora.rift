import tweepy

# Add the necessary functionality here
def post_tweet(api, message):
    api.update_status(status=message)

# Example usage
if __name__ == "__main__":
    # Authenticate to Twitter
    auth = tweepy.OAuthHandler("CONSUMER_KEY", "CONSUMER_SECRET")
    auth.set_access_token("ACCESS_TOKEN", "ACCESS_TOKEN_SECRET")

    # Create API object
    api = tweepy.API(auth)

    # Post a tweet
    post_tTweet(api, "Hello, Twitter!")
