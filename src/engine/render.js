// src/engine/render.js
export function initRenderer(containerId) {
    const container = document.getElementById(containerId);
    if(!container) return null;

    const w = window.innerWidth, h = window.innerHeight;
    const renderer = new window.THREE.WebGLRenderer({ antialias: false });
    renderer.setSize(w, h);
    renderer.setPixelRatio(1); // Force pixelated look
    container.appendChild(renderer.domElement);

    const scene = new window.THREE.Scene();
    scene.background = new window.THREE.Color(0x111111);

    // 3D Orthographic Camera (No depth distortion for grid)
    const aspect = w / h;
    const size = 10;
    const camera = new window.THREE.OrthographicCamera(-size * aspect, size * aspect, size, -size, 1, 1000);
    camera.position.set(20, 20, 20);
    camera.lookAt(0, 0, 0);

    // Grid helper
    const grid = new window.THREE.GridHelper(20, 20, 0x444444, 0x222222);
    scene.add(grid);

    return { renderer, scene, camera };
}
