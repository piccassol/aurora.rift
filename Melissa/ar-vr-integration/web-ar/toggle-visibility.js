const toggleBtn = document.getElementById('toggle-btn');
const modelViewer = document.querySelector('model-viewer');

toggleBtn.addEventListener('click', () => {
    const isVisible = modelViewer.style.display !== 'none';
    modelViewer.style.display = isVisible ? 'none' : 'block';
