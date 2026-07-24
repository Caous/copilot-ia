/* =============================================================
   WRAPPER DO GSAP (carregado via CDN)
   O GSAP, o ScrollTrigger e o Lenis vêm de <script> no index.html,
   expostos em window.*. Este módulo centraliza o acesso a eles para
   que os componentes NUNCA falem com window.* diretamente.
   Documentação: /docs/06-animacoes-gsap.md
   ============================================================= */

let registered = false;

/**
 * Retorna { gsap, ScrollTrigger } se as libs do CDN já carregaram,
 * ou null se ainda não (ou se o usuário está sem JS de efeito).
 * Registra o plugin ScrollTrigger uma única vez.
 */
export function getGsap() {
  if (typeof window === "undefined") return null;

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap) return null;

  if (ScrollTrigger && !registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return { gsap, ScrollTrigger: ScrollTrigger ?? null };
}

/** true quando o usuário pediu menos movimento no SO. */
export function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
