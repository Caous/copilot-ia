import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/shared/lib/gsap";
import "./Starfield.css";

/**
 * Campo de estrelas em canvas — a atmosfera do tema espacial.
 * Partículas leves com cintilação e deriva lenta.
 *
 * Performance/acessibilidade:
 * - Desenha via rAF só quando a aba está visível.
 * - `prefers-reduced-motion`: renderiza as estrelas estáticas (1 frame).
 * - Densidade proporcional à área, com teto (não pesa em telas grandes).
 */
export function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduced = prefersReducedMotion();

    let stars = [];
    let raf = 0;
    let running = true;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(innerWidth * dpr);
      canvas.height = Math.floor(innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(160, Math.floor((innerWidth * innerHeight) / 9000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        r: Math.random() * 1.4 + 0.3,
        tw: Math.random() * Math.PI * 2, // fase da cintilação
        sp: 0.02 + Math.random() * 0.05, // velocidade de deriva
      }));
    }

    function draw(t) {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (const s of stars) {
        const alpha = reduced
          ? 0.55
          : 0.35 + 0.45 * Math.abs(Math.sin(s.tw + t * 0.0012));
        ctx.globalAlpha = alpha;
        ctx.fillStyle = s.r > 1.1 ? "#8ef5d2" : "#cfd8e3";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        if (!reduced) {
          s.y += s.sp; // deriva vertical lenta
          if (s.y > innerHeight + 2) s.y = -2;
        }
      }
      ctx.globalAlpha = 1;
    }

    function loop(t) {
      if (!running) return;
      draw(t);
      raf = requestAnimationFrame(loop);
    }

    function onVisibility() {
      running = document.visibilityState === "visible" && !reduced;
      if (running) raf = requestAnimationFrame(loop);
      else cancelAnimationFrame(raf);
    }

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    if (reduced) {
      draw(0); // 1 frame estático
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
}
