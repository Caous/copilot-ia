import { useRef } from "react";
import { useGsap } from "@/shared/hooks/useGsap";

/**
 * Animação de entrada do hero (page-load).
 * Uma timeline orquestra a revelação: eyebrow → linhas do título →
 * parágrafo → ações. Um único momento coreografado bate mais forte
 * que vários efeitos soltos.
 *
 * Retorna a ref que deve ser posta no container do hero (escopo).
 */
export function useHeroIntro() {
  const scope = useRef(null);

  useGsap(
    ({ gsap, reduced }) => {
      const q = gsap ? gsap.utils.selector(scope) : null;

      // Sem GSAP ou reduced-motion: garante tudo visível.
      if (!gsap || reduced) {
        if (scope.current) {
          scope.current
            .querySelectorAll("[data-anim]")
            .forEach((el) => (el.style.opacity = "1"));
        }
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1 },
      });

      tl.from(q("[data-anim='eyebrow']"), { opacity: 0, y: 16 })
        .from(
          q("[data-anim='line']"),
          { opacity: 0, yPercent: 120, stagger: 0.12 },
          "-=0.6",
        )
        .from(q("[data-anim='lead']"), { opacity: 0, y: 20 }, "-=0.5")
        .from(
          q("[data-anim='actions'] > *"),
          { opacity: 0, y: 16, stagger: 0.1 },
          "-=0.5",
        )
        .from(q("[data-anim='meta']"), { opacity: 0, y: 16 }, "-=0.6");
    },
    scope,
    [],
  );

  return scope;
}
