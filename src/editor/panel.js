export function createEditorPanel({ mount, state, onSpawnEntity, onSelectEntity, onSaveProject, onLoadProject }) {
  mount.innerHTML = `
    <section class="panel">
      <div class="panel__header">
        <div>
          <p class="eyebrow">Project</p>
          <h1 id="project-title"></h1>
        </div>
        <div class="panel__actions">
          <button id="load-project" type="button">Load</button>
          <button id="save-project" type="button">Save</button>
          <button id="spawn-cube" type="button">Add Cube</button>
        </div>
      </div>
      <div class="panel__section">
        <h2>Scene</h2>
        <p id="scene-name"></p>
        <div id="entity-list" class="entity-list"></div>
      </div>
      <div class="panel__section">
        <h2>Runtime</h2>
        <p id="runtime-status"></p>
        <p id="runtime-frame"></p>
      </div>
    </section>
  `;

  const projectTitle = mount.querySelector('#project-title');
  const sceneName = mount.querySelector('#scene-name');
  const entityList = mount.querySelector('#entity-list');
  const runtimeStatus = mount.querySelector('#runtime-status');
  const runtimeFrame = mount.querySelector('#runtime-frame');

  mount.querySelector('#spawn-cube').addEventListener('click', onSpawnEntity);
  mount.querySelector('#save-project').addEventListener('click', onSaveProject);
  mount.querySelector('#load-project').addEventListener('click', onLoadProject);

  function render() {
    projectTitle.textContent = state.project.name;
    sceneName.textContent = `Scene: ${state.scene.name}`;
    runtimeStatus.textContent = `Mode: ${state.runtime.mode}`;
    runtimeFrame.textContent = `Frame: ${state.runtime.frame}`;
    entityList.innerHTML = state.scene.entities
      .map((entity) => `
        <button class="entity-list__item ${entity.id === state.scene.selectedEntityId ? 'is-selected' : ''}" data-id="${entity.id}">
          <strong>${entity.name}</strong>
          <span>${entity.type}</span>
        </button>
      `)
      .join('');

    entityList.querySelectorAll('[data-id]').forEach((button) => {
      button.addEventListener('click', () => onSelectEntity(Number(button.dataset.id)));
    });
  }

  return { render };
}
