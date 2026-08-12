let nextEntityId = 1;

export function createStarterScene() {
  return {
    ambientLight: 0x666666,
    sunLight: 0xffffff,
    entities: [
      {
        id: nextEntityId++,
        name: 'Player Marker',
        type: 'cube',
        position: { x: 0, y: 0.5, z: 0 },
        color: 0x8bd3dd,
      },
      {
        id: nextEntityId++,
        name: 'Goal Marker',
        type: 'cube',
        position: { x: 4, y: 0.5, z: 4 },
        color: 0xf4a261,
      },
    ],
  };
}
