export function createEditorActions({ state, refreshScene, rerenderPanel, saveProject, loadProject }) {
  return {
    addCube() {
      const nextId = Math.max(0, ...state.scene.entities.map((entity) => entity.id)) + 1;
      const entity = {
        id: nextId,
        name: `Cube ${state.scene.entities.length + 1}`,
        type: 'cube',
        position: { x: state.scene.entities.length * 1.5 - 1.5, y: 0.5, z: 2 },
        color: state.scene.entities.length % 2 === 0 ? 0x8bd3dd : 0xf4a261,
      };

      state.scene.entities.push(entity);
      state.scene.selectedEntityId = entity.id;
      refreshScene();
      rerenderPanel();
    },
    selectEntity(entityId) {
      state.scene.selectedEntityId = entityId;
      rerenderPanel();
    },
    save() {
      saveProject(state);
      rerenderPanel();
    },
    load() {
      const loaded = loadProject();
      state.project = loaded.project;
      state.scene = loaded.scene;
      state.runtime = loaded.runtime;
      state.history = loaded.history ?? [];
      refreshScene();
      rerenderPanel();
    },
  };
}
