# Development Phases

## Phase 0: Control Plane

Goal:
- Define the docs, rules, and architecture that keep the project stable.

Exit criteria:
- Read order is clear.
- Non-goals are written down.
- ADR workflow exists.

## Phase 1: Data Plane

Goal:
- Define the schemas and validation rules for project content.

Exit criteria:
- Project, scene, entity, template, and asset data can be represented without guessing.

## Phase 2: Engine Core

Goal:
- Build the minimum runtime needed to boot and render a simple scene.

Exit criteria:
- The app can initialize cleanly.
- Runtime stays separate from editor concerns.

## Phase 3: Editor Core

Goal:
- Build the minimum browser editor for authoring a scene.

Exit criteria:
- A user can create, place, edit, undo, redo, save, and load content.

## Phase 4: Template and Rule System

Goal:
- Add reusable content composition and data-driven gameplay behavior.

Exit criteria:
- Templates and rules can drive gameplay without hardcoded special cases.

## Phase 5: Asset Pipeline

Goal:
- Validate and optimize assets before they enter the project.

Exit criteria:
- Invalid assets are rejected.
- Valid assets are accepted and normalized.

## Phase 6: Playable Slice

Goal:
- Ship one complete small game loop end to end.

Exit criteria:
- The project is playable from start to finish.

## Phase 7: Build and Export

Goal:
- Package the project into a usable build.

Exit criteria:
- The game can be exported and verified outside the editor.

## Phase 8: AI Operations

Goal:
- Add scripts and checks that keep AI work scoped and synchronized.

Exit criteria:
- Tasks are small, validated, and easy for any AI to pick up.
