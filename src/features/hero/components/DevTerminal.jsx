import "./DevTerminal.css";

// Sessão exibida no terminal — o fluxo real do squad, resumido.
const LINHAS = [
  { tipo: "cmd", texto: '/generate-pbi feature "menu colapsável"' },
  { tipo: "ok", texto: "PBI criado · 7 critérios de aceite" },
  { tipo: "cmd", texto: "/develop board/ready/PBI-menu.md" },
  { tipo: "info", texto: "coder-nextjs · AC-TDD" },
  { tipo: "red", texto: "RED   sidebar.test.tsx — 8 testes falhando" },
  { tipo: "green", texto: "GREEN 14/14 testes passando" },
  { tipo: "ok", texto: "review APPROVE · quality gate ✓" },
];

/**
 * Visual do hero — uma janela de terminal com o squad em ação:
 * comandos da esteira, ciclo RED→GREEN e o quality gate.
 * Linhas entram em cascata (CSS puro); cursor pisca no prompt final.
 * Com reduced-motion, tudo aparece de uma vez.
 */
export function DevTerminal() {
  return (
    <div className="term" aria-label="Terminal demonstrando a esteira de desenvolvimento com IA">
      <div className="term__bar" aria-hidden="true">
        <span className="term__dot term__dot--r" />
        <span className="term__dot term__dot--y" />
        <span className="term__dot term__dot--g" />
        <span className="term__title">ai-dev-squad — zsh</span>
      </div>

      <div className="term__body">
        {LINHAS.map((l, i) => (
          <p
            key={i}
            className={`term__line term__line--${l.tipo}`}
            style={{ animationDelay: `${0.4 + i * 0.5}s` }}
          >
            {l.tipo === "cmd" && <span className="term__prompt">$ </span>}
            {l.tipo === "ok" && <span className="term__check">✓ </span>}
            {l.tipo === "info" && <span className="term__arrow">→ </span>}
            {l.texto}
          </p>
        ))}
        <p
          className="term__line term__line--cursor"
          style={{ animationDelay: `${0.4 + LINHAS.length * 0.5}s` }}
          aria-hidden="true"
        >
          <span className="term__prompt">$ </span>
          <span className="term__caret" />
        </p>
      </div>
    </div>
  );
}
