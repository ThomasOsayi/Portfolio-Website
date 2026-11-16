/* eslint-disable */
// @ts-nocheck
// Texture Type engine: draws a word with a live WebGL2 material (fur, scales, liquid metal, velvet).
// Each material is procedural, so no image assets are needed.
  // ---------- materials ----------
  // kind 0 = strands (fur family), 1 = scales surface, 2 = liquid metal surface
  export const MATERIALS = {
    snake:  { kind: 1, style: 0, bg: [0.090, 0.082, 0.067], texScale: 2.2 },
    croc:   { kind: 1, style: 1, bg: [0.070, 0.074, 0.062], texScale: 2.0, bevel: 0.1 },
    tiger:  { kind: 0, bg: [0.075, 0.066, 0.058], texScale: 1.7, len: 0.034, density: 3.0, sway: 0.3, wave: 1.25, speed: 1.5, flowRand: 0.35, edgeOut: 0.55, alpha: 0.78, decay: 0.9, clump: 0.0, tip: 0.35, bevel: 0.09 },
    bear:   { kind: 0, bg: [0.082, 0.072, 0.064], texScale: 1.5, len: 0.075, density: 3.4, sway: 0.5, wave: 1.1, speed: 0.75, flowRand: 0.35, edgeOut: 0.7, alpha: 0.72, decay: 1.2, clump: 1.1, tip: 0.7, bevel: 0.1 },
    zebra:  { kind: 0, bg: [0.080, 0.078, 0.074], texScale: 1.6, len: 0.03, density: 3.0, sway: 0.3, wave: 1.2, speed: 1.4, flowRand: 0.3, edgeOut: 0.55, alpha: 0.8, decay: 0.9, clump: 0.0, tip: 0.3, bevel: 0.09 },
    marabou:{ kind: 0, bg: [0.085, 0.060, 0.070], texScale: 1.2, len: 0.065, density: 3.0, sway: 0.75, wave: 1.0, speed: 0.9, flowRand: 1.2, edgeOut: 0.85, alpha: 0.5, decay: 1.4, clump: 0.6, tip: 0.8, bevel: 0.1 },
    grass:  { kind: 0, up: true, bg: [0.060, 0.070, 0.062], texScale: 1.3, len: 0.09, density: 3.4, sway: 0.55, wave: 1.5, speed: 1.1, flowRand: 0.22, edgeOut: 0.15, alpha: 0.95, decay: 1.5, clump: 0.3, tip: 0.6, bevel: 0.08 },
    carpet: { kind: 0, bg: [0.110, 0.098, 0.088], texScale: 1.0, len: 0.022, density: 2.0, sway: 0.1, wave: 0.3, speed: 0.6, flowRand: Math.PI, edgeOut: 0.35, alpha: 0.9, decay: 6.0, clump: 0.6, tip: 0.55, bevel: 0.08 },
    velvet: { kind: 3, bg: [0.075, 0.055, 0.065], texScale: 1.8, bevel: 0.1 },
    metal:  { kind: 2, tint: [0.93, 0.95, 1.0], bg: [0.070, 0.074, 0.082], texScale: 1.0, bevel: 0.11 },
    gold:   { kind: 2, tint: [1.0, 0.74, 0.32], bg: [0.085, 0.070, 0.052], texScale: 1.0, bevel: 0.11 },
  };

  // ---------- tileable value noise for procedural textures ----------
  function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
  function tileNoise(period, seed) {
    const r = rng(seed), g = new Float32Array(period * period);
    for (let i = 0; i < g.length; i++) g[i] = r();
    return (x, y) => {
      const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
      const w = (v) => ((v % period) + period) % period;
      const a = g[w(yi) * period + w(xi)], b = g[w(yi) * period + w(xi + 1)];
      const c = g[w(yi + 1) * period + w(xi)], d = g[w(yi + 1) * period + w(xi + 1)];
      const sx = xf * xf * (3 - 2 * xf), sy = yf * yf * (3 - 2 * yf);
      return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
    };
  }
  function fbm(freqs, seed) {
    const ns = freqs.map((f, i) => [f, tileNoise(f, seed + i * 97)]);
    return (u, v) => { let s = 0, amp = 0.5, t = 0; for (const [f, n] of ns) { s += n(u * f, v * f) * amp; t += amp; amp *= 0.5; } return s / t; };
  }
  const mixc = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
  const ss = (e0, e1, x) => { const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };
  const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];

  function makeTexture(name) {
    const N = 512, cv = document.createElement("canvas");
    cv.width = cv.height = N;
    const ctx = cv.getContext("2d"), img = ctx.createImageData(N, N), d = img.data;
    let px;
    if (name === "tiger") {
      const lo = fbm([3, 6, 12], 11), warp = fbm([4, 8, 16], 23), taper = fbm([2, 4, 8], 37), fine = fbm([32, 64], 41);
      const dark = hex("#120a05"), orange = hex("#c85d16"), light = hex("#f1a34c"), cream = hex("#f3dcb4");
      px = (u, v) => {
        let c = mixc(orange, light, ss(0.3, 0.75, lo(u, v)));
        c = mixc(c, cream, ss(0.72, 0.9, lo(u + 0.37, v + 0.11)) * 0.6);
        const st = Math.sin(2 * Math.PI * (u * 6 + (warp(u, v) - 0.5) * 1.6));
        const thr = 0.45 + 0.45 * (1 - taper(u, v));
        c = mixc(c, dark, ss(thr, thr + 0.12, st));
        const f = 0.85 + 0.3 * fine(u, v);
        return [c[0] * f, c[1] * f, c[2] * f];
      };
    } else if (name === "bear") {
      const lo = fbm([3, 6, 12], 5), streak = tileNoise(48, 9), fine = fbm([24, 48], 13);
      const deep = hex("#26150a"), mid = hex("#5a341a"), tipc = hex("#a06c40");
      px = (u, v) => {
        let c = mixc(deep, mid, ss(0.25, 0.75, lo(u, v)));
        c = mixc(c, tipc, ss(0.6, 0.85, streak(u * 48, v * 6)) * 0.55);
        const f = 0.8 + 0.4 * fine(u, v);
        return [c[0] * f, c[1] * f, c[2] * f];
      };
    } else if (name === "zebra") {
      const warp = fbm([4, 8, 16], 131), taper = fbm([2, 4, 8], 137), fine = fbm([32, 64], 139);
      const ink = hex("#0d0b0a"), white = hex("#f1ece2");
      px = (u, v) => {
        const st = Math.sin(2 * Math.PI * (u * 7 + (warp(u, v) - 0.5) * 2.2 + Math.sin(v * 2 * Math.PI) * 0.25));
        const thr = -0.1 + 0.35 * (1 - taper(u, v));
        let c = mixc(white, ink, ss(thr, thr + 0.18, st));
        const f = 0.86 + 0.28 * fine(u, v);
        return [c[0] * f, c[1] * f, c[2] * f];
      };
    } else if (name === "marabou") {
      const lo = fbm([3, 6, 12], 151), fine = fbm([32, 64], 157);
      const deep = hex("#d9628f"), pink = hex("#f4a6c4"), blush = hex("#ffd9e8");
      px = (u, v) => {
        let c = mixc(deep, pink, ss(0.25, 0.7, lo(u, v)));
        c = mixc(c, blush, ss(0.6, 0.85, fine(u, v)) * 0.6);
        return c;
      };
    } else if (name === "grass") {
      const lo = fbm([3, 6, 12], 161), fine = fbm([32, 64, 128], 167);
      const deep = hex("#1f4a16"), mid = hex("#3f8a2a"), sun = hex("#9cc94a"), dry = hex("#b9a44a");
      px = (u, v) => {
        let c = mixc(deep, mid, ss(0.2, 0.7, fine(u, v)));
        c = mixc(c, sun, ss(0.6, 0.85, lo(u, v)) * 0.6);
        c = mixc(c, dry, ss(0.78, 0.9, lo(u + 0.31, v + 0.17)) * 0.5);
        return c;
      };
    } else if (name === "croc") {
      const lo = fbm([3, 6, 12], 171), fine = fbm([32, 64], 173);
      const black = hex("#1c1d14"), olive = hex("#4e5230"), moss = hex("#727544"), belly = hex("#a39860");
      px = (u, v) => {
        let c = mixc(black, olive, ss(0.25, 0.65, lo(u, v)));
        c = mixc(c, moss, ss(0.55, 0.8, fine(u, v)) * 0.7);
        c = mixc(c, belly, ss(0.75, 0.88, lo(u + 0.5, v + 0.2)) * 0.45);
        return c;
      };
    } else if (name === "velvet") {
      const crush = fbm([3, 6, 12, 24], 181), fine = fbm([64, 128], 187);
      const wine = hex("#5e1030"), ruby = hex("#a52352"), rose = hex("#d65a87");
      px = (u, v) => {
        let c = mixc(wine, ruby, ss(0.3, 0.7, crush(u, v)));
        c = mixc(c, rose, ss(0.68, 0.85, crush(u + 0.2, v + 0.4)) * 0.55);
        const f = 0.9 + 0.2 * fine(u, v);
        return [c[0] * f, c[1] * f, c[2] * f];
      };
    } else if (name === "carpet") {
      const lo = fbm([4, 8], 3), fine = fbm([32, 64, 128], 17);
      const shadow = hex("#c9bba3"), ivory = hex("#f4ede1"), warm = hex("#e6d6bd");
      px = (u, v) => {
        let c = mixc(shadow, ivory, ss(0.2, 0.8, fine(u, v)));
        c = mixc(c, warm, ss(0.4, 0.7, lo(u, v)) * 0.5);
        return c;
      };
    } else {
      // python snakeskin (default)
      const blot = fbm([3, 6, 12], 71), lo = fbm([3, 6], 83), speck = fbm([64, 128], 89);
      const sand = hex("#a7814f"), pale = hex("#d6bb86"), brown = hex("#4b2f17"), black = hex("#120c07");
      px = (u, v) => {
        const n = blot(u, v);
        let c = mixc(sand, pale, ss(0.3, 0.7, lo(u, v)));
        c = mixc(c, brown, ss(0.6, 0.62, n));
        c = mixc(c, black, (ss(0.555, 0.575, n) - ss(0.605, 0.635, n)) * 0.95);
        c = mixc(c, black, ss(0.4, 0.38, n) * ss(0.36, 0.4, n) * 0.0);
        c = mixc(c, black, ss(0.72, 0.8, speck(u, v)) * 0.5);
        return c;
      };
    }
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      const c = px(x / N, y / N), i = (y * N + x) * 4;
      d[i] = Math.min(255, c[0]); d[i + 1] = Math.min(255, c[1]); d[i + 2] = Math.min(255, c[2]); d[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    return cv;
  }

  // ---------- shaders ----------
  const VS_QUAD = `#version 300 es
  in vec2 aPos; out vec2 vUv;
  void main(){ vUv = aPos*0.5+0.5; gl_Position = vec4(aPos,0.,1.); }`;

  const FS_BASE = `#version 300 es
  precision highp float;
  in vec2 vUv; out vec4 o;
  uniform sampler2D uMask, uShade, uTex;
  uniform vec2 uRes, uTexSize, uShadeTexel, uMouse, uLight;
  uniform float uTime, uGrow, uFont, uMouseOn;
  uniform vec3 uBg, uTint;
  uniform int uKind, uStyle;

  float sh(vec2 uv){ return texture(uShade, uv).r; }

  vec3 env(vec3 r, float t){
    float y = r.y + 0.18*sin(r.x*2.6 + t*0.35);
    float bands = smoothstep(-0.05, 0.12, sin(y*6.5 + 1.25));
    vec3 c = mix(vec3(0.04,0.045,0.055), vec3(0.93,0.95,0.98), 0.12 + 0.78*bands);
    c *= 0.5 + 0.5*smoothstep(-1.2, 1.0, y);
    c += vec3(1.0)*smoothstep(0.05, 0.0, abs(r.x - 0.42 - 0.06*sin(t*0.3)));
    c += vec3(0.18,0.16,0.22)*smoothstep(0.3, 1.2, -y);
    return c;
  }

  float liquidH(vec2 px){
    float s = texture(uShade, px/uRes).r;
    vec2 q = px/uFont; float t = uTime;
    float w = sin(q.x*3.1 + t*1.3)*sin(q.y*2.7 - t*1.1)*0.5
            + sin(q.x*5.3 - q.y*4.1 + t*1.7)*0.25
            + sin(q.x*1.7 + q.y*6.0 - t*0.9)*0.2;
    float dm = length(px - uMouse)/uFont;
    float rip = sin(dm*20.0 - t*7.0)*exp(-dm*3.2)*uMouseOn;
    return s + (w*0.085 + rip*0.08)*smoothstep(0.15, 0.85, s);
  }

  void main(){
    float m = texture(uMask, vUv).r;
    if (m < 0.004) { o = vec4(uBg, 1.0); return; }
    vec2 px = vUv*uRes;
    float s = sh(vUv);
    float hx = sh(vUv + vec2(uShadeTexel.x, 0.)) - sh(vUv - vec2(uShadeTexel.x, 0.));
    float hy = sh(vUv + vec2(0., uShadeTexel.y)) - sh(vUv - vec2(0., uShadeTexel.y));
    vec3 n = normalize(vec3(-hx*3.0, -hy*3.0, 1.0));
    vec3 c;
    if (uKind == 0) {
      vec3 tex = texture(uTex, px/uTexSize).rgb;
      float light = clamp(0.55 + n.y*0.9 - n.x*0.25, 0.0, 1.0);
      float k = mix(0.5, 1.12, smoothstep(0.15, 0.9, s))*mix(0.62, 1.25, light);
      k *= 1.0 + 0.14*sin((px.x*0.9 + px.y*0.35)/uFont - uTime*1.4);
      c = tex*k;
    } else if (uKind == 1 && uStyle == 1) {
      // crocodile: large rectangular tiles with deep grooves, waxy sheen
      vec2 cs = vec2(uFont*0.11, uFont*0.075);
      vec2 sp = px + vec2(sin(px.y/uFont*2.5 + uTime*0.9)*cs.x*0.08, 0.0);
      vec2 p = sp/cs;
      float row = floor(p.y);
      p.x += 0.35*mod(row, 3.0) + 0.15*sin(row*1.7);
      vec2 cell = floor(p); vec2 f = fract(p) - 0.5;
      float jx = fract(sin(dot(cell, vec2(12.9898, 78.233)))*43758.5453);
      vec2 a = abs(f);
      vec2 hb = vec2(0.3 + 0.06*jx, 0.27 + 0.05*(1.0 - jx));
      float dq = length(max(a - hb, 0.0)) + min(max(a.x - hb.x, a.y - hb.y), 0.0);
      float groove = smoothstep(0.06, 0.16, dq);
      vec3 tn = normalize(vec3(f.x*1.4, f.y*1.6, 1.0));
      vec3 N = normalize(n + vec3(tn.xy*0.6, 0.0) + vec3(sign(f)*groove*0.6, 0.0));
      vec3 base = mix(texture(uTex, (cell + 0.5)*cs/uTexSize).rgb, texture(uTex, px/uTexSize).rgb, 0.35);
      vec3 L = normalize(vec3(uLight - px, uFont*0.85));
      float diff = max(dot(N, L), 0.0);
      float spec = pow(max(dot(N, normalize(L + vec3(0.0, 0.0, 1.0))), 0.0), 34.0);
      float edge = smoothstep(0.12, 0.85, s);
      c = base*1.35*(0.5 + 1.0*diff)*(1.0 - groove*0.6)*mix(0.55, 1.0, edge) + vec3(0.95, 0.92, 0.8)*spec*0.75*(1.0 - groove);
    } else if (uKind == 1) {
      float cs = uFont*0.042;
      vec2 sp = px + vec2(sin(px.y/uFont*4.0 + uTime*1.5)*cs*0.22, cos(px.x/uFont*3.0 - uTime*1.1)*cs*0.08);
      vec2 p = sp/cs; p.y *= 1.18;
      float row = floor(p.y);
      float off = 0.5*mod(row, 2.0);
      p.x += off;
      vec2 cell = floor(p); vec2 f = fract(p) - 0.5;
      float r = length(vec2(f.x, f.y*1.05 + 0.1));
      vec3 sn = normalize(vec3(f.x*2.4, (f.y + 0.12)*2.8, 1.0));
      float rim = smoothstep(0.34, 0.52, r);
      vec2 cc = vec2((cell.x + 0.5 - off)*cs, (cell.y + 0.5)*cs/1.18);
      vec3 base = mix(texture(uTex, cc/uTexSize).rgb, texture(uTex, px/uTexSize).rgb, 0.5);
      vec3 N = normalize(n + vec3(sn.xy*0.45, 0.0));
      vec3 L = normalize(vec3(uLight - px, uFont*0.85));
      float diff = max(dot(N, L), 0.0);
      vec3 H = normalize(L + vec3(0.0, 0.0, 1.0));
      float spec = pow(max(dot(N, H), 0.0), 42.0);
      vec3 irid = 0.55 + 0.45*cos(6.2831*(dot(N, L)*1.3 + vec3(0.0, 0.33, 0.67)));
      float edge = smoothstep(0.12, 0.85, s);
      c = base*(0.55 + 0.9*diff)*(1.0 - rim*0.28)*mix(0.55, 1.0, edge)
        + spec*mix(vec3(1.0), irid, 0.6)*0.7*(1.0 - rim*0.8);
    } else if (uKind == 3) {
      // crushed velvet: deep colour that flares bright where the pile tilts away, light follows the cursor
      vec3 tex = texture(uTex, px/uTexSize + vec2(sin(px.y/uFont*1.5 + uTime*0.25), cos(px.x/uFont*1.2 - uTime*0.2))*0.02).rgb;
      float t = uTime*0.35;
      vec2 q = px/uFont;
      vec2 pile = vec2(sin(q.x*2.3 + q.y*1.1 + t) + 0.6*sin(q.y*4.1 - t*1.3), cos(q.y*2.7 - q.x*0.9 - t*0.8) + 0.6*cos(q.x*3.7 + t*1.1))*0.45;
      float dm = length(px - uMouse)/uFont;
      pile += normalize(px - uMouse + 0.001)*exp(-dm*dm*6.0)*0.9*uMouseOn;
      vec3 N = normalize(n + vec3(pile, 0.0));
      vec3 L = normalize(vec3(uLight - px, uFont*0.9));
      float diff = max(dot(N, L), 0.0);
      float sheen = pow(1.0 - max(N.z, 0.0), 1.6);
      float edge = smoothstep(0.12, 0.85, s);
      c = tex*(0.55 + 0.85*diff)*mix(0.6, 1.0, edge) + tex*vec3(1.9, 1.5, 1.65)*sheen*2.4*(0.55 + 0.45*diff);
    } else {
      float e = uFont*0.01;
      float h0 = liquidH(px), h1 = liquidH(px + vec2(e, 0.)), h2 = liquidH(px + vec2(0., e));
      vec2 g = vec2(h1 - h0, h2 - h0)/e*uFont*0.32;
      vec3 N = normalize(vec3(-g, 1.0));
      vec3 R = reflect(vec3(0.0, 0.0, -1.0), N);
      c = env(R, uTime);
      c *= uTint;
      vec3 L = normalize(vec3(uLight - px, uFont*0.7));
      c += vec3(1.0)*pow(max(dot(reflect(-L, N), vec3(0.0, 0.0, 1.0)), 0.0), 70.0)*0.9;
      c = mix(c, vec3(0.02), smoothstep(0.35, 0.0, s)*0.5);
    }
    o = vec4(mix(uBg, c, m*uGrow), 1.0);
  }`;

  const VS_HAIR = `#version 300 es
  in vec2 aRoot; in vec2 aDir; in float aLen; in float aSeed; in float aShade;
  uniform vec2 uRes, uMouse, uVel;
  uniform float uTime, uGrow, uFont, uRadius, uSway, uWave, uSpeed, uDecay;
  uniform vec4 uTrail[24];
  uniform float uAge[24];
  out float vT; out vec2 vRoot; out float vSeed; out float vShade; out float vWave;
  void main(){
    float t = float(gl_VertexID);
    float len = aLen*uGrow;
    vec2 perp = vec2(-aDir.y, aDir.x);
    float w = sin(uTime*2.0*uSpeed + aRoot.x*0.011 + aRoot.y*0.007 + aSeed*6.2831)*0.45
            + sin(uTime*0.6*uSpeed + aRoot.x*0.0035 - aRoot.y*0.002)*0.35;
    float ph = (aRoot.x*0.9 + aRoot.y*0.35)/uFont - uTime*1.4*uSpeed;
    float gust = 0.7 + 0.3*sin(aRoot.x/(uFont*2.6) - uTime*0.4*uSpeed);
    float wave = sin(ph)*gust;
    vec2 wind = normalize(vec2(1.0, -0.25));
    vec2 tip = aRoot + aDir*len + perp*w*len*uSway + wind*wave*len*uWave + perp*cos(ph)*gust*len*uWave*0.3;
    vec2 comb = vec2(0.0);
    for (int i = 0; i < 24; i++) {
      float a = uAge[i];
      if (a >= uDecay) continue;
      vec2 d = aRoot - uTrail[i].xy;
      float f = exp(-dot(d, d)/(uRadius*uRadius*0.55))*(1.0 - a/uDecay);
      comb += uTrail[i].zw*f;
    }
    float cl = length(comb);
    if (cl > 0.001) tip += comb/cl*min(cl, 1.0)*len*1.7;
    vec2 d = tip - uMouse;
    float dist = length(d);
    float f = exp(-(dist*dist)/(uRadius*uRadius));
    tip += (d/max(dist, 1.0))*f*len*1.3 + uVel*f*0.8;
    vec2 v = tip - aRoot;
    tip = aRoot + v/max(length(v), 0.001)*len;
    gl_Position = vec4(mix(aRoot, tip, t)/uRes*2.0 - 1.0, 0.0, 1.0);
    vT = t; vRoot = aRoot; vSeed = aSeed; vShade = aShade; vWave = wave;
  }`;

  const FS_HAIR = `#version 300 es
  precision highp float;
  in float vT; in vec2 vRoot; in float vSeed; in float vShade; in float vWave;
  out vec4 o;
  uniform sampler2D uTex;
  uniform vec2 uTexSize;
  uniform float uTip, uAlpha;
  void main(){
    vec3 tex = texture(uTex, vRoot/uTexSize).rgb;
    float jitter = 0.78 + 0.44*fract(vSeed*91.7);
    vec3 c = tex*vShade*jitter*(0.88 + uTip*vT)*(1.0 + 0.28*vWave*vT);
    o = vec4(c, (1.0 - vT*vT)*uAlpha);
  }`;

  // ---------- helpers ----------
  function compile(gl, vs, fs) {
    const mk = (type, src) => {
      const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
      return s;
    };
    const p = gl.createProgram();
    gl.attachShader(p, mk(gl.VERTEX_SHADER, vs)); gl.attachShader(p, mk(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
    const cache = {};
    p.u = (n) => (n in cache ? cache[n] : (cache[n] = gl.getUniformLocation(p, n)));
    return p;
  }
  function boxBlur(src, w, h, r) {
    const a = Float32Array.from(src), b = new Float32Array(w * h);
    for (let pass = 0; pass < 2; pass++) {
      for (let y = 0; y < h; y++) {
        const row = y * w; let acc = 0;
        for (let x = -r; x <= r; x++) acc += a[row + Math.min(w - 1, Math.max(0, x))];
        for (let x = 0; x < w; x++) { b[row + x] = acc / (2 * r + 1); acc += a[row + Math.min(w - 1, x + r + 1)] - a[row + Math.max(0, x - r)]; }
      }
      for (let x = 0; x < w; x++) {
        let acc = 0;
        for (let y = -r; y <= r; y++) acc += b[Math.min(h - 1, Math.max(0, y)) * w + x];
        for (let y = 0; y < h; y++) { a[y * w + x] = acc / (2 * r + 1); acc += b[Math.min(h - 1, y + r + 1) * w + x] - b[Math.max(0, y - r) * w + x]; }
      }
    }
    return a;
  }
  const valueNoise2 = (() => { const n = tileNoise(64, 991); return (x, y) => n(x, y); })();

  const reduced = typeof window !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
  let FONT = '"Archivo Black", "Arial Black", Impact, sans-serif';
  export function setTextureFont(f: string) { FONT = f; }
  export const instances: any[] = [];

  // ---------- one live texture word ----------
  export class TextureWord {
    constructor(stage, name, opts = {}) {
      this.stage = stage; this.name = name; this.mat = MATERIALS[name]; this.opts = opts;
      const canvas = document.createElement("canvas");
      canvas.setAttribute("aria-hidden", "true");
      stage.prepend(canvas);
      this.canvas = canvas;
      const gl = canvas.getContext("webgl2", { antialias: true, alpha: false });
      if (!gl) throw new Error("no webgl2");
      this.gl = gl;
      this.base = compile(gl, VS_QUAD, FS_BASE);
      if (this.mat.kind === 0) this.hair = compile(gl, VS_HAIR, FS_HAIR);
      this.quad = gl.createVertexArray(); gl.bindVertexArray(this.quad);
      const qb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, qb);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(this.base, "aPos"); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      gl.bindVertexArray(null);
      this.maskTex = gl.createTexture(); this.shadeTex = gl.createTexture(); this.colorTex = gl.createTexture();
      this.hairVao = gl.createVertexArray(); this.hairBuf = gl.createBuffer(); this.count = 0;
      if (this.mat.kind !== 2) {
        const tc = makeTexture(name);
        gl.bindTexture(gl.TEXTURE_2D, this.colorTex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, tc);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
      }
      this.mouse = [-1e5, -1e5]; this.target = [-1e5, -1e5]; this.vel = [0, 0]; this.mouseOn = 0;
      this.trail = []; this.visible = true; this.ready = false; this.start = performance.now();
    }

    build(word) {
      const { gl, mat, stage, canvas } = this;
      const rect = stage.getBoundingClientRect();
      const dpr = Math.min(devicePixelRatio || 1, 2);
      const w = Math.max(2, Math.round(rect.width * dpr)), h = Math.max(2, Math.round(rect.height * dpr));
      canvas.width = w; canvas.height = h;
      this.w = w; this.h = h; this.dpr = dpr;
      const mc = document.createElement("canvas"); mc.width = w; mc.height = h;
      const ctx = mc.getContext("2d", { willReadFrequently: true });
      const setSpacing = (v) => { if ("letterSpacing" in ctx) ctx.letterSpacing = v + "px"; };
      ctx.font = `400 100px ${FONT}`; setSpacing(2);
      let m = ctx.measureText(word);
      const bw = m.actualBoundingBoxLeft + m.actualBoundingBoxRight, bh = m.actualBoundingBoxAscent + m.actualBoundingBoxDescent;
      const size = 100 * Math.min((w * (this.opts.fitW || (rect.width < 700 ? 0.92 : 0.84))) / bw, (h * (this.opts.fitH || 0.74)) / bh);
      this.font = size;
      ctx.fillStyle = "#000"; ctx.fillRect(0, 0, w, h);
      ctx.font = `400 ${size}px ${FONT}`; setSpacing(size * 0.035);
      m = ctx.measureText(word);
      const tw = m.actualBoundingBoxLeft + m.actualBoundingBoxRight, th = m.actualBoundingBoxAscent + m.actualBoundingBoxDescent;
      const x = (w - tw) / 2 + m.actualBoundingBoxLeft, y = h * (this.opts.cy || 0.52) - th / 2 + m.actualBoundingBoxAscent;
      ctx.fillStyle = "#fff"; ctx.fillText(word, x, y);
      const px = ctx.getImageData(0, 0, w, h).data;

      // soft shade/height field at quarter resolution
      const q = 4, qw = Math.ceil(w / q), qh = Math.ceil(h / q), cov = new Float32Array(qw * qh);
      for (let yy = 0; yy < h; yy++) { const qy = (yy / q) | 0; for (let xx = 0; xx < w; xx += 2) cov[qy * qw + ((xx / q) | 0)] += px[(yy * w + xx) * 4] / 255 / (q * q / 2); }
      const r = Math.max(2, Math.round((size * (mat.bevel || 0.09)) / q));
      const shade = boxBlur(cov, qw, qh, r);
      const at = (sx, sy) => shade[Math.min(qh - 1, Math.max(0, sy | 0)) * qw + Math.min(qw - 1, Math.max(0, sx | 0))];

      gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.bindTexture(gl.TEXTURE_2D, this.maskTex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, mc);
      for (const p of [gl.TEXTURE_MIN_FILTER, gl.TEXTURE_MAG_FILTER]) gl.texParameteri(gl.TEXTURE_2D, p, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      const sb = new Uint8Array(qw * qh);
      for (let yy = 0; yy < qh; yy++) for (let xx = 0; xx < qw; xx++) sb[(qh - 1 - yy) * qw + xx] = Math.min(255, Math.round(shade[yy * qw + xx] * 255));
      gl.bindTexture(gl.TEXTURE_2D, this.shadeTex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.R8, qw, qh, 0, gl.RED, gl.UNSIGNED_BYTE, sb);
      for (const p of [gl.TEXTURE_MIN_FILTER, gl.TEXTURE_MAG_FILTER]) gl.texParameteri(gl.TEXTURE_2D, p, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      this.shadeTexel = [1.5 / qw, 1.5 / qh];

      if (mat.kind === 0) {
        let area = 0; for (let i = 0; i < cov.length; i++) area += cov[i]; area *= q * q;
        const cap = rect.width < 700 ? 60000 : 160000;
        const count = Math.min(cap, Math.round(area / mat.density));
        const data = new Float32Array(count * 7), baseLen = size * mat.len;
        const bx0 = Math.max(0, Math.floor(x - m.actualBoundingBoxLeft)), bx1 = Math.min(w - 1, Math.ceil(x + m.actualBoundingBoxRight));
        const by0 = Math.max(0, Math.floor(y - m.actualBoundingBoxAscent)), by1 = Math.min(h - 1, Math.ceil(y + m.actualBoundingBoxDescent));
        const clumpScale = size * 0.12;
        let n = 0, tries = 0;
        while (n < count && tries < count * 30) {
          tries++;
          const rx = bx0 + Math.random() * (bx1 - bx0), ry = by0 + Math.random() * (by1 - by0);
          if (px[((ry | 0) * w + (rx | 0)) * 4] < 140) continue;
          const sx = rx / q, sy = ry / q;
          const gx = at(sx + 1, sy) - at(sx - 1, sy), gy = at(sx, sy + 1) - at(sx, sy - 1);
          const gl2 = Math.hypot(gx, gy), edge = Math.min(1, gl2 * r * 1.3);
          let ang = (mat.up ? -Math.PI / 2 : Math.PI / 2) + 0.5 * Math.sin(rx * 0.006) * (mat.up ? 0.3 : 1) + 0.35 * Math.sin(ry * 0.01 + rx * 0.003);
          ang += mat.clump * (valueNoise2(rx / clumpScale, ry / clumpScale) - 0.5) * 2.4;
          ang += (Math.random() - 0.5) * 2 * mat.flowRand;
          let dx = Math.cos(ang), dy = Math.sin(ang);
          if (gl2 > 1e-5) { dx = dx * (1 - edge * mat.edgeOut) - (gx / gl2) * edge * mat.edgeOut; dy = dy * (1 - edge * mat.edgeOut) - (gy / gl2) * edge * mat.edgeOut; }
          const dl = Math.hypot(dx, dy) || 1, s = at(sx, sy);
          const light = Math.min(1, Math.max(0, 0.5 + (at(sx, sy + r * 0.8) - at(sx, sy - r * 0.8)) * 1.6));
          const o = n * 7;
          data[o] = rx; data[o + 1] = h - ry; data[o + 2] = dx / dl; data[o + 3] = -dy / dl;
          data[o + 4] = baseLen * (0.65 + Math.random() * 0.6) * (1 + edge * 0.3);
          data[o + 5] = Math.random();
          data[o + 6] = (0.5 + 0.68 * Math.min(1, Math.max(0, (s - 0.15) / 0.75))) * (0.6 + 0.7 * light);
          n++;
        }
        this.count = n;
        gl.bindVertexArray(this.hairVao);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.hairBuf);
        gl.bufferData(gl.ARRAY_BUFFER, data.subarray(0, n * 7), gl.STATIC_DRAW);
        [["aRoot", 2, 0], ["aDir", 2, 2], ["aLen", 1, 4], ["aSeed", 1, 5], ["aShade", 1, 6]].forEach(([nm, sz, off]) => {
          const l = gl.getAttribLocation(this.hair, nm); gl.enableVertexAttribArray(l);
          gl.vertexAttribPointer(l, sz, gl.FLOAT, false, 28, off * 4); gl.vertexAttribDivisor(l, 1);
        });
        gl.bindVertexArray(null);
      }
      this.cx = w / 2; this.cy = h / 2;
      this.ready = true;
      this.canvas.dataset.ready = "true";
    }

    pointer(e) {
      const rc = this.canvas.getBoundingClientRect();
      const inside = e.clientX >= rc.left - 40 && e.clientX <= rc.right + 40 && e.clientY >= rc.top - 40 && e.clientY <= rc.bottom + 40;
      if (!inside) { this.target = [-1e5, -1e5]; return; }
      const nx = (e.clientX - rc.left) * this.dpr, ny = (rc.bottom - e.clientY) * this.dpr;
      const last = this.trail[this.trail.length - 1];
      const step = this.font * 0.06;
      if (!last || Math.hypot(nx - last.x, ny - last.y) > step) {
        const dx = last ? nx - last.x : 0, dy = last ? ny - last.y : 0, dl = Math.hypot(dx, dy) || 1;
        if (last) this.trail.push({ x: nx, y: ny, vx: dx / dl, vy: dy / dl, t: performance.now() });
        else this.trail.push({ x: nx, y: ny, vx: 0, vy: 0, t: performance.now() });
        if (this.trail.length > 24) this.trail.shift();
      }
      this.target = [nx, ny];
    }

    draw(now) {
      if (!this.ready) return;
      const { gl, mat } = this;
      const t = reduced ? 2.0 : (now - this.start) / 1000;
      const g = reduced ? 1 : 1 - Math.pow(1 - Math.min(1, Math.max(0, (t - 0.1) / 1.4)), 3);
      const [tx, ty] = this.target;
      if (tx < -1e4) { this.mouse = [-1e5, -1e5]; this.mouseOn += (0 - this.mouseOn) * 0.05; }
      else {
        const nx = this.mouse[0] < -1e4 ? tx : this.mouse[0] + (tx - this.mouse[0]) * 0.35;
        const ny = this.mouse[1] < -1e4 ? ty : this.mouse[1] + (ty - this.mouse[1]) * 0.35;
        if (this.mouse[0] > -1e4) { this.vel[0] = this.vel[0] * 0.82 + (nx - this.mouse[0]) * 0.9; this.vel[1] = this.vel[1] * 0.82 + (ny - this.mouse[1]) * 0.9; }
        this.mouse = [nx, ny]; this.mouseOn += (1 - this.mouseOn) * 0.08;
      }
      this.vel[0] *= 0.94; this.vel[1] *= 0.94;
      const vm = Math.hypot(this.vel[0], this.vel[1]), cap = this.font * 0.12;
      const vx = vm > cap ? this.vel[0] / vm * cap : this.vel[0], vy = vm > cap ? this.vel[1] / vm * cap : this.vel[1];
      // light: follows the cursor, otherwise drifts in a slow loop
      const orbit = [this.cx + Math.cos(t * 0.45) * this.w * 0.32, this.cy + Math.sin(t * 0.7) * this.h * 0.45];
      const lm = this.mouseOn;
      const light = this.mouse[0] > -1e4 ? [orbit[0] + (this.mouse[0] - orbit[0]) * lm, orbit[1] + (this.mouse[1] - orbit[1]) * lm] : orbit;
      const mouseForSurface = this.mouse[0] > -1e4 ? this.mouse : light;

      gl.viewport(0, 0, this.w, this.h);
      gl.disable(gl.BLEND);
      const B = this.base;
      gl.useProgram(B);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, this.maskTex);
      gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, this.shadeTex);
      gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, this.colorTex);
      gl.uniform1i(B.u("uMask"), 0); gl.uniform1i(B.u("uShade"), 1); gl.uniform1i(B.u("uTex"), 2);
      gl.uniform2f(B.u("uRes"), this.w, this.h);
      const ts = this.font * mat.texScale;
      gl.uniform2f(B.u("uTexSize"), ts, ts);
      gl.uniform2f(B.u("uShadeTexel"), this.shadeTexel[0], this.shadeTexel[1]);
      gl.uniform2f(B.u("uMouse"), mouseForSurface[0], mouseForSurface[1]);
      gl.uniform2f(B.u("uLight"), light[0], light[1]);
      gl.uniform1f(B.u("uTime"), t); gl.uniform1f(B.u("uGrow"), g); gl.uniform1f(B.u("uFont"), this.font);
      gl.uniform1f(B.u("uMouseOn"), this.mouseOn);
      const bgc = this.opts.bg || mat.bg; gl.uniform3f(B.u("uBg"), bgc[0], bgc[1], bgc[2]);
      gl.uniform1i(B.u("uKind"), mat.kind);
      gl.uniform1i(B.u("uStyle"), mat.style || 0);
      const tint = mat.tint || [1, 1, 1];
      gl.uniform3f(B.u("uTint"), tint[0], tint[1], tint[2]);
      gl.bindVertexArray(this.quad); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      if (mat.kind === 0 && this.count) {
        const H = this.hair;
        gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.useProgram(H);
        gl.uniform1i(H.u("uTex"), 2);
        gl.uniform2f(H.u("uTexSize"), ts, ts);
        gl.uniform2f(H.u("uRes"), this.w, this.h);
        gl.uniform2f(H.u("uMouse"), this.mouse[0], this.mouse[1]);
        gl.uniform2f(H.u("uVel"), vx, vy);
        gl.uniform1f(H.u("uTime"), t); gl.uniform1f(H.u("uGrow"), g); gl.uniform1f(H.u("uFont"), this.font);
        gl.uniform1f(H.u("uRadius"), this.font * 0.24);
        gl.uniform1f(H.u("uSway"), mat.sway); gl.uniform1f(H.u("uWave"), mat.wave); gl.uniform1f(H.u("uSpeed"), mat.speed);
        gl.uniform1f(H.u("uDecay"), mat.decay); gl.uniform1f(H.u("uTip"), mat.tip); gl.uniform1f(H.u("uAlpha"), mat.alpha);
        const tr = new Float32Array(96), ages = new Float32Array(24).fill(1e9);
        this.trail.forEach((p, i) => { tr.set([p.x, p.y, p.vx, p.vy], i * 4); ages[i] = (now - p.t) / 1000; });
        gl.uniform4fv(H.u("uTrail"), tr); gl.uniform1fv(H.u("uAge"), ages);
        gl.bindVertexArray(this.hairVao);
        gl.drawArraysInstanced(gl.LINES, 0, 2, this.count);
        gl.bindVertexArray(null);
      }
    }
  }




  export { reduced };
