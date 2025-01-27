discord_client.py

from discord_webhook import DiscordWebhook

class DiscordClient:
    def __init__(self, webhook_url=""):
        self.webhook = DiscordWebhook(url=webhook_url)

    def post(self, message):
        print("Posting to Discord:", message)
        self.webhook.content = message
        response = self.webhook.execute()
        return response
