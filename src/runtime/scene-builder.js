export function buildScene(THREE, sceneData) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111111);

  const ambient = new THREE.AmbientLight(sceneData.ambientLight, 1.2);
  scene.add(ambient);

  const directional = new THREE.DirectionalLight(sceneData.sunLight, 1.5);
  directional.position.set(8, 12, 6);
  scene.add(directional);

  const grid = new THREE.GridHelper(20, 20, 0x444444, 0x222222);
  scene.add(grid);

  const meshes = new Map();
  sceneData.entities.forEach((entity) => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: entity.color });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(entity.position.x, entity.position.y, entity.position.z);
    mesh.userData.entityId = entity.id;
    scene.add(mesh);
    meshes.set(entity.id, mesh);
  });

  return { scene, meshes };
}
