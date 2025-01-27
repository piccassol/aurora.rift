## Video NFT Agent (HULLAI)

HULLAI is an advanced Video NFT platform powered by Aurorarift, an AI agent that generates videos, integrates them into NFTs, and distributes them across blockchain networks and social platforms. This repository contains all the components required to create, mint, and share Video NFTs with ease.

---

## **Table of Contents**
- [Features](#features)
- [Architecture Overview](#architecture-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Components](#project-components)
  - [1. AI Video Generation](#1-ai-video-generation)
  - [2. Solana Smart Contract](#2-solana-smart-contract)
  - [3. Blockchain Interaction](#3-blockchain-interaction)
  - [4. Social Media Distribution](#4-social-media-distribution)
- [Execution Workflow](#execution-workflow)
- [Development Timeline](#development-timeline)
- [Contributing](#contributing)
- [License](#license)

---

## **Features**
- AI-driven video generation from text prompts.
- NFT minting on Solana with IPFS metadata storage.
- Multi-chain blockchain interaction support.
- Automated social media distribution to platforms like Twitter and Instagram.
- Fully decentralized, secure, and scalable architecture.

---

## **Architecture Overview**
```mermaid
flowchart TD
    A[AI Video Generation] -->|Generates IPFS Hash| B[Solana Smart Contract]
    B -->|Mint NFT| C[Blockchain Interaction]
    C -->|Register NFT Metadata| D[Solana Blockchain]
    B -->|Stores IPFS Hash| D
    D -->|Retrieve NFT Info| E[Social Media Distribution]
    E -->|Distributes Content| F[Twitter/Instagram/YouTube]
