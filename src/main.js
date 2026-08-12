import { EventBus } from './engine/events.js';
import { APP_CONFIG } from './app/config.js';
import { createDefaultProject } from './app/project-schema.js';
import { saveProject, loadProject } from './app/project-storage.js';
import { createEditorPanel } from './editor/panel.js';
import { createEditorActions } from './editor/actions.js';
import { buildScene } from './runtime/scene-builder.js';
import { startAppLoop } from './runtime/app-loop.js';

const events = new EventBus();
const state = createDefaultProject();
state.project.name = APP_CONFIG.projectName;

window.gameEvents = events;
window.gameState = state;

const uiRoot = document.getElementById('shop-container');
const gameRoot = document.getElementById('game-layer');

if (!uiRoot || !gameRoot) {
  throw new Error('Required app roots are missing.');
}

uiRoot.innerHTML = '';
gameRoot.innerHTML = '';

const renderer = new window.THREE.WebGLRenderer({ antialias: false });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(1);
gameRoot.appendChild(renderer.domElement);

const aspect = window.innerWidth / window.innerHeight;
const size = APP_CONFIG.cameraSize;
const camera = new window.THREE.OrthographicCamera(-size * aspect, size * aspect, size, -size, 1, 1000);
camera.position.set(16, 14, 16);
camera.lookAt(0, 0, 0);

let sceneBundle = buildScene(window.THREE, state.scene);

function refreshScene() {
  sceneBundle = buildScene(window.THREE, state.scene);
}

const actions = createEditorActions({
  state,
  refreshScene,
  rerenderPanel: () => panel.render(),
  saveProject,
  loadProject,
});

const panel = createEditorPanel({
  mount: uiRoot,
  state,
  onSpawnEntity: actions.addCube,
  onSelectEntity: (id) => actions.selectEntity(id),
  onSaveProject: actions.save,
  onLoadProject: actions.load,
});

function syncSceneContract() {
  if (!state.scene.selectedEntityId && state.scene.entities.length > 0) {
    state.scene.selectedEntityId = state.scene.entities[0].id;
  }
}

function frame() {
  syncSceneContract();
  panel.render();
  renderer.render(sceneBundle.scene, camera);
}

events.publish('GAME_INIT_STARTED', { time: Date.now() });

panel.render();
startAppLoop({
  state,
  onFrame: frame,
});
