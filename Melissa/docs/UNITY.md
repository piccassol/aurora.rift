# Unity Integration Documentation

This section covers the integration of Melissa’s visibility toggle in Unity environments.

## Steps to Integrate:
1. Open the Unity project located in `ar-vr-integration/unity/`.
2. Add the **MelissaVisibilityController.cs** script to a GameObject in the scene (e.g., the camera or a UI controller).
3. Drag the 3D model of Melissa (`melissaAvatar.prefab`) into the `melissaAvatar` field in the Unity Inspector window.

## Functionality:
- The visibility toggle is implemented by pressing the "V" key in Unity.
- The `MelissaVisibilityController` script listens for the keypress and toggles the visibility of the avatar based on the current state.
  
### Example Code (C#)
```csharp
void Update() {
    // Example: Toggle visibility on "V" key press
    if (Input.GetKeyDown(KeyCode.V)) {
        ToggleVisibility();
    }
}
