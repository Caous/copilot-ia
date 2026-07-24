import { Section } from "@/shared/components/Section";
import { Eyebrow } from "@/shared/components/Eyebrow";
import { Reveal } from "@/shared/components/Reveal";
import { NeuralNet } from "./NeuralNet";
import "./Manifesto.css";

/**
 * Feature MANIFESTO — a introdução que dá sentido ao resto.
 * Adaptado do texto sobre autoria: a IA produz o código, mas quem
 * constrói a obra é você. Você é o piloto; a IA, o copiloto.
 */
export function Manifesto() {
  return (
    <Section id="manifesto" dark className="manifesto">
      <div className="manifesto__grid">
        <Reveal className="manifesto__inner" y={28}>
          <Eyebrow>Manifesto</Eyebrow>

          <h2 className="manifesto__title">
            A autoria não está em quem segura a caneta.
            <em> Está em quem constrói a obra.</em>
          </h2>

          <div className="manifesto__texto">
            <p>
              Um escritor que vende milhões não imprimiu os exemplares — quem
              imprime é a editora. Ainda assim, a obra é dele. No software foi
              parecido por décadas: o valor do desenvolvedor era medido em
              linhas escritas e linguagens dominadas.
            </p>
            <p>
              A inteligência artificial virou essa lógica. Boa parte do código
              pode sair de uma ferramenta — o que assusta alguns, acomoda
              outros e confunde quem está começando. Mas a conclusão é simples:{" "}
              <strong>a IA produz o código; você constrói a obra.</strong>
            </p>
          </div>

          <blockquote className="manifesto__quote">
            <p>trash in, trash out</p>
            <cite>
              O que você dá de entrada é o que sai. Co-pilot é copiloto — o
              piloto principal é você.
            </cite>
          </blockquote>
        </Reveal>

        <Reveal className="manifesto__figura" y={36} delay={0.1}>
          {/* Rede neural viva: entrada → processamento → obra.
              O conceito do texto, desenhado — trash in, trash out. */}
          <NeuralNet />
        </Reveal>
      </div>
    </Section>
  );
}
