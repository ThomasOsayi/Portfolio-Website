'use client';

import { useEffect, useRef } from 'react';
import Icon from '@/components/Icon';

// A slowly turning glass cube that refracts colored light behind it. three.js loads only when the
// contact section is near the viewport, and the loop stops whenever the cube is off screen.
export default function GlassCube({ href }: { href: string }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const stage = stageRef.current!, link = linkRef.current!;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let disposed = false;
    let cleanup = () => {};

    const boot = async () => {
      const THREE = await import('three');
      const { RoundedBoxGeometry } = await import('three/examples/jsm/geometries/RoundedBoxGeometry.js');
      const { RoomEnvironment } = await import('three/examples/jsm/environments/RoomEnvironment.js');
      if (disposed) return;

      let renderer: import('three').WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      } catch {
        link.classList.add('no-gl');
        return;
      }
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      stage.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      scene.environmentIntensity = 0.6;

      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
      camera.position.set(0, 0, 6.2);

      // a small painted backdrop (page color plus drifting colored light) that the glass refracts;
      // it matches the section background, so the canvas edge is invisible
      const bgCanvas = document.createElement('canvas'); bgCanvas.width = bgCanvas.height = 256;
      const bg = bgCanvas.getContext('2d')!;
      const bgTex = new THREE.CanvasTexture(bgCanvas);
      bgTex.colorSpace = THREE.SRGBColorSpace;
      scene.background = bgTex;
      const LIGHTS: [string, number, number][] = [['75,85,255', 0.95, 0.9], ['255,95,162', 0.8, 0.8], ['61,220,132', 0.55, 0.7], ['233,230,223', 0.9, 0.35]];
      const paint = (t: number) => {
        bg.globalCompositeOperation = 'source-over';
        bg.fillStyle = '#0b0b0c'; bg.fillRect(0, 0, 256, 256);
        bg.globalCompositeOperation = 'lighter';
        LIGHTS.forEach(([rgb, alpha, r], i) => {
          const a = t * (0.35 + i * 0.08) + i * 1.7;
          const x = 128 + Math.cos(a) * 58 * r, y = 128 + Math.sin(a * 1.3) * 50 * r, rad = i === 3 ? 34 : 70;
          const g = bg.createRadialGradient(x, y, 0, x, y, rad);
          g.addColorStop(0, `rgba(${rgb},${alpha})`); g.addColorStop(1, `rgba(${rgb},0)`);
          bg.fillStyle = g; bg.fillRect(x - rad, y - rad, rad * 2, rad * 2);
        });
        // fade the edges back to the page color
        bg.globalCompositeOperation = 'source-over';
        const v = bg.createRadialGradient(128, 128, 70, 128, 128, 128);
        v.addColorStop(0, 'rgba(11,11,12,0)'); v.addColorStop(1, 'rgba(11,11,12,1)');
        bg.fillStyle = v; bg.fillRect(0, 0, 256, 256);
        bgTex.needsUpdate = true;
      };

      const uniforms = { uTime: { value: 0 } };
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0,
        roughness: 0.06,
        transmission: 1,
        thickness: 0.9,
        ior: 1.45,
        dispersion: 4,
        iridescence: 0.35,
        iridescenceIOR: 1.3,
        clearcoat: 1,
        clearcoatRoughness: 0.04,
        attenuationColor: new THREE.Color(0xdfe3ff),
        attenuationDistance: 3,
        envMapIntensity: 0.7,
      });
      // a gentle surface ripple makes the glass read as liquid rather than solid
      mat.onBeforeCompile = (shader) => {
        shader.uniforms.uTime = uniforms.uTime;
        shader.vertexShader = 'uniform float uTime;\n' + shader.vertexShader.replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
           float w = sin(position.y * 3.2 + uTime * 1.6) * 0.035 + sin(position.x * 2.6 - uTime * 1.2) * 0.03;
           transformed += normal * w;`,
        );
      };
      const cube = new THREE.Mesh(new RoundedBoxGeometry(1.55, 1.55, 1.55, 10, 0.26), mat);
      cube.rotation.set(0.5, 0.6, 0);
      scene.add(cube);

      const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(3, 4, 5); scene.add(key);
      const rim = new THREE.DirectionalLight(0x8f96ff, 1.6); rim.position.set(-4, -2, -3); scene.add(rim);

      const resize = () => {
        const s = stage.clientWidth;
        renderer.setSize(s, s, false);
        camera.aspect = 1; camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize); ro.observe(stage);

      // pointer tilt and hover swell
      let tx = 0, ty = 0, hover = 0, hoverT = 0;
      const onMove = (e: PointerEvent) => {
        const r = stage.getBoundingClientRect();
        tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
        ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      };
      const onEnter = () => (hoverT = 1);
      const onLeave = () => { hoverT = 0; tx = 0; ty = 0; };
      link.addEventListener('pointermove', onMove);
      link.addEventListener('pointerenter', onEnter);
      link.addEventListener('pointerleave', onLeave);

      let visible = false, raf = 0, last = performance.now(), t = 0;
      const frame = (now: number) => {
        const dt = Math.min(0.05, (now - last) / 1000); last = now;
        t += dt;
        hover += (hoverT - hover) * 0.08;
        uniforms.uTime.value = t;
        cube.rotation.y += dt * (0.45 + hover * 0.5);
        cube.rotation.x += ((0.45 + Math.sin(t * 0.6) * 0.25 - ty * 0.5) - cube.rotation.x) * 0.05;
        cube.rotation.z += ((tx * -0.25) - cube.rotation.z) * 0.05;
        cube.position.y = Math.sin(t * 1.1) * 0.08;
        cube.scale.setScalar(1 + hover * 0.08);
        paint(t);
        renderer.render(scene, camera);
        if (visible && !reduced) raf = requestAnimationFrame(frame);
      };
      const io = new IntersectionObserver(([en]) => {
        visible = en.isIntersecting;
        cancelAnimationFrame(raf);
        if (visible) { last = performance.now(); raf = requestAnimationFrame(frame); }
      });
      io.observe(stage);
      if (reduced) frame(performance.now());

      cleanup = () => {
        cancelAnimationFrame(raf); io.disconnect(); ro.disconnect();
        link.removeEventListener('pointermove', onMove); link.removeEventListener('pointerenter', onEnter); link.removeEventListener('pointerleave', onLeave);
        cube.geometry.dispose(); mat.dispose(); bgTex.dispose(); pmrem.dispose(); renderer.dispose();
        renderer.domElement.remove();
      };
    };

    // start loading only when the contact section is close
    const near = new IntersectionObserver(([en]) => {
      if (en.isIntersecting) { near.disconnect(); boot().catch(() => link.classList.add('no-gl')); }
    }, { rootMargin: '600px 0px' });
    near.observe(stage);

    return () => { disposed = true; near.disconnect(); cleanup(); };
  }, []);

  return (
    <a ref={linkRef} className="cube-cta" href={href} aria-label="Start a project" data-cursor-link>
      <div ref={stageRef} className="cube-stage" aria-hidden="true" />
      <span className="cube-label">Start a project <Icon name="arrow-up-right" /></span>
    </a>
  );
}
