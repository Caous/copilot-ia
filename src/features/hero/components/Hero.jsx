import { Button } from "@/shared/components/Button";
import { Eyebrow } from "@/shared/components/Eyebrow";
import { useHeroIntro } from "../hooks/useHeroIntro";
import { DevTerminal } from "./DevTerminal";
import "./Hero.css";

/**
 * Feature HERO — a tese da página.
 * Esquerda: a headline. Direita: um terminal com o squad em ação —
 * TI e desenvolvimento de software, sem metáfora.
 */
export function Hero() {
  const scope = useHeroIntro();

  return (
    <section className="hero" id="top" ref={scope}>
      <div className="container hero__grid">
        <div className="hero__inner">
          <div data-anim="eyebrow">
            <Eyebrow>Bem-vindo · AI Dev Squad</Eyebrow>
          </div>

          <h1 className="hero__title">
            <span className="hero__line">
              <span data-anim="line">Descubra o poder da</span>
            </span>
            <span className="hero__line">
              <span data-anim="line">Inteligência Artificial:</span>
            </span>
            <span className="hero__line">
              <span data-anim="line" className="hero__grad">
                estratégia, time de IA e resultados reais.
              </span>
            </span>
          </h1>

          <p className="hero__lead" data-anim="lead">
            Agentes de IA para codar com disciplina de engenharia: uma esteira
            que vai do requisito ao código testado, filosofias que guiam cada
            linha e comandos prontos. Criação de software com IA — e todo o
            material aberto para você copiar.
          </p>

          <div className="hero__actions" data-anim="actions">
            <Button href="#biblioteca">Copiar os arquivos</Button>
            <Button variant="ghost" href="#esteira">
              Ver a esteira
            </Button>
          </div>

          <dl className="hero__meta" data-anim="meta">
            <div>
              <dt>Time de IA</dt>
              <dd>9 agentes</dd>
            </div>
            <div>
              <dt>Esteira</dt>
              <dd>PBI → código</dd>
            </div>
            <div>
              <dt>Base</dt>
              <dd>AC-TDD · 5 Leis</dd>
            </div>
          </dl>
        </div>

        <div className="hero__visual" data-anim="terminal">
          <DevTerminal />
        </div>
      </div>
    </section>
  );
}
