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

      <Reveal className="esteira__pratica" y={28}>
        <span className="esteira__pratica-tag">Na prática</span>
        <div className="esteira__pratica-texto">
          <p>
            Imagine que você quer criar um software — digamos, um{" "}
            <strong>sistema de orçamento de material de construção</strong>. Ou
            você já tem um sistema e quer adicionar algo, ou corrigir um bug. O
            time de IA dá conta — mas comece pelo começo: pense no que você quer
            e escreva em uma frase.
          </p>
          <p>
            Chame o <code>/generate-pbi</code>. Ele vai te fazer perguntas — quem
            vai usar, o que precisa fazer, quais as regras — e transformar suas
            respostas na documentação inicial, com critérios claros e cenários de
            teste. Você não precisa saber escrever isso; o agente conduz.
          </p>
          <p>
            A partir daí é só seguir a esteira: o <code>/validate-pbi</code>{" "}
            confere se ficou bom e olha seu código de verdade, o{" "}
            <code>/generate-tasks</code> quebra em tarefas pequenas, e o{" "}
            <code>/develop</code> põe o time para trabalhar — um escreve o código
            com testes, outro audita a qualidade, outro revisa. No fim, a
            funcionalidade está <strong>pronta e provada</strong> — e você
            conduziu tudo, do pedido à entrega.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
