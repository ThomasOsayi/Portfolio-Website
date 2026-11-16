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
      renderer.toneMappingExposure = 1;
      stage.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      scene.environmentIntensity = 0.45;

      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
      camera.position.set(0, 0, 6.2);

      // what sits "behind" the glass: the page color, a faint dot grid and drifting text. The cube is
      // fully clear, so you read this straight through it, bent only at the edges.
      const S = 512;
      const bgCanvas = document.createElement('canvas'); bgCanvas.width = bgCanvas.height = S;
      const bg = bgCanvas.getContext('2d')!;
      const bgTex = new THREE.CanvasTexture(bgCanvas);
      bgTex.colorSpace = THREE.SRGBColorSpace;
      scene.background = bgTex;
      const heavy = getComputedStyle(document.documentElement).getPropertyValue('--f-heavy').trim() || 'Arial Black';
      const WORD = 'START A PROJECT  ';
      const paint = (t: number) => {
        bg.fillStyle = '#0b0b0c'; bg.fillRect(0, 0, S, S);
        bg.fillStyle = 'rgba(233,230,223,0.16)';
        for (let y = 8; y < S; y += 22) for (let x = 8; x < S; x += 22) bg.fillRect(x, y, 2, 2);
        bg.font = `400 46px ${heavy}`;
        bg.textBaseline = 'middle';
        const w = bg.measureText(WORD).width;
        [[150, 1, 0.9], [256, -1, 1], [362, 1, 0.9]].forEach(([y, dir, a], i) => {
          bg.fillStyle = i === 1 ? `rgba(233,230,223,${a})` : `rgba(75,85,255,${a})`;
          const off = ((t * 28 * dir + i * 130) % w + w) % w;
          for (let x = -off; x < S; x += w) bg.fillText(WORD, x, y);
        });
        // fade the edges back to the page color so the canvas has no visible border
        const v = bg.createRadialGradient(S / 2, S / 2, S * 0.3, S / 2, S / 2, S / 2);
        v.addColorStop(0, 'rgba(11,11,12,0)'); v.addColorStop(1, 'rgba(11,11,12,1)');
        bg.fillStyle = v; bg.fillRect(0, 0, S, S);
        bgTex.needsUpdate = true;
      };

      const uniforms = { uTime: { value: 0 } };
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0,
        roughness: 0,
        transmission: 1,
        thickness: 0.55,
        ior: 1.5,
        dispersion: 0.35,
        specularIntensity: 1,
        clearcoat: 1,
        clearcoatRoughness: 0,
        envMapIntensity: 0.55,
      });
      // a slow, small surface ripple so the glass reads as liquid
      mat.onBeforeCompile = (shader) => {
        shader.uniforms.uTime = uniforms.uTime;
        shader.vertexShader = 'uniform float uTime;\n' + shader.vertexShader.replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
           float w = sin(position.y * 3.0 + uTime * 1.4) * 0.022 + sin(position.x * 2.4 - uTime * 1.1) * 0.018;
           transformed += normal * w;`,
        );
      };
      const cube = new THREE.Mesh(new RoundedBoxGeometry(1.6, 1.6, 1.6, 10, 0.24), mat);
      cube.rotation.set(0.5, 0.6, 0);
      scene.add(cube);

      // only bright edge highlights, no fill light, so the faces stay clear
      const key = new THREE.DirectionalLight(0xffffff, 1.4); key.position.set(3, 4, 5); scene.add(key);

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
