const Twitter = require('twitter');
const client = new Twitter({
  consumer_key: 'your-consumer-key',
  consumer_secret: 'your-consumer-secret',
  access_token_key: 'your-access-token-key',
  access_token_secret: 'your-access-token-secret'
});

function postToTwitter(message) {
    client.post('statuses/update', { status: message },  function(error, tweet, response) {
        if (!error) {
            console.log('Tweet posted: ' + tweet.text);
        } else {
            console.log('Error posting tweet: ' + error);
        }
    });
}

const nftAnnouncement = "🚀 New NFT Drop from AuroraRift! Get your limited edition music NFT today on Solana!";
postToTwitter(nftAnnouncement)
