// src/engine/shaders.js
// Token-optimized PSX vertex snap shader
export const PSXShaders = {
    vertex: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            // Vertex snapping (affine mapping wobble effect)
            gl_Position.xyz = floor(gl_Position.xyz * 160.0) / 160.0;
        }
    `,
    fragment: `
        uniform sampler2D tDiffuse;
        varying vec2 vUv;
        void main() {
            vec4 texColor = texture2D(tDiffuse, vUv);
            // Simulate 16-bit color banding
            texColor.rgb = floor(texColor.rgb * 16.0) / 16.0;
            gl_FragColor = texColor;
        }
    `
};
