const { load_art_generator, generate_artwork } = require("../ai-art-generator/art_generator");

const generateArtwork = async (prompt) => {
  const art_generator = load_art_generator();
  if (!art_generator) {
    throw new Error("Failed to load art generator");
  }

  const artwork = generate_artwork(prompt, art_generator);
  if (!artwork) {
    throw new Error("Failed to generate artwork");
  }

  // Save artwork to a file and return the file path
  const filePath = `generated_artwork_${Date.now()}.png`;
  artwork.save(filePath);
  return filePath;
};

module.exports = { generateArtwork };
