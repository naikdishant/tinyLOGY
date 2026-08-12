const COLOR_FALLBACK = 0x8bd3dd;

export function createDefaultProject() {
  return {
    project: {
      name: 'Tiny Convoy',
      version: 1,
    },
    scene: {
      name: 'Starter Scene',
      ambientLight: 0x666666,
      sunLight: 0xffffff,
      entities: [
        {
          id: 1,
          name: 'Player Marker',
          type: 'cube',
          position: { x: 0, y: 0.5, z: 0 },
          color: 0x8bd3dd,
        },
        {
          id: 2,
          name: 'Goal Marker',
          type: 'cube',
          position: { x: 4, y: 0.5, z: 4 },
          color: 0xf4a261,
        },
      ],
      selectedEntityId: 1,
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

function normalizeEntity(entity, index) {
  const id = Number(entity?.id ?? index + 1);
  const color = Number.isFinite(Number(entity?.color)) ? Number(entity.color) : COLOR_FALLBACK;

  return {
    id,
    name: String(entity?.name ?? `Entity ${id}`),
    type: String(entity?.type ?? 'cube'),
    position: {
      x: Number(entity?.position?.x ?? 0),
      y: Number(entity?.position?.y ?? 0.5),
      z: Number(entity?.position?.z ?? 0),
    },
    color,
  };
}

export function normalizeProject(raw) {
  const fallback = createDefaultProject();
  const entities = Array.isArray(raw?.scene?.entities)
    ? raw.scene.entities.map(normalizeEntity)
    : fallback.scene.entities;

  return {
    project: {
      name: String(raw?.project?.name ?? fallback.project.name),
      version: Number(raw?.project?.version ?? fallback.project.version),
    },
    scene: {
      name: String(raw?.scene?.name ?? fallback.scene.name),
      ambientLight: Number(raw?.scene?.ambientLight ?? fallback.scene.ambientLight),
      sunLight: Number(raw?.scene?.sunLight ?? fallback.scene.sunLight),
      entities,
      selectedEntityId: raw?.scene?.selectedEntityId ?? entities[0]?.id ?? null,
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
