using UnityEngine;

public class MelissaVisibilityController : MonoBehaviour
{
    public GameObject melissaAvatar; // Assign the avatar in Unity Editor
    private bool isVisible = true;

    void Update()
    {
        // Example: Toggle visibility on "V" key press
        if (Input.GetKeyDown(KeyCode.V))
        {
            ToggleVisibility();
        }
    }

    public void ToggleVisibility()
    {
        isVisible = !isVisible;
        melissaAvatar.SetActive(isVisible);
    }
}
