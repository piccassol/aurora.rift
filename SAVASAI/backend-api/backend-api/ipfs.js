const { create } = require("ipfs-http-client");
const fs = require("fs");

const ipfs = create({ host: "ipfs.infura.io", port: 5001, protocol: "https" });

const uploadToIPFS = async (filePath) => {
  try {
    const file = fs.readFileSync(filePath);
    const { cid } = await ipfs.add(file);
    return `https://ipfs.io/ipfs/${cid}`;
  } catch (error) {
    console.error("Error uploading to IPFS:", error);
    throw error;
  }
};

module.exports = { uploadToIPFS };
