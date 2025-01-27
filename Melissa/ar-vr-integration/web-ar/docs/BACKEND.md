# Backend Documentation

The backend of the Melissa project handles the core functionality: always listening for the wakeword, processing voice commands, and controlling visibility in AR/VR environments.

## Components

### Wakeword Detection
- **Porcupine**: A lightweight wakeword detection engine used to detect the keyword "Melissa."
- **Speech Recognition**: Google’s Speech-to-Text API is used to convert speech to text.

### Flask API
The Flask app provides an API to interact with the frontend, allowing the toggle of visibility:
- **POST /toggle-visibility**: Sends a signal to toggle Melissa’s visibility in the AR/VR environment.

## Running the Backend
1. Ensure all dependencies are installed:
    ```bash
    pip install -r requirements.txt
    ```

2. Run the Flask app:
    ```bash
    python app.py
    ```

3. The backend will be accessible at `http://localhost:5000`. The `/toggle-visibility` route is available to send visibility toggle requests.

## Wakeword Detection
To change the wakeword detection model, place a `.ppn` model file (such as `melissa.ppn`) in the `backend/wakeword/` directory. You will need to adjust the access key and model file in the code if necessary.
