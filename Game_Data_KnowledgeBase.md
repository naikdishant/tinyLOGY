### === MODULE 4: GAME MUTATIONS & PROCEDURAL LOGIC ===

**Purpose:** Rules for generating emergent gameplay and systemic depth without relying on bespoke content.

* **Bitwise Trait Systems:** Use bitmasking (`0b0001` = Flammable, `0b0010` = Conductive) to dynamically calculate entity interactions at runtime with zero processing overhead.
* **State Machine Injection:** Allow modifiers (spells, weather, mutations) to inject temporary transition nodes into an entity's existing Finite State Machine.
* **Cellular Automata:** Implement grid-based evolution algorithms (e.g., Conway's Game of Life) to calculate organic map generation, fluid flow, or corruption spread over time.

### === MODULE 5: RETRO RENDER CONSTRAINTS (PSP/PSX) ===

**Purpose:** Strict visual rules the generator must apply to maintain authentic retro aesthetics and low asset overhead.

* **Affine Texture Mapping (Vertex Snapping):** Force the vertex shader to round coordinates to the nearest screen-space integer. This creates the signature hardware "wobble."
* **Resolution & Filtering:** Cap all texture maps at 256x256 pixels. Disable mipmapping and bilinear filtering. Force `Point` (Nearest Neighbor) filtering for crisp pixel edges.
* **Color Depth Emulation:** Clamp output colors in the fragment shader to a 16-bit or 24-bit palette to simulate hardware color banding.

### === MODULE 6: INPUT & ARCHITECTURE LIMITATIONS ===

**Purpose:** Forcing the generator to design mechanics around constrained hardware, mimicking classic handheld design.

* **Single-Stick Geometry:** If designing for a PSP layout, the generator must automate camera follow-logic or map rotation to shoulder buttons (L/R), dedicating face buttons to rigid state actions.
* **Memory Chunking:** The generator must design maps in segregated "chunks" or zones connected by strict choke points (doors, elevators) to emulate low-RAM loading boundaries.
* **Audio Channel Caps:** Limit active sound channels. Force the game design to prioritize critical mechanical audio cues over ambient noise.
