const shadertoy = {
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight
  },
  vert: `
    precision highp float;
    attribute vec2 position;
    void main() {
      gl_Position = vec4(position, 0, 1);
    }`,
  attributes: {
    position: [-1, -1, -1, 1, 1, 1, 1, -1]
  },
  depth: {
    enable: false
  },
  count: 6,
  // offset: 2,
  elements: [0, 1, 2, 3, 2, 0]
}
