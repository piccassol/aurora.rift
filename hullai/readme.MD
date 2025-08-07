Video NFT Agent (HULLAI)
HULLAI is an advanced Video NFT platform powered by Aurorarift, an AI agent that generates videos, integrates them into NFTs, and distributes them across blockchain networks and social platforms. This repository contains all the components required to create, mint, and share Video NFTs with ease.

Table of Contents
Features
Architecture Overview
Getting Started
Prerequisites
Installation
Project Components
1. AI Video Generation
2. Solana Smart Contract
3. Blockchain Interaction
4. Social Media Distribution
Execution Workflow
Development Timeline
Contributing
License
Features
AI-driven video generation from text prompts.
NFT minting on Solana with IPFS metadata storage.
Multi-chain blockchain interaction support.
Automated social media distribution to platforms like Twitter and Instagram.
Fully decentralized, secure, and scalable architecture.
Architecture Overview
flowchart TD
    A[AI Video Generation] -->|Generates IPFS Hash| B[Solana Smart Contract]
    B -->|Mint NFT| C[Blockchain Interaction]
    C -->|Register NFT Metadata| D[Solana Blockchain]
    B -->|Stores IPFS Hash| D
    D -->|Retrieve NFT Info| E[Social Media Distribution]
    E -->|Distributes Cont