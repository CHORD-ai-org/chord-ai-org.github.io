/**
 * CHORD hero sculpture.
 *
 * A particle shell rotating on a tilted axis, three construction rings and two
 * solid satellite spheres. Everything is drawn from a single depth-sorted list,
 * so rings pass in front of and behind the shell instead of being pasted on top.
 *
 * Motion language: form (once, on entry), then orbit (continuous, slow).
 * Degrades to a single static frame when the user prefers reduced motion.
 */

type Point = { x: number; y: number; z: number };

interface Particle {
  bx: number;
  by: number;
  bz: number;
  sx: number;
  sy: number;
  delay: number;
  accent: boolean;
  scale: number;
}

interface RingDef {
  tiltX: number;
  tiltZ: number;
  r: number;
}

interface Item {
  z: number;
  draw: () => void;
}

const TAU = Math.PI * 2;
const TILT = -0.34;
const CAMERA = 3.4;
const INK = '73, 54, 38';
const ACCENT = '181, 111, 80';

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function rotate(point: Point, angle: number, tilt: number): Point {
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);
  const x = point.x * cosA + point.z * sinA;
  const z = -point.x * sinA + point.z * cosA;

  const cosT = Math.cos(tilt);
  const sinT = Math.sin(tilt);
  return {
    x,
    y: point.y * cosT - z * sinT,
    z: point.y * sinT + z * cosT,
  };
}

function project(point: Point, radius: number, cx: number, cy: number) {
  const depth = CAMERA / (CAMERA - point.z * 0.55);
  return {
    x: cx + point.x * radius * depth,
    y: cy + point.y * radius * depth,
    depth,
  };
}

function ringPoint(def: RingDef, a: number): Point {
  const raw: Point = { x: Math.cos(a) * def.r, y: 0, z: Math.sin(a) * def.r };
  const cosX = Math.cos(def.tiltX);
  const sinX = Math.sin(def.tiltX);
  const afterX: Point = {
    x: raw.x,
    y: raw.y * cosX - raw.z * sinX,
    z: raw.y * sinX + raw.z * cosX,
  };
  const cosZ = Math.cos(def.tiltZ);
  const sinZ = Math.sin(def.tiltZ);
  return {
    x: afterX.x * cosZ - afterX.y * sinZ,
    y: afterX.x * sinZ + afterX.y * cosZ,
    z: afterX.z,
  };
}

export function mountSphere(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let reduceMotion = motionQuery.matches;
  let frame = 0;
  let startTime = 0;
  let visible = true;

  let width = 0;
  let height = 0;
  let radius = 0;
  let particles: Particle[] = [];
  let ringDefs: RingDef[] = [];
  let rings: Point[][] = [];
  let satellites: {
    plane: number;
    phase: number;
    speed: number;
    size: number;
    accent: boolean;
  }[] = [];

  const GOLDEN = Math.PI * (3 - Math.sqrt(5));

  const build = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(rect.width, 1);
    height = Math.max(rect.height, 1);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    radius = Math.min(width, height) * 0.305;

    const count = width < 520 ? 380 : Math.min(680, Math.round((width * height) / 560));

    particles = Array.from({ length: count }, (_, i) => {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = i * GOLDEN;
      const shell = 0.95 + Math.random() * 0.05;
      const angle = Math.random() * TAU;
      const spread = 0.5 + Math.random() * 1.5;
      return {
        bx: Math.cos(theta) * r * shell,
        by: y * shell,
        bz: Math.sin(theta) * r * shell,
        sx: Math.cos(angle) * spread,
        sy: Math.sin(angle) * spread,
        delay: Math.random() * 620,
        accent: Math.abs(y) < 0.055,
        scale: 0.72 + Math.random() * 0.56,
      };
    });

    ringDefs = [
      { tiltX: 0.52, tiltZ: 0.16, r: 1.22 },
      { tiltX: -0.26, tiltZ: 0.6, r: 1.38 },
    ];

    rings = ringDefs.map((def) => {
      const points: Point[] = [];
      const segments = 96;
      for (let i = 0; i <= segments; i += 1) {
        points.push(ringPoint(def, (i / segments) * TAU));
      }
      return points;
    });

    satellites = [
      { plane: 0, phase: 1.1, speed: 0.00017, size: 0.1, accent: true },
      { plane: 1, phase: 3.4, speed: 0.00026, size: 0.05, accent: false },
    ];
  };

  const drawFrame = (time: number) => {
    const elapsed = startTime ? time - startTime : 1e6;
    const angle = reduceMotion ? 0.55 : time * 0.00013;
    const cx = width / 2;
    const cy = height / 2;
    const items: Item[] = [];

    ctx.clearRect(0, 0, width, height);

    // Central mass — flat fill, no glow, no gradient.
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 0.985, 0, TAU);
    ctx.fillStyle = `rgba(${INK}, 0.055)`;
    ctx.fill();

    // Rings, drawn segment by segment so depth reads correctly.
    rings.forEach((ring) => {
      for (let i = 0; i < ring.length - 1; i += 1) {
        const a = rotate(ring[i], angle, TILT);
        const b = rotate(ring[i + 1], angle, TILT);
        const pa = project(a, radius, cx, cy);
        const pb = project(b, radius, cx, cy);
        const z = (a.z + b.z) / 2;
        const near = (z + 1) / 2;
        items.push({
          z,
          draw: () => {
            ctx.beginPath();
            ctx.moveTo(pa.x, pa.y);
            ctx.lineTo(pb.x, pb.y);
            ctx.strokeStyle = `rgba(${INK}, ${0.06 + near * 0.3})`;
            ctx.lineWidth = 0.9 + near * 0.9;
            ctx.stroke();
          },
        });
      }
    });

    // Particle shell, forming from a scattered field.
    particles.forEach((p) => {
      const progress = reduceMotion
        ? 1
        : easeOutCubic(Math.min(1, Math.max(0, (elapsed - 120 - p.delay) / 900)));
      const point = rotate({ x: p.bx, y: p.by, z: p.bz }, angle, TILT);
      const proj = project(point, radius, cx, cy);
      const scatterX = cx + p.sx * radius * 1.35;
      const scatterY = cy + p.sy * radius * 1.35;
      const x = scatterX + (proj.x - scatterX) * progress;
      const y = scatterY + (proj.y - scatterY) * progress;
      const near = (point.z + 1) / 2;
      const alpha = (p.accent ? 0.92 : 0.22 + near * 0.68) * (0.3 + progress * 0.7);
      const size =
        (2.4 + near * 3) * p.scale * (0.6 + progress * 0.4) * (p.accent ? 1.25 : 1);
      const colour = p.accent ? ACCENT : INK;

      items.push({
        z: point.z,
        draw: () => {
          ctx.fillStyle = `rgba(${colour}, ${alpha})`;
          ctx.fillRect(x - size / 2, y - size / 2, size, size);
        },
      });
    });

    // Solid satellites riding the drawn rings.
    satellites.forEach((sat) => {
      const def = ringDefs[sat.plane];
      const local = ringPoint(def, sat.phase + time * sat.speed);
      const point = rotate(local, angle, TILT);
      const proj = project(point, radius, cx, cy);
      const size = sat.size * radius * proj.depth;
      const near = (point.z + 1) / 2;

      items.push({
        z: point.z,
        draw: () => {
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, size, 0, TAU);
          ctx.fillStyle = sat.accent
            ? `rgba(${ACCENT}, ${0.72 + near * 0.28})`
            : `rgba(${INK}, ${0.55 + near * 0.45})`;
          ctx.fill();
        },
      });
    });

    items.sort((a, b) => a.z - b.z);
    items.forEach((item) => item.draw());
  };

  const loop = (time: number) => {
    if (!startTime) startTime = time;
    drawFrame(time);
    frame = requestAnimationFrame(loop);
  };

  const stop = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
  };

  const start = () => {
    stop();
    if (reduceMotion) {
      drawFrame(performance.now());
      return;
    }
    if (!visible || document.hidden) return;
    frame = requestAnimationFrame(loop);
  };

  build();
  start();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      });
    },
    { threshold: 0.02 }
  );
  observer.observe(canvas);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });

  motionQuery.addEventListener('change', (event) => {
    reduceMotion = event.matches;
    start();
  });

  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      build();
      startTime = performance.now() - 6000;
      drawFrame(performance.now());
      start();
    }, 140);
  });
}
