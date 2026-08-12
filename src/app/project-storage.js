import { createDefaultProject, normalizeProject } from './project-schema.js';

const STORAGE_KEY = 'tiny-convoy-project-v1';

export function saveProject(project) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(project));
}

export function loadProject() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return createDefaultProject();
  }

  try {
    return normalizeProject(JSON.parse(raw));
  } catch {
    return createDefaultProject();
  }
}

export function resetProject() {
  const project = createDefaultProject();
  saveProject(project);
  return project;
}
