

from diffusers import StableDiffusionPipeline

class ImageGenerator:
    def __init__(self, model_path):
        self.pipeline = StableDiffusionPipeline.from_pretrained(model_path)

    def generate_image(self, prompt):
        print(f"Generating image for prompt: {prompt}")
        return self.pipeline(prompt).images[0]
