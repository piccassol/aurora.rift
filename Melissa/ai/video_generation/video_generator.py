from diffusers import StableDiffusionPipeline

class VideoGenerator:
    def __init__(self, model_path):
        self.pipeline = StableDiffusionPipeline.from_pretrained(model_path)

    def generate_video(self, prompt, num_frames=30):
        print(f"Generating video for prompt: {prompt}")
        frames = [self.pipeline(prompt).images[0] for _ in range(num_frames)]
        return frames
