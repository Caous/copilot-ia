import { useEffect } from "react";
import { getGsap, prefersReducedMotion } from "@/shared/lib/gsap";

/**
 * Executa uma animação GSAP arbitrária dentro de um escopo isolado
 * (gsap.context), com limpeza automática ao desmontar.
 *
 * O callback recebe ({ gsap, ScrollTrigger, reduced }). Se o GSAP não
 * estiver disponível, o callback ainda roda com gsap=null para você
 * aplicar um fallback manual se quiser.
 *
 * @param {(api: {gsap: any, ScrollTrigger: any, reduced: boolean}) => void} setup
 * @param {import("react").RefObject<HTMLElement>} scopeRef  escopo do context
 * @param {any[]} deps  dependências do efeito
 */
export function useGsap(setup, scopeRef, deps = []) {
  useEffect(() => {
    const lib = getGsap();
    const reduced = prefersReducedMotion();

    if (!lib) {
      setup({ gsap: null, ScrollTrigger: null, reduced });
      return;
    }

    const { gsap, ScrollTrigger } = lib;
    const ctx = gsap.context(
      () => setup({ gsap, ScrollTrigger, reduced }),
      scopeRef?.current ?? undefined,
    );
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
