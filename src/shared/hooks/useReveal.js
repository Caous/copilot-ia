import { useEffect, useRef } from "react";
import { getGsap, prefersReducedMotion } from "@/shared/lib/gsap";

/**
 * Revela um elemento quando ele entra na viewport (scroll).
 * Uso: const ref = useReveal(); depois <div ref={ref}>.
 *
 * - Sem GSAP ou com reduced-motion: o elemento aparece imediatamente
 *   (nunca deixa conteúdo invisível — degradação graciosa).
 * - Com GSAP: fade + subida suave, disparado pelo ScrollTrigger.
 *
 * @param {object} opts
 * @param {number} opts.y     deslocamento inicial em px (default 24)
 * @param {number} opts.delay atraso em segundos (default 0)
 */
export function useReveal({ y = 24, delay = 0 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const lib = getGsap();
    if (!lib || !lib.ScrollTrigger || prefersReducedMotion()) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const { gsap } = lib;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        },
      );
    });

    return () => ctx.revert();
  }, [y, delay]);

  return ref;
}
