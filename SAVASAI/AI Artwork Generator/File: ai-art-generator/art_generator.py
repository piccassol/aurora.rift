import torch
from diffusers import StableDiffusionPipeline
from PIL import Image

# Load pre-trained Stable Diffusion model
def load_art_generator(model_name="stabilityai/stable-diffusion-2-1"):
    """
    Loads a pre-trained generative model for artwork creation.
    """
    try:
        device = "cuda" if torch.cuda.is_available() else "cpu"
        pipe = StableDiffusionPipeline.from_pretrained(model_name, torch_dtype=torch.float16 if device == "cuda" else torch.float32)
        pipe = pipe.to(device)
        return pipe
    except Exception as e:
        print(f"Error loading model: {e}")
        return None

# Generate artwork based on user input
def generate_artwork(prompt, pipe):
    """
    Generates digital artwork using the provided prompt and model.
    """
    try:
        if torch.cuda.is_available():
            with torch.autocast("cuda"):
                image = pipe(prompt).images[0]
        else:
            image = pipe(prompt).images[0]
        return image
    except Exception as e:
        print(f"Error generating artwork: {e}")
        return None

# Example usage
if __name__ == "__main__":
    # Load the model
    art_generator = load_art_generator()
    if art_generator is None:
        exit(1)

    # Generate artwork
    prompt = "A futuristic cityscape with neon lights"
    artwork = generate_artwork(prompt, art_generator)
    if artwork is None:
        exit(1)

    # Save the artwork
    try:
        artwork.save("generated_artwork.png")
        print("Artwork generated and saved as 'generated_artwork.png'.")
    except Exception as e:
        print(f"Error saving artwork: {e}")
