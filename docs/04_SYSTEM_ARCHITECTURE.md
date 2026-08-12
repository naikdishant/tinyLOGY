# System Architecture

## Main Layers

### Editor

The browser editor lets users create projects, scenes, templates, and assets.

### Runtime

The runtime executes scenes, rules, interactions, input, and rendering.

### Data Model

Projects are stored as structured data with explicit schemas for scenes, entities, components, templates, and assets.

### Asset Pipeline

Assets enter through validation and optimization before they are accepted into a project.

### Build and Export

The build layer packages a playable build or shareable output from project data.

## Core Rules

1. Editor and runtime are separate concerns.
2. Templates can combine systems but cannot rewrite them.
3. The runtime must not depend on editor-only behavior.
4. Schemas are the contract between tools and game content.
5. Validation happens before runtime use.
6. Each subsystem must have a documented boundary and a small public surface.
7. Cross-subsystem changes should be split into the smallest possible steps.

## Boundary Summary

- Editor owns authoring
- Runtime owns execution
- Data owns content
- Build owns packaging
- AI owns assistance, not hidden behavior

## Task Boundary Rule

Any AI task should target one subsystem, one outcome, and one validation check.
