# SAVASAI Agent

This project is a Solana-based AI agent that generates digital artwork, mints NFTs, and interacts with a user interface.

## Project Structure

- `ai-art-generator/`: Python script for generating artwork using Stable Diffusion.
- `solana-smart-contract/`: Rust-based Solana smart contract for NFT minting.
- `user-interface/`: React.js frontend for interacting with the AI agent and Solana blockchain.
- `backend-api/`: Node.js backend API for connecting the AI generator and Solana blockchain.

## Setup Instructions

1. **AI Art Generator**:
   - Navigate to `ai-art-generator/`.
   - Install dependencies: `pip install -r requirements.txt`.
   - Run the script: `python art_generator.py`.

2. **Solana Smart Contract**:
   - Navigate to `solana-smart-contract/`.
   - Build the contract: `cargo build-bpf`.
   - Deploy the contract to Solana devnet.

3. **Backend API**:
   - Navigate to `backend-api/`.
   - Install dependencies: `npm install`.
   - Start the server: `node server.js`.

4. **User Interface**:
   - Navigate to `user-interface/`.
   - Install dependencies: `npm install`.
   - Start the React app: `npm start`.

## Testing

- Test the AI Art Generator by running the Python script.
- Test the Solana Smart Contract by deploying it to devnet and minting NFTs.
- Test the User Interface by interacting with the React app.

## Documentation

- [AI Art Generator Documentation](#)
- [Solana Smart Contract Documentation](#)
- [User Interface Documentation](#)
