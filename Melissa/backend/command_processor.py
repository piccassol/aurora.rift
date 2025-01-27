class CommandProcessor:
    def __init__(self):
        self.visibility_status = True  # Default: visible
    
    def process_command(self, command):
        if "toggle visibility" in command:
            self.toggle_visibility()
        elif "turn off" in command:
            print("Turning off listening mode.")
    
    def toggle_visibility(self):
        self.visibility_status = not self.visibility_status
        print(f"Visibility: {'Visible' if self.visibility_status else 'Invisible'}")
