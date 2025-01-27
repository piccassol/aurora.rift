from pvporcupine import create
from speech_recognition import Recognizer, Microphone

class MelissaListener:
    def __init__(self, wakeword_path):
        self.wakeword_engine = create(access_key="YOUR_ACCESS_KEY", keyword_paths=[wakeword_path])
        self.recognizer = Recognizer()

    def listen(self):
        with Microphone() as source:
            print("Listening for wakeword...")
            audio = self.recognizer.listen(source)

            if self.wakeword_engine.process(audio.frame_data):
                print("Wakeword detected!")
                self.process_command()

    def process_command(self):
        with Microphone() as source:
            print("Listening for command...")
            audio = self.recognizer.listen(source)
            try:
                command = self.recognizer.recognize_google(audio)
                print(f"Command: {command}")
                self.execute_command(command)
            except Exception as e:
                print(f"Error: {e}")

    def execute_command(self, command):
        if "toggle visibility" in command:
            print("Toggling visibility in AR/VR.")
        elif "turn off" in command:
            print("Shutting down listening mode.")
