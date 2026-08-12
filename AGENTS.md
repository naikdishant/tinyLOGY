# AI Development Rules

## Product
This project is a browser-based, AI-assisted low-poly game creation platform.

## Non-Negotiable Rules

1. Keep the platform web-first.
2. Keep content data-driven.
3. Templates may compose systems, but they must not duplicate them.
4. Do not introduce new dependencies without documenting why they exist.
5. Do not bypass the component and template architecture.
6. Beginner workflows must work without scripting.
7. Advanced workflows may expose scripting as an escape hatch.
8. Editor actions must support undo and redo.
9. Assets must pass validation before they can be used in a project.
10. Any architectural change requires an ADR.

## Before Coding

Read, in this order:

1. `docs/00_PROJECT_VISION.md`
2. `docs/02_DESIGN_PILLARS.md`
3. `docs/04_SYSTEM_ARCHITECTURE.md`
4. `docs/planning/PHASES.md`
5. `docs/planning/CURRENT_SPRINT.md`
6. The subsystem document being changed
7. Relevant ADRs

## After Coding

Update, when applicable:

1. tests
2. subsystem documentation
3. `docs/planning/CHANGELOG.md`
4. `docs/planning/CURRENT_SPRINT.md`

## Working Style

1. Make the smallest useful change.
2. Keep modules isolated.
3. Prefer clear contracts over clever coupling.
4. Stop and document when a change affects architecture.
