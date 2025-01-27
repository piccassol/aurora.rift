# Unity Integration for Melissa

This directory contains the Unity-specific setup for integrating Melissa into a VR/AR environment.

## Steps to Set Up
1. Open the Unity project.
2. Import the **MelissaVisibilityController.cs** script into your scene.
3. Assign your 3D avatar (Melissa) to the `melissaAvatar` field.
4. Run the scene and use the "V" key to toggle visibility.

## Dependencies
- Unity 2020.x or newer
- A 3D model of Melissa (e.g., `melissaAvatar.prefab`)

## Additional Notes
- Ensure the script is attached to a game object that can handle updates in the scene.
