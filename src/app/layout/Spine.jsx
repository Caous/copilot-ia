import { useRef } from "react";
import { useGsap } from "@/shared/hooks/useGsap";
import "./Spine.css";

/**
 * ASSINATURA VISUAL do projeto.
 *
 * Uma linha vertical em SVG que se DESENHA conforme a página rola,
 * usando a técnica de `stroke-dasharray` / `stroke-dashoffset`:
 * o traço inteiro começa "escondido" (offset = comprimento total) e vai
 * sendo revelado (offset → 0) proporcionalmente ao progresso do scroll.
 *
 * Semântica: a linha conecta os nós de cada feature — é a arquitetura
 * feature-based desenhada, não um enfeite. Cada nó acende quando a
 * linha o alcança.
 *
 * Documentação: /docs/06-animacoes-gsap.md
 */
export function Spine() {
  const scope = useRef(null);
  const pathRef = useRef(null);

  useGsap(
    ({ gsap, ScrollTrigger, reduced }) => {
      const path = pathRef.current;
      if (!path) return;

      const length = path.getTotalLength();
      path.style.strokeDasharray = String(length);

      // Sem animação: mostra a linha inteira já desenhada.
      if (!gsap || !ScrollTrigger || reduced) {
        path.style.strokeDashoffset = "0";
        return;
      }

      path.style.strokeDashoffset = String(length);
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });
    },
    scope,
    [],
  );

  return (
    <div className="spine" ref={scope} aria-hidden="true">
      <svg
        className="spine__svg"
        viewBox="0 0 40 1000"
        preserveAspectRatio="xMidYMin meet"
        fill="none"
      >
        <path
          ref={pathRef}
          className="spine__path"
          d="M20 0 C20 120 8 180 8 260 C8 340 32 400 32 500 C32 600 8 660 8 760 C8 860 20 900 20 1000"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
