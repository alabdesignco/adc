import vertexSrc from './shaders/vertex.glsl?raw';
import fragmentSrc from './shaders/fragment.glsl?raw';

export const initDitherBackground = () => {
  const THREE = window.THREE;
  if (!THREE) {
    console.error('THREE.js is not loaded');
    return;
  }
  const bg = document.getElementById('dither-bg');
  if (!bg) return;

  const shapeAttr = bg.getAttribute('data-shape') ?? 'square';
  const pixelSizeAttr = bg.getAttribute('data-pixel-size') ?? '4';
  const inkAttr = bg.getAttribute('data-ink') ?? '#FFFFFF';

  const SHAPE_MAP = {
    square: 0,
    circle: 1,
    triangle: 2,
    diamond: 3,
  };

  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2');
  if (!gl) return;

  const renderer = new THREE.WebGLRenderer({ canvas, context: gl, antialias: true });
  bg.appendChild(canvas);

  const uniforms = {
    uResolution: { value: new THREE.Vector2() },
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(inkAttr) },
    uShapeType: { value: SHAPE_MAP[shapeAttr] ?? 0 },
    uPixelSize: { value: parseFloat(pixelSizeAttr) || 4 },
  };

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const material = new THREE.ShaderMaterial({
    vertexShader: vertexSrc,
    fragmentShader: fragmentSrc,
    uniforms,
    glslVersion: THREE.GLSL3,
    transparent: true,
  });
  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

  const resize = () => {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    uniforms.uResolution.value.set(w, h);
  };

  window.addEventListener('resize', resize);
  resize();

  const clock = new THREE.Clock();
  const animate = () => {
    uniforms.uTime.value = clock.getElapsedTime();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  animate();
};

