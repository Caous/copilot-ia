import { useState } from "react";
import { Section } from "@/shared/components/Section";
import { Eyebrow } from "@/shared/components/Eyebrow";
import { Button } from "@/shared/components/Button";
import { Reveal } from "@/shared/components/Reveal";
import "./Contato.css";

// Cria as pastas onde o Claude Code procura agentes, skills e comandos.
const INSTALL = "mkdir -p ~/.claude/agents ~/.claude/skills ~/.claude/commands";

const PASSOS = [
  { n: "01", t: "Copie na Biblioteca", d: "Pegue os agentes, filosofias e comandos que quer usar." },
  { n: "02", t: "Cole em ~/.claude", d: "Agentes em agents/, filosofias em skills/, comandos em commands/." },
  { n: "03", t: "Rode a esteira", d: "Reinicie o Claude Code e comece com /generate-pbi." },
];

/**
 * Feature CONTATO — fecha a página convidando a instalar o squad.
 * O comando de setup tem botão de copiar com feedback imediato.
 */
export function Contato() {
  const [copied, setCopied] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(INSTALL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Section id="contato" dark className="cta">
      <Reveal className="cta__inner" y={28}>
        <Eyebrow index="03">Começar</Eyebrow>
        <h2 className="cta__title">
          Instale o squad em <em>minutos</em>.
        </h2>
        <p className="cta__sub">
          O Claude Code lê agentes, skills e comandos da pasta{" "}
          <code>~/.claude</code>. Crie as pastas, cole os arquivos da Biblioteca
          e pronto — vale para todos os seus projetos.
        </p>

        <div className="cta__clone">
          <code className="cta__cmd">{INSTALL}</code>
          <button className="cta__copy" onClick={copiar} aria-live="polite">
            {copied ? "Copiado ✓" : "Copiar"}
          </button>
        </div>

        <ol className="cta__steps">
          {PASSOS.map((p) => (
            <li key={p.n} className="cta__step">
              <span className="cta__step-n">{p.n}</span>
              <div>
                <h3 className="cta__step-t">{p.t}</h3>
                <p className="cta__step-d">{p.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="cta__actions">
          <Button href="#biblioteca">Ir para a Biblioteca</Button>
          <Button
            variant="ghost"
            href="https://github.com/Caous"
            target="_blank"
            rel="noreferrer"
          >
            Ver no GitHub
          </Button>
          <Button
            variant="ghost"
            href="https://www.linkedin.com/in/gusta-nascimento/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Button>
          <Button variant="ghost" href="mailto:caous.g@gmail.com">
            E-mail
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
