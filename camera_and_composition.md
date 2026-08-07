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
