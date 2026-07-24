import { useEffect } from "react";
import { getGsap, prefersReducedMotion } from "@/shared/lib/gsap";

/**
 * Ativa o smooth scroll do Lenis (carregado via CDN) e o sincroniza
 * com o ScrollTrigger do GSAP, para que as animações de scroll fiquem
 * perfeitamente atreladas ao movimento suave.
 *
 * Se o Lenis não carregou ou o usuário pediu reduced-motion, não faz
 * nada — o scroll nativo do navegador assume. Degradação graciosa.
 */
export function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const Lenis = window.Lenis;
    if (!Lenis || prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const lib = getGsap();
    let rafId;

    if (lib?.ScrollTrigger) {
      lenis.on("scroll", lib.ScrollTrigger.update);
      const tick = (time) => lenis.raf(time * 1000);
      lib.gsap.ticker.add(tick);
      lib.gsap.ticker.lagSmoothing(0);
      return () => {
        lib.gsap.ticker.remove(tick);
        lenis.destroy();
      };
    }

    // Sem GSAP: roda o loop do Lenis manualmente.
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return children;
}
