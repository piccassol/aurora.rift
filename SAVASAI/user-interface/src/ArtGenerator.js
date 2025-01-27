import React, { useState } from "react";
import { Connection, PublicKey, Transaction, SystemProgram } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { useWallet } from "@solana/wallet-adapter-react";

const ArtGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [artworkUrl, setArtworkUrl] = useState("");
  const { publicKey, sendTransaction } = useWallet();
  const connection = new Connection(WalletAdapterNetwork.Devnet);

  // Generate artwork using AI
  const generateArtwork = async () => {
    try {
      const response = await fetch("/api/generate-art", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      if (!response.ok) {
        throw new Error("Failed to generate artwork");
      }
      const data = await response.json();
      setArtworkUrl(data.artworkUrl);
    } catch (error) {
      console.error("Error generating artwork:", error);
      alert("Failed to generate artwork. Please try again.");
    }
  };

  // Mint NFT on Solana
  const mintNFT = async () => {
    if (!publicKey) {
      alert("Please connect your wallet.");
      return;
    }

    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey("RecipientPublicKeyHere"), // Replace with actual recipient
          lamports: 1000000, // Replace with actual amount
        })
      );

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, "processed");
      alert("NFT minted successfully!");
    } catch (error) {
      console.error("Error minting NFT:", error);
      alert("Failed to mint NFT. Please try again.");
    }
  };

  return (
    <div>
      <h1>AI Art Generator</h1>
      <input
        type="text"
        placeholder="Enter a prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateArtwork}>Generate Artwork</button>
      {artworkUrl && (
        <div>
          <img src={artworkUrl} alt="Generated Artwork" />
          <button onClick={mintNFT}>Mint NFT</button>
        </div>
      )}
    </div>
  );
};

export default ArtGenerator;
