import { useEffect, useRef, useState, useCallback } from 'react';

interface CinematicIntroProps {
  onComplete: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const electricCanvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const fusionRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const [gsapLoaded, setGsapLoaded] = useState(false);
  const gsapRef = useRef<any>(null);

  // Particle state refs
  const particlesRef = useRef<any[]>([]);
  const explosionRef = useRef<any[]>([]);
  const ambientRef = useRef<any[]>([]);
  const electricArcsRef = useRef<any[]>([]);
  const stateRef = useRef({ particlesActive: false, fusionComplete: false, electricActive: false, W: 0, H: 0 });

  // Load GSAP from CDN
  useEffect(() => {
    if ((window as any).gsap) {
      gsapRef.current = (window as any).gsap;
      setGsapLoaded(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
    script.onload = () => {
      gsapRef.current = (window as any).gsap;
      setGsapLoaded(true);
    };
    document.head.appendChild(script);
  }, []);

  // ============ PARTICLE CLASSES ============
  const createFusionParticle = useCallback(() => {
    const { W, H } = stateRef.current;
    const side = Math.floor(Math.random() * 4);
    let x = 0, y = 0;
    switch (side) {
      case 0: x = Math.random() * W; y = -30; break;
      case 1: x = W + 30; y = Math.random() * H; break;
      case 2: x = Math.random() * W; y = H + 30; break;
      case 3: x = -30; y = Math.random() * H; break;
    }
    const colors = [
      { r: 139, g: 92, b: 246 }, { r: 236, g: 72, b: 153 },
      { r: 249, g: 115, b: 22 }, { r: 56, g: 189, b: 248 }, { r: 129, g: 140, b: 248 },
    ];
    const weights = [0.3, 0.25, 0.25, 0.1, 0.1];
    let r = Math.random(), c = 0, color = colors[0];
    for (let i = 0; i < weights.length; i++) { c += weights[i]; if (r <= c) { color = colors[i]; break; } }

    return {
      x, y, originX: x, originY: y,
      targetX: W / 2 + (Math.random() - 0.5) * 180,
      targetY: H / 2 + (Math.random() - 0.5) * 50,
      size: Math.random() * 2.5 + 1,
      speed: Math.random() * 0.012 + 0.007,
      progress: 0, opacity: Math.random() * 0.7 + 0.3,
      trail: [] as { x: number; y: number }[],
      maxTrail: Math.floor(Math.random() * 6) + 3,
      arrived: false, color,
      cpX: (x + W / 2) / 2 + (Math.random() - 0.5) * 500,
      cpY: (y + H / 2) / 2 + (Math.random() - 0.5) * 350,
    };
  }, []);

  const createBurstParticle = useCallback((cx: number, cy: number) => {
    const a = Math.random() * Math.PI * 2;
    const s = Math.random() * 8 + 3;
    const cs = ['139,92,246', '236,72,153', '249,115,22', '56,189,248'];
    return {
      x: cx, y: cy, vx: Math.cos(a) * s, vy: Math.sin(a) * s,
      size: Math.random() * 3 + 1, life: 1, decay: Math.random() * 0.02 + 0.008,
      color: cs[Math.floor(Math.random() * cs.length)],
    };
  }, []);

  const createAmbientParticle = useCallback(() => {
    const { W, H } = stateRef.current;
    return {
      x: Math.random() * (W || window.innerWidth),
      y: Math.random() * (H || window.innerHeight),
      size: Math.random() * 1.2 + 0.4,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.12 + 0.03,
      color: Math.random() > 0.5 ? '139,92,246' : '249,115,22',
    };
  }, []);

  // ============ ELECTRIC ARC ============
  const createElectricArc = useCallback((x1: number, y1: number, x2: number, y2: number) => ({
    x1, y1, x2, y2, life: 1, decay: Math.random() * 0.03 + 0.02,
    segments: Math.floor(Math.random() * 4) + 3,
  }), []);

  // ============ RENDER LOOP ============
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const elecCanvas = electricCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const elecCtx = elecCanvas?.getContext('2d');
    if (!ctx) return;
    const { W, H, particlesActive, fusionComplete, electricActive } = stateRef.current;

    ctx.clearRect(0, 0, W, H);

    // Ambient
    ambientRef.current.forEach((p) => {
      p.x += p.speedX; p.y += p.speedY;
      if (p.x < -10 || p.x > W + 10 || p.y < -10 || p.y > H + 10) {
        p.x = Math.random() * W; p.y = Math.random() * H;
      }
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.opacity})`; ctx.fill();
    });

    // Fusion particles
    if (particlesActive) {
      let allArrived = true;
      particlesRef.current.forEach((p) => {
        if (!p.arrived) {
          p.progress += p.speed;
          if (p.progress >= 1) { p.progress = 1; p.arrived = true; }
          const t = p.progress;
          const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
          p.x = (1 - e) * (1 - e) * p.originX + 2 * (1 - e) * e * p.cpX + e * e * p.targetX;
          p.y = (1 - e) * (1 - e) * p.originY + 2 * (1 - e) * e * p.cpY + e * e * p.targetY;
          p.trail.push({ x: p.x, y: p.y });
          if (p.trail.length > p.maxTrail) p.trail.shift();
          allArrived = false;
        }
        // Draw trail
        if (p.trail.length > 1) {
          for (let i = 1; i < p.trail.length; i++) {
            const a = (i / p.trail.length) * p.opacity * 0.3;
            ctx.beginPath(); ctx.moveTo(p.trail[i - 1].x, p.trail[i - 1].y);
            ctx.lineTo(p.trail[i].x, p.trail[i].y);
            ctx.strokeStyle = `rgba(${p.color.r},${p.color.g},${p.color.b},${a})`;
            ctx.lineWidth = p.size * 0.4; ctx.stroke();
          }
        }
        // Draw glow + core
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        g.addColorStop(0, `rgba(${p.color.r},${p.color.g},${p.color.b},${p.opacity * 0.5})`);
        g.addColorStop(1, `rgba(${p.color.r},${p.color.g},${p.color.b},0)`);
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill();
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r},${p.color.g},${p.color.b},${p.opacity})`; ctx.fill();
      });

      if (allArrived && !fusionComplete && particlesRef.current.length > 0) {
        stateRef.current.fusionComplete = true;
        triggerFusion();
      }
    }

    // Explosion particles
    explosionRef.current = explosionRef.current.filter((p) => {
      p.x += p.vx; p.y += p.vy; p.vx *= 0.97; p.vy *= 0.97; p.life -= p.decay;
      if (p.life <= 0) return false;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.life * 0.5})`; ctx.fill();
      return true;
    });

    // Electric arcs
    if (electricActive && elecCtx && elecCanvas) {
      elecCtx.clearRect(0, 0, elecCanvas.width, elecCanvas.height);
      electricArcsRef.current = electricArcsRef.current.filter((arc) => {
        arc.life -= arc.decay;
        if (arc.life <= 0) return false;
        const points = [{ x: arc.x1, y: arc.y1 }];
        for (let i = 1; i < arc.segments; i++) {
          const t = i / arc.segments;
          points.push({
            x: arc.x1 + (arc.x2 - arc.x1) * t + (Math.random() - 0.5) * 8,
            y: arc.y1 + (arc.y2 - arc.y1) * t + (Math.random() - 0.5) * 8,
          });
        }
        points.push({ x: arc.x2, y: arc.y2 });
        // Glow
        elecCtx.beginPath(); elecCtx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) elecCtx.lineTo(points[i].x, points[i].y);
        elecCtx.strokeStyle = `rgba(249,115,22,${arc.life * 0.3})`; elecCtx.lineWidth = 3; elecCtx.stroke();
        // Core
        elecCtx.beginPath(); elecCtx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) elecCtx.lineTo(points[i].x, points[i].y);
        elecCtx.strokeStyle = `rgba(255,255,255,${arc.life * 0.8})`; elecCtx.lineWidth = 1; elecCtx.stroke();
        return true;
      });
    }

    animFrameRef.current = requestAnimationFrame(render);
  }, []);

  // ============ FUSION TRIGGER ============
  const triggerFusion = useCallback(() => {
    const gsap = gsapRef.current;
    if (!gsap) return;
    const { W, H } = stateRef.current;

    stateRef.current.electricActive = false;

    // Explosion
    for (let i = 0; i < 120; i++) explosionRef.current.push(createBurstParticle(W / 2, H / 2));

    // Flash
    const flash = document.createElement('div');
    flash.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(circle,rgba(139,92,246,0.3),transparent 60%);z-index:4;pointer-events:none;';
    containerRef.current?.appendChild(flash);
    gsap.to(flash, { opacity: 0, duration: 0.8, onComplete: () => flash.remove() });

    // Fade logo and text
    gsap.to(logoRef.current, { opacity: 0, scale: 0.5, duration: 0.5 });
    gsap.to(textRef.current, { opacity: 0, duration: 0.3 });

    // Fade particles
    const fadeObj = { val: 1 };
    gsap.to(fadeObj, { val: 0, duration: 1.2, onUpdate: () => {
      particlesRef.current.forEach((p) => (p.opacity *= 0.94));
    }});

    // Reveal fusion text
    const fusionEl = fusionRef.current;
    if (fusionEl) {
      gsap.to(fusionEl, { opacity: 1, duration: 0.7, delay: 0.2 });
      const brandName = fusionEl.querySelector('.brand-name');
      const tagline = fusionEl.querySelector('.tagline');
      if (brandName) gsap.fromTo(brandName, { scale: 0.7, filter: 'blur(12px)' }, { scale: 1, filter: 'blur(0px)', duration: 0.7, delay: 0.25, ease: 'back.out(1.5)' });
      if (tagline) {
        gsap.set(tagline, { opacity: 0, y: 15 });
        gsap.to(tagline, { opacity: 1, y: 0, duration: 0.6, delay: 0.9 });
      }
    }

    // Complete after pause
    setTimeout(() => onComplete(), 1800);
  }, [onComplete, createBurstParticle]);

  // ============ ELECTRIC SPAWNER ============
  const spawnElectricArcs = useCallback(() => {
    const nodes = document.querySelectorAll('.e-node');
    const logoEl = logoRef.current;
    if (!logoEl) return;
    const lw = logoEl.offsetWidth || 160;
    const lh = logoEl.offsetHeight || 160;

    const positions: { x: number; y: number }[] = [];
    nodes.forEach((n) => {
      const el = n as HTMLElement;
      positions.push({
        x: (parseFloat(el.style.left) / 100) * lw,
        y: (parseFloat(el.style.top) / 100) * lh,
      });
    });

    const arcInterval = setInterval(() => {
      if (!stateRef.current.electricActive) { clearInterval(arcInterval); return; }
      const i = Math.floor(Math.random() * positions.length);
      let j = Math.floor(Math.random() * positions.length);
      while (j === i) j = Math.floor(Math.random() * positions.length);
      const dist = Math.hypot(positions[i].x - positions[j].x, positions[i].y - positions[j].y);
      if (dist < 80) {
        electricArcsRef.current.push(createElectricArc(positions[i].x, positions[i].y, positions[j].x, positions[j].y));
      }
    }, 60);
  }, [createElectricArc]);

  // ============ SETUP TEXT ============
  const setupText = useCallback(() => {
    const container = textRef.current;
    if (!container) return;
    container.innerHTML = '';
    const text = 'Continuous Improvement';
    const highlights = [0, 11]; // C and I
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      if (text[i] === ' ') {
        span.style.width = '0.3em';
        span.innerHTML = '&nbsp;';
        span.className = 'letter space';
      } else {
        span.textContent = text[i];
        span.className = 'letter';
        if (highlights.includes(i)) {
          span.className = 'letter highlight';
          span.style.background = 'linear-gradient(135deg, #8B5CF6, #F97316)';
          span.style.webkitBackgroundClip = 'text';
          span.style.webkitTextFillColor = 'transparent';
          span.style.backgroundClip = 'text';
          span.style.fontWeight = '900';
        }
      }
      container.appendChild(span);
    }
  }, []);

  // ============ MAIN ANIMATION ============
  useEffect(() => {
    if (!gsapLoaded) return;
    const gsap = gsapRef.current;
    if (!gsap) return;

    const W = window.innerWidth;
    const H = window.innerHeight;
    stateRef.current = { particlesActive: false, fusionComplete: false, electricActive: false, W, H };

    // Setup canvas
    const canvas = canvasRef.current;
    const elecCanvas = electricCanvasRef.current;
    if (canvas) { canvas.width = W; canvas.height = H; }
    if (elecCanvas) { elecCanvas.width = 160; elecCanvas.height = 160; }

    // Init ambient particles
    ambientRef.current = [];
    for (let i = 0; i < 50; i++) ambientRef.current.push(createAmbientParticle());

    // Start render
    animFrameRef.current = requestAnimationFrame(render);

    // Setup text
    setupText();

    // Reset states
    particlesRef.current = [];
    explosionRef.current = [];
    electricArcsRef.current = [];

    const logoEl = logoRef.current;
    const fusionEl = fusionRef.current;
    const textEl = textRef.current;

    gsap.set(logoEl, { opacity: 0, scale: 0.4, rotation: -15 });
    gsap.set(fusionEl, { opacity: 0 });

    const nodes = document.querySelectorAll('.e-node');
    nodes.forEach((n) => gsap.set(n, { opacity: 0, scale: 0 }));

    // Timeline
    const tl = gsap.timeline({ delay: 0.3 });

    // 1. Logo entrance
    tl.to(logoEl, { opacity: 1, scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.3)' });

    // 2. Node pulse wave 1
    tl.to(nodes, { opacity: 1, scale: 1, duration: 0.12, stagger: { each: 0.04, from: 'random' }, ease: 'power2.out' }, '-=0.2');
    tl.to('.e-node .ring', { opacity: 1, scale: 1.5, duration: 0.3, stagger: { each: 0.04, from: 'random' }, ease: 'power2.out' }, '-=0.6');
    tl.to('.e-node .ring', { opacity: 0, scale: 2, duration: 0.4, stagger: { each: 0.04, from: 'random' } }, '-=0.3');

    // 3. Electric connections
    tl.call(() => {
      stateRef.current.electricActive = true;
      spawnElectricArcs();
    }, undefined, '-=0.2');

    // Node wave 2
    tl.to(nodes, { opacity: 0.4, scale: 0.8, duration: 0.2, stagger: { each: 0.03, from: 'center' } }, '-=0.1');
    tl.to(nodes, { opacity: 1, scale: 1.2, duration: 0.15, stagger: { each: 0.03, from: 'edges' } });
    tl.to('.e-node .ring', { opacity: 0.8, scale: 1.3, duration: 0.2, stagger: { each: 0.03, from: 'edges' } }, '-=0.3');
    tl.to('.e-node .ring', { opacity: 0, scale: 2.5, duration: 0.3 }, '-=0.1');

    // Fade nodes
    tl.to(nodes, { opacity: 0, scale: 0, duration: 0.4, stagger: { each: 0.02, from: 'random' }, delay: 0.3 });

    // Logo float
    gsap.to(logoEl, { y: -8, duration: 2, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 });

    // 4. Letters type in
    const letters = textEl?.querySelectorAll('.letter') || [];
    tl.to(letters, { opacity: 1, duration: 0.04, stagger: 0.035, ease: 'none' }, '-=0.3');
    tl.to({}, { duration: 0.4 });

    // 5. Highlight C and I
    const highlighted = textEl?.querySelectorAll('.letter.highlight') || [];
    const others = textEl?.querySelectorAll('.letter:not(.highlight)') || [];
    tl.to(highlighted, { scale: 1.3, duration: 0.3, ease: 'power2.out' });
    tl.to(others, { opacity: 0, y: -8, duration: 0.5, stagger: 0.015, ease: 'power2.in' }, '-=0.1');
    tl.to(highlighted, { scale: 1.5, duration: 0.4, ease: 'power2.inOut' }, '-=0.2');

    // 6. Spawn fusion particles
    tl.call(() => {
      stateRef.current.particlesActive = true;
      let spawned = 0;
      const total = 130;
      const iv = setInterval(() => {
        const batch = Math.min(10, total - spawned);
        for (let i = 0; i < batch; i++) particlesRef.current.push(createFusionParticle());
        spawned += batch;
        if (spawned >= total) clearInterval(iv);
      }, 40);
    });

    // Fade C/I and logo during particle convergence
    tl.to(highlighted, { opacity: 0, scale: 2.5, duration: 0.8, delay: 0.5, ease: 'power2.in' });
    tl.to(logoEl, { opacity: 0, scale: 0.5, duration: 0.8, ease: 'power2.in' }, '<');

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      gsap.killTweensOf('*');
    };
  }, [gsapLoaded, render, setupText, spawnElectricArcs, createFusionParticle, createAmbientParticle, onComplete]);

  // Node positions for the hexagonal mesh
  const nodePositions = [
    // Outer hex
    { top: '1%', left: '48%' }, { top: '14%', left: '80%' }, { top: '14%', left: '16%' },
    { top: '50%', left: '96%' }, { top: '50%', left: '4%' }, { top: '86%', left: '80%' },
    { top: '86%', left: '16%' }, { top: '99%', left: '48%' },
    // Mid ring
    { top: '8%', left: '64%' }, { top: '8%', left: '32%' }, { top: '32%', left: '88%' },
    { top: '32%', left: '10%' }, { top: '68%', left: '88%' }, { top: '68%', left: '10%' },
    { top: '92%', left: '64%' }, { top: '92%', left: '32%' },
    // Inner hex
    { top: '26%', left: '48%' }, { top: '36%', left: '68%' }, { top: '36%', left: '28%' },
    { top: '50%', left: '76%' }, { top: '50%', left: '22%' }, { top: '64%', left: '68%' },
    { top: '64%', left: '28%' }, { top: '74%', left: '48%' },
    // Center cluster
    { top: '50%', left: '50%' }, { top: '42%', left: '40%' }, { top: '42%', left: '58%' },
    { top: '58%', left: '40%' }, { top: '58%', left: '58%' },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#030712' }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-[2] pointer-events-none" />

      {/* Logo with electric nodes */}
      <div ref={logoRef} className="relative z-[3] w-[160px] h-[160px] mb-10" style={{ opacity: 0 }}>
        <img
          src="/logo.png"
          alt="CIFusion"
          className="w-full h-full object-contain"
          style={{ filter: 'drop-shadow(0 0 40px rgba(139,92,246,0.5))' }}
        />
        {/* Electric nodes */}
        <div className="absolute inset-0 pointer-events-none">
          {nodePositions.map((pos, i) => (
            <div
              key={i}
              className="e-node absolute"
              style={{ top: pos.top, left: pos.left, width: 5, height: 5, opacity: 0, transform: 'scale(0)' }}
            >
              <div className="w-full h-full rounded-full bg-white" />
              <div
                className="ring absolute top-1/2 left-1/2 w-4 h-4 rounded-full border border-orange-500/60"
                style={{ transform: 'translate(-50%,-50%)', opacity: 0 }}
              />
            </div>
          ))}
        </div>
        <canvas
          ref={electricCanvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
        />
      </div>

      {/* "Continuous Improvement" text */}
      <div className="relative z-[3] text-center h-[70px] flex items-center justify-center">
        <div
          ref={textRef}
          style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontSize: 'clamp(2rem, 4.5vw, 3.6rem)',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            color: '#E2E8F0',
            whiteSpace: 'nowrap',
          }}
        />
      </div>

      {/* Fusion brand reveal */}
      <div
        ref={fusionRef}
        className="absolute z-[5] top-1/2 left-1/2 text-center"
        style={{ transform: 'translate(-50%,-50%)', opacity: 0 }}
      >
        <div
          className="brand-name"
          style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontSize: 'clamp(3.2rem, 8vw, 7rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 30%, #F97316 60%, #8B5CF6 100%)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'shimmer 4s ease infinite',
            lineHeight: 1.1,
          }}
        >
          CIFusion.ai
        </div>
        <div
          className="tagline"
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 'clamp(0.7rem, 1.4vw, 0.95rem)',
            fontWeight: 400,
            color: 'rgba(148,163,184,0.8)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginTop: 18,
            opacity: 0,
          }}
        >
          Where Ideas Fuse Into Impact
        </div>
      </div>

      {/* Shimmer keyframe */}
      <style>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
