# MASTER GAME IDEA GENERATOR KNOWLEDGE BASE

## REVISED ASSET PIPELINE FRAMEWORK (NON-AI)

Pivoting away from AI image generation shifts the focus toward **high-efficiency, code-driven, and procedural visual systems** that keep art production fast, consistent, and scope-friendly.

---

### 1. CODE-DRIVEN & PROCEDURAL VISUALS

* **Shader-Based Aesthetics:** Utilize screen-space post-processing shaders (dithering, posterization, edge detection, pixelation) to create a distinct visual identity using minimal baseline art.
* **Procedural Geometry:** Generate tilemaps, terrain meshes, and grid layouts programmatically at runtime rather than modeling bespoke 3D assets.
* **Palette Swapping & Texture Indexing:** Map simple 3D models or 2D sprites to a single palette texture. Swap color indices via code to create endless asset variations without increasing file size or texture memory.

---

### 2. CAMERA, COMPOSITION & LIGHTING

* **Strict Camera Locking:** Enforce fixed orthographic sizing or constrained Fields of View (FOV) to eliminate visual distortion and reduce the required angle variations for handcrafted assets.
* **Virtual Lens Emulation:** Translate real-world photographic parameters (e.g., 35mm vs. 85mm focal length depth-of-field, sensor dimensions, aperture controls) into virtual camera rigs to establish consistent scene hierarchy and depth.

---

### 3. AUDIO & ADAPTIVE TIMELINE ARCHITECTURE

* **Multi-Track Stem Layering:** Structure audio timelines using separate stem tracks (e.g., sub-bass, lead synth, dynamic percussion) that dynamically filter or unmute based on gameplay intensity.
* **Audio-Driven Systems:** Use Real-Time Audio FFT (Fast Fourier Transform) analysis to sync visual effects, camera shakes, and UI feedback directly to specific frequency bands.

---

## Retro-Handheld & PSX-Style Low-Poly Aesthetic

The retro-handheld, PSP/PSX-style low-poly aesthetic is a highly strategic choice. It shifts the development burden away from expensive 3D asset creation and places it entirely on pure engineering and systemic depth.

### 1. THE ENGINEERING ADVANTAGE

* **Shader-Driven Aesthetics:** Instead of relying on high-poly sculpting, you define the visual identity mathematically. Screen-space post-processing, affine texture mapping (wobble), and vertex grid snapping create the aesthetic purely through custom shaders.
* **Performance Overhead:** Minimal polygons and indexed pixel textures drastically lower GPU load and memory consumption. This allows you to run complex background simulations, modular code, and rigid physics at a flawless, fixed time step.

### 2. DESIGN SCALABILITY (GAME MUTATIONS)

* **Rapid Prototyping:** When your entities are simple low-poly structures wrapped in pixel textures, you can iterate on state machines and collision hulls instantly without waiting for re-rigging.
* **Deep Systems:** The time and budget saved on the art pipeline can be funneled directly into game mutations—procedural logic, emergent mechanics, and modular rule sets that give the core loop massive replayability.

### 3. MARKET POSITIONING

* **Nostalgia vs. Photorealism:** The market is highly receptive to this style as modern low poly serves as a deliberate rejection of hyper-realism. Players are actively turning away from bloated photorealism, favoring the unique atmosphere and mechanical focus that these games offer.
* **Scope Control:** It allows a single architect to build mechanically ambitious, system-heavy projects that actually ship.

---

*Reference: [Top 10 Low Poly PC Games You Need to Play](https://www.youtube.com/watch?v=UNi1mkdN9bo)*

---

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

---

### === MODULE 8: CAMERA & COMPOSITION LOGIC ===

**Purpose:** Rules for defining virtual camera constraints to ensure generated concepts have a distinct, professional visual hierarchy.

* **Real-World Lens Translation:**
* *Wide Angle (18mm - 24mm):* Use for fast-paced action or claustrophobic horror. High distortion at the edges increases the sense of speed and scale. Set virtual FOV to 90°+.
* *Standard (35mm - 50mm):* Use for narrative or exploration. Matches human eye perspective. Set virtual FOV to ~60°.
* *Telephoto (85mm+):* Use for isometric, tactical, or portrait-focused games. Compresses background depth and isolates subjects. Set virtual FOV to 30° or lower.


* **Orthographic vs. Perspective:**
* If a concept relies on strict grid placement (city builders, tactical RPGs), the generator MUST mandate an **Orthographic Camera** to remove depth distortion entirely.
* If a concept relies on speed or spatial depth, mandate a **Perspective Camera** with a locked focal length.


* **The Rule of Thirds Engine Hook:**
* Design UI overlays and crosshairs to rest on the thirds grid.
* Program camera follow-scripts with a "dead zone" that allows the player character to drift off-center, maintaining dynamic framing during movement rather than a rigid center-screen lock.


* **Depth of Field (DoF) & Focus Pulling:**
* Instead of static DoF, map the focal point dynamically to the player's current target (e.g., aiming down sights or locking onto an enemy). Blur the foreground and background to isolate mechanical importance.

---

### === MODULE 10: MARKET DYNAMICS & AUDIENCE VALIDATION ===

**Purpose:** Algorithmic rules for ensuring a generated game idea targets a mathematically viable market gap rather than an oversaturated void.

* **Demand-to-Supply Tag Ratio (Tag Arbitrage):**
  * **Demand metric:** Search volume, average wishlist counts, and active player bases for specific Steam tags.
  * **Supply metric:** The raw number of games released in the last 12 months with those same tags.
  * **Validation Rule:** The generator must pair a High-Demand/High-Supply tag (e.g., "Roguelite") with a High-Demand/Low-Supply secondary tag (e.g., "Typing", "Photography", or "Logistics") to mathematically isolate a market gap.

* **Competitor Friction Analysis (The Review-Scraping Method):**
  * Identify the top 3 market leaders in the generated genre.
  * Analyze their "Mixed" and "Negative" reviews to find the most common mechanical pain points (e.g., "Inventory management is a chore," "Too much backtracking").
  * **Validation Rule:** The new game idea must explicitly automate, eliminate, or gamify that exact friction point as one of its core design pillars.

* **Community & Streamer Architecture (Built-In Virality):**
  * **Spectator Value:** Mechanics must be instantly readable to a viewer watching on a mobile screen without hearing the audio (e.g., large health states, clear color-coded enemies, physics-based failures).
  * **The "Watercooler" Hook:** The game must generate unique, unscripted scenarios that players want to clip and share.
  * **Validation Rule:** Require at least one highly reactive or unpredictable system (e.g., volatile chemistry mechanics, cascading physics destruction) to drive organic community sharing.

* **Niche Targeting (The 1,000 True Fans Minimum):**
  * A concept must appeal fiercely to a hyper-specific, underserved micro-community rather than broadly appealing to everyone.
  * **Validation Rule:** The generator must clearly define the exact subreddit or Discord community that would blindly buy the game on day one (e.g., r/MechanicalKeyboards, r/UrbanPlanning, r/Speedrun).
