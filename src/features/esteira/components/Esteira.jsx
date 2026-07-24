import { Section } from "@/shared/components/Section";
import { Eyebrow } from "@/shared/components/Eyebrow";
import { Reveal } from "@/shared/components/Reveal";
import { ETAPAS, PRINCIPIO } from "../data/etapas";
import "./Esteira.css";

/**
 * Feature ESTEIRA — explica o pipeline de ponta a ponta e o porquê de
 * cada etapa. Substitui a antiga seção de arquitetura de front-end.
 */
export function Esteira() {
  return (
    <Section id="esteira" className="esteira">
      <div className="esteira__head">
        <Eyebrow index="01">A esteira</Eyebrow>
        <h2 className="esteira__title">
          Do pedido ao código, com <em>portões</em> em cada passo.
        </h2>
        <p className="esteira__principio">“{PRINCIPIO}”</p>
      </div>

      <ol className="esteira__fluxo">
        {ETAPAS.map((e, i) => (
          <Reveal as="li" key={e.n} className="esteira__etapa" delay={i * 0.06}>
            <div className="esteira__etapa-topo">
              <span className="esteira__n">{e.n}</span>
              <code className="esteira__cmd">{e.comando}</code>
            </div>
            <h3 className="esteira__etapa-titulo">{e.titulo}</h3>
            <p className="esteira__oque">{e.o_que}</p>
            <p className="esteira__porque">
              <span className="esteira__porque-tag">Por quê</span>
              {e.porque}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
