# MASTER GAME IDEA GENERATOR KNOWLEDGE BASE

## Purpose

This file is the compact reference for the game concept and its supporting constraints.

## Core Direction

Build a stylized low-poly game with systems that are cheap to author, easy to iterate, and readable to an AI coding agent.

## Visual Strategy

### Code-Driven Visuals

- Use shader-driven styling for the final look.
- Prefer procedural geometry and simple modular assets.
- Use palette control and texture indexing to expand variety without heavy art overhead.

### Camera Strategy

- Use a locked or constrained camera model.
- Choose orthographic when grid precision matters.
- Choose perspective with a locked focal length when speed and depth matter.
- Use focused framing rules to keep the scene readable.

### Retro Constraints

- Keep textures small and consistent.
- Prefer nearest-neighbor style filtering when it supports the style.
- Use rendering constraints intentionally, not as a vague aesthetic accident.

## Systems Strategy

### Gameplay Mutation

- Use bitmask traits for fast interaction rules.
- Use state-machine style behavior for temporary modifiers.
- Use cellular automata or similar grid logic only when it clearly improves gameplay.

### Audio Strategy

- Use layered stems for adaptive music.
- Keep audio channels limited and purposeful.
- Sync feedback to gameplay only when the effect is readable and useful.

## Architecture Strategy

### Input and Memory Constraints

- Design around small, understandable control sets.
- Break large spaces into chunks when it helps streaming or pacing.
- Keep system boundaries obvious so the project stays maintainable.

### Content Validation

- Define validation rules for low-poly assets.
- Reject assets or templates that violate the project’s style constraints.
- Make validation part of the pipeline, not an afterthought.

## Market Strategy

Treat market claims as hypotheses until they are validated.

### Validation Questions

1. Who is the exact target player?
2. What known frustration does this game remove or transform?
3. What makes the game easy to understand from a clip or screenshot?
4. What is the smallest playable loop that proves the idea?

### Positioning Rules

- Favor a narrow audience with strong interest.
- Favor one sharp hook over many weak ones.
- Favor a small, shippable scope over broad ambition.

## Project Rule

Any future expansion of this knowledge base should preserve the same principle:
make the game easier to build, easier to test, and easier for an AI agent to maintain.
