upload-metadata.js

const { create } = require('ipfs-http-client');

// Connect to IPFS node
const client = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

async function uploadToIPFS(metadata) {
    try {
        const result = await client.add(JSON.stringify(metadata));
        console.log(`Metadata uploaded: https://ipfs.io/ipfs/${result.path}`);
        return result.path; // Returns the CID
    } catch (error) {
        console.error('Error uploading to IPFS:', error);
        throw error;
    }
}

// Example metadata
const metadata = {
    name: "AuroraRift Music NFT",
    description: "Exclusive track from AuroraRift.",
    image: "ipfs://your-image-cid",
    attributes: [{ trait_type: "Genre", value: "Electronic" }]
};

uploadToIPFS(metadata);
