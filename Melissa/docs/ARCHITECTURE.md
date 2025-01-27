# Melissa Architecture

The system architecture for **Melissa** consists of the following components:

- **Backend (Python)**: Handles wakeword detection, voice recognition, and command processing.
- **AR/VR Integration**: Handles rendering and toggling visibility of Melissa’s 3D avatar.
- **Communication**: WebSockets or API to sync the backend with the AR/VR front-end.

## Key Components
- **Wakeword Detection**: Uses `pvporcupine` for wakeword listening.
- **Speech Recognition**: Uses Google’s Speech-to-Text API for command processing.
- **Unity/AR**: 3D rendering and avatar manipulation in AR/VR environments.
