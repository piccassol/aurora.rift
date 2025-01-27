const express = require("express");
const { generateArtwork } = require("./artGenerator");
const { mintNFT } = require("./solanaClient");

const app = express();
app.use(express.json());

// Generate artwork endpoint
app.post("/api/generate-art", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const artworkUrl = await generateArtwork(prompt);
    res.json({ artworkUrl });
  } catch (error) {
    console.error("Error generating artwork:", error);
    res.status(500).json({ error: "Failed to generate artwork" });
  }
});

// Mint NFT endpoint
app.post("/api/mint-nft", async (req, res) => {
  const { artworkUrl, publicKey } = req.body;
  if (!artworkUrl || !publicKey) {
    return res.status(400).json({ error: "Artwork URL and public key are required" });
  }

  try {
    const txSignature = await mintNFT(artworkUrl, publicKey);
    res.json({ txSignature });
  } catch (error) {
    console.error("Error minting NFT:", error);
    res.status(500).json({ error: "Failed to mint NFT" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
