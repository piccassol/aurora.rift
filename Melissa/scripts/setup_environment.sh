#!/bin/bash

# Install Solana toolchain
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"

# Install Anchor
cargo install --git https://github.com/coral-xyz/anchor anchor-cli --locked

# Initialize Spacy model
python -m spacy download en_core_web_lg

# Set up IPFS
docker-compose up -d ipfs-node
