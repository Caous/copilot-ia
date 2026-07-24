import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/shared/lib/gsap";
import "./NeuralNet.css";

/**
 * Visual de IA do Manifesto — uma rede neural viva, desenhada em canvas.
 *
 * Conceito: camadas de neurônios conectadas (entrada → ocultas → saída),
 * com PULSOS de dados viajando pelas conexões — a "IA processando".
 * No fim da rede, os pulsos acendem o neurônio de saída: a obra é
 * construída a partir do que entra (trash in, trash out).
 *
 * Sem foto, sem dependência externa: só matemática e o tema do site.
 * Reduced-motion: rede estática, sem pulsos.
 */
export function NeuralNet() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduced = prefersReducedMotion();

    const MINT = "52, 240, 180";
    const ULTRA = "111, 107, 255";
    const TEXT = "207, 216, 227";

    // Camadas: entrada(4) → oculta(6) → oculta(5) → saída(3)
    const LAYERS = [4, 6, 5, 3];
    let nodes = [];
    let edges = [];
    let pulses = [];
    let W = 0;
    let H = 0;
    let raf = 0;
    let running = true;

    function build() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes = [];
      edges = [];
      const padX = W * 0.12;
      const padY = H * 0.14;

      LAYERS.forEach((count, li) => {
        const x = padX + (li / (LAYERS.length - 1)) * (W - padX * 2);
        for (let ni = 0; ni < count; ni++) {
          const y = padY + ((ni + 0.5) / count) * (H - padY * 2);
          nodes.push({ x, y, layer: li, glow: 0 });
        }
      });

      // conecta cada nó ao da camada seguinte
      nodes.forEach((a, ai) => {
        nodes.forEach((b, bi) => {
          if (b.layer === a.layer + 1) edges.push({ a: ai, b: bi });
        });
      });
    }

    function spawnPulse() {
      // nasce numa aresta aleatória saindo da camada 0
      const first = edges.filter((e) => nodes[e.a].layer === 0);
      const start = first[Math.floor(Math.random() * first.length)];
      pulses.push({ edge: start, t: 0, speed: 0.006 + Math.random() * 0.006 });
    }

    function advancePulse(p) {
      p.t += p.speed;
      if (p.t < 1) return true;
      // chegou no nó: acende e segue por uma aresta da próxima camada
      const arrived = p.edge.b;
      nodes[arrived].glow = 1;
      const nexts = edges.filter((e) => e.a === arrived);
      if (!nexts.length) return false; // saída alcançada
      p.edge = nexts[Math.floor(Math.random() * nexts.length)];
      p.t = 0;
      return true;
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // conexões
      ctx.lineWidth = 1;
      for (const e of edges) {
        const a = nodes[e.a];
        const b = nodes[e.b];
        ctx.strokeStyle = `rgba(${TEXT}, 0.10)`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // pulsos (dados viajando)
      for (const p of pulses) {
        const a = nodes[p.edge.a];
        const b = nodes[p.edge.b];
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        ctx.fillStyle = `rgba(${MINT}, 0.95)`;
        ctx.shadowColor = `rgba(${MINT}, 0.9)`;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(x, y, 2.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // neurônios
      for (const n of nodes) {
        const isOut = n.layer === LAYERS.length - 1;
        const base = isOut ? ULTRA : TEXT;
        const r = isOut ? 6 : 4.5;
        // halo quando um pulso passou
        if (n.glow > 0.02) {
          ctx.fillStyle = `rgba(${MINT}, ${n.glow * 0.35})`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, r + 8 * n.glow, 0, Math.PI * 2);
          ctx.fill();
          n.glow *= 0.94;
        }
        ctx.fillStyle = `rgba(${base}, ${isOut ? 0.9 : 0.55})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function loop() {
      if (!running) return;
      pulses = pulses.filter(advancePulse);
      if (pulses.length < 5 && Math.random() < 0.06) spawnPulse();
      draw();
      raf = requestAnimationFrame(loop);
    }

    function onVisibility() {
      running = document.visibilityState === "visible" && !reduced;
      if (running) raf = requestAnimationFrame(loop);
      else cancelAnimationFrame(raf);
    }

    // ResizeObserver: constrói quando o canvas GANHA tamanho de fato
    // (no mount o layout pode ainda não ter resolvido → clientWidth 0).
    const ro = new ResizeObserver(() => {
      if (canvas.clientWidth > 0) {
        build();
        draw(); // 1 frame imediato — rede visível mesmo antes do rAF
      }
    });
    ro.observe(canvas);

    build();
    draw();
    document.addEventListener("visibilitychange", onVisibility);

    if (!reduced) {
      spawnPulse();
      raf = requestAnimationFrame(loop);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="neuralnet">
      <canvas
        ref={canvasRef}
        className="neuralnet__canvas"
        role="img"
        aria-label="Rede neural animada: dados entram, atravessam as camadas e produzem a saída"
      />
      <div className="neuralnet__labels" aria-hidden="true">
        <span>entrada</span>
        <span>processamento</span>
        <span>obra</span>
      </div>
    </div>
  );
}
