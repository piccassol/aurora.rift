# Setup Instructions

Follow these steps to set up the Melissa AR/VR project:

## Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/melissa-vr-ar.git
    cd melissa-vr-ar
    ```

2. Install the required dependencies for the backend:
    ```bash
    pip install -r backend/requirements.txt
    ```

3. Set up the wakeword detection model:
    - Download the Porcupine model file (`melissa.ppn`) and place it in `backend/wakeword/`.

4. Run the backend API:
    ```bash
    cd backend
    python app.py
    ```

5. The backend is now running and listening for commands. You can make API requests or listen for the wakeword.

## AR/VR Setup

### Unity Setup
1. Open the Unity project (`ar-vr-integration/unity/`).
2. Import **MelissaVisibilityController.cs** script and assign it to the desired GameObject (e.g., camera or UI controller).
3. Assign the 3D avatar (e.g., `melissaAvatar.prefab`) to the `melissaAvatar` field in the Unity Inspector.
4. Use the "V" key to toggle the visibility of Melissa in Unity.

### Web AR Setup
1. Open the `web-ar/index.html` in any modern web browser.
2. Ensure that the 3D model file (`melissa-avatar.glb`) is correctly placed in the directory.
3. Use the **"Toggle Visibility"** button to control the avatar’s visibility.

## Docker (Optional)
To run the backend with Docker, you can use the following steps:
1. Build the Docker image:
    ```bash
    docker build -t melissa-backend .
    ```

2. Run the Docker container:
    ```bash
    docker run -p 5000:5000 melissa-back
