import { useState } from "react";
import { Section } from "@/shared/components/Section";
import { Eyebrow } from "@/shared/components/Eyebrow";
import { Button } from "@/shared/components/Button";
import { Reveal } from "@/shared/components/Reveal";
import "./Contato.css";

// Cria as pastas onde o Claude Code procura agentes, skills e comandos.
const INSTALL = "mkdir -p ~/.claude/agents ~/.claude/skills ~/.claude/commands";

// Árvore de destino — mostra exatamente onde cada tipo de arquivo vai.
const ARVORE = `~/.claude/
├─ agents/       → coder-nextjs.md, reviewer.md, scribe.md …
├─ commands/     → generate-pbi.md, develop.md …
└─ skills/
   └─ tdd-philosophy/
      └─ SKILL.md   ← cada filosofia numa subpasta própria`;

const PASSOS = [
  {
    n: "01",
    t: "Abra o terminal",
    d: "É a janelinha onde você digita comandos. No Windows: aperte a tecla Windows, digite “PowerShell” e abra. No Mac: abra o app “Terminal” (Cmd+Espaço, digite Terminal).",
  },
  {
    n: "02",
    t: "Crie as três pastas",
    d: "O Claude Code procura o que você adiciona numa pasta escondida chamada .claude, dentro da sua pasta de usuário. Cole o comando abaixo no terminal e aperte Enter — ele cria as três pastas de uma vez.",
    code: INSTALL,
    nota: "O ~ significa “sua pasta de usuário” — no Windows é algo como C:\\Users\\SeuNome. As pastas ficam ocultas; isso é normal.",
  },
  {
    n: "03",
    t: "Escolha o que quer na Biblioteca",
    d: "Suba até a Biblioteca (aqui em cima). Cada card tem três botões: “Ver conteúdo” abre o arquivo para você ler, “Copiar markdown” copia o texto todo, e “↓ .md” baixa o arquivo pronto. Pegue os agentes, filosofias e comandos que fizerem sentido para você.",
  },
  {
    n: "04",
    t: "Salve cada arquivo no lugar certo",
    d: "Aqui está o pulo do gato — cada tipo tem seu lugar. Agentes e comandos são arquivos soltos. Já as filosofias (skills) precisam de uma subpasta com o próprio nome, e o arquivo dentro tem que se chamar SKILL.md.",
    tree: ARVORE,
    nota: "Se você usou “↓ .md” para baixar, é só mover o arquivo para a pasta certa. Para as filosofias, crie a subpasta (ex: tdd-philosophy) e renomeie o arquivo para SKILL.md.",
  },
  {
    n: "05",
    t: "Reinicie o Claude Code",
    d: "Feche o Claude Code e abra de novo (ou comece um chat novo). Ele só enxerga os agentes, comandos e skills novos depois de reiniciar — como um programa que precisa reabrir para carregar um plugin.",
  },
  {
    n: "06",
    t: "Rode a esteira",
    d: "Digite / para ver os comandos novos aparecerem na lista. Comece descrevendo o que quer construir com o /generate-pbi. Depois é só seguir o fluxo: validar, gerar as tarefas e desenvolver.",
    code: '/generate-pbi feature "tela de login com e-mail e senha"',
    nota: "Fluxo completo: /generate-pbi → /validate-pbi → /generate-tasks → /develop.",
  },
];

/**
 * Feature CONTATO — fecha a página ensinando, passo a passo, como
 * instalar e usar o squad. Escrito para quem nunca mexeu com isso.
 */
export function Contato() {
  const [copiadoId, setCopiadoId] = useState(null);

  async function copiar(texto, id) {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiadoId(id);
      setTimeout(() => setCopiadoId(null), 1800);
    } catch {
      setCopiadoId(null);
    }
  }

  return (
    <Section id="contato" dark className="cta">
      <Reveal className="cta__inner" y={28}>
        <Eyebrow index="04">Começar</Eyebrow>
        <h2 className="cta__title">
          Instale o squad, <em>passo a passo</em>.
        </h2>
        <p className="cta__sub">
          Você já tem o Claude Code instalado? Então falta pouco. Ele lê agentes,
          skills e comandos de uma pasta chamada <code>~/.claude</code> — e o que
          você colocar lá vale para <strong>todos</strong> os seus projetos. Vamos
          juntos, sem pressa.
        </p>

        <ol className="cta__steps">
          {PASSOS.map((p) => (
            <li key={p.n} className="cta__step">
              <span className="cta__step-n">{p.n}</span>
              <div className="cta__step-body">
                <h3 className="cta__step-t">{p.t}</h3>
                <p className="cta__step-d">{p.d}</p>

                {p.code && (
                  <div className="cta__cmdline">
                    <code className="cta__cmd">{p.code}</code>
                    <button
                      className="cta__copy"
                      onClick={() => copiar(p.code, p.n)}
                      aria-live="polite"
                    >
                      {copiadoId === p.n ? "Copiado ✓" : "Copiar"}
                    </button>
                  </div>
                )}

                {p.tree && (
                  <pre className="cta__tree" aria-label="Onde salvar cada arquivo">
                    <code>{p.tree}</code>
                  </pre>
                )}

                {p.nota && (
                  <p className="cta__nota">
                    <span className="cta__nota-tag">Dica</span>
                    {p.nota}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>

        <p className="cta__fechamento">
          Deu problema ou travou em algum passo? Me chama — respondo.
        </p>

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
