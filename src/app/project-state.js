export function createProjectState() {
  return {
    project: {
      name: 'Tiny Convoy',
      version: 1,
    },
    scene: {
      name: 'Starter Scene',
      entities: [],
      selectedEntityId: null,
    },
    runtime: {
      mode: 'editor',
      running: true,
      frame: 0,
      lastTickAt: performance.now(),
    },
    history: [],
  };
}

export function addEntity(state, entity) {
  state.scene.entities.push(entity);
  state.scene.selectedEntityId = entity.id;
}

export function selectEntity(state, entityId) {
  state.scene.selectedEntityId = entityId;
}
