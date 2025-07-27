import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2); // Smaller for UI
document.getElementById('avatar-container').appendChild(renderer.domElement);

const loader = new GLTFLoader();
loader.load('/Melissa/avatar/melissa.gltf', (gltf) => {
    scene.add(gltf.scene);
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Toggle via frontend UI
window.toggleAvatar = () => gltf.scene.visible = !gltf.scene.visible;
