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
