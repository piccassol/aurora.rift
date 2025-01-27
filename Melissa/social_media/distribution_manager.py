from social_media.platforms.twitter_client import TwitterClient
from social_media.platforms.discord_client import DiscordClient

class DistributionManager:
    def __init__(self):
        self.twitter = TwitterClient()
        self.discord = DiscordClient()

    def distribute(self, message):
        self.twitter.post(message)
        self.discord.post(message)
