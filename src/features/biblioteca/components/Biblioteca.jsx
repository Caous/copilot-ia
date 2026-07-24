import { useMemo, useState } from "react";
import { Section } from "@/shared/components/Section";
import { Eyebrow } from "@/shared/components/Eyebrow";
import { GRUPOS, comConteudo } from "../data/manifest";
import { ArtifactCard } from "./ArtifactCard";
import "./Biblioteca.css";

/**
 * Feature BIBLIOTECA — o núcleo do site.
 * Mostra todos os artefatos do ecossistema (agentes, filosofias,
 * comandos e templates) agrupados por categoria, cada um copiável.
 */
export function Biblioteca() {
  const grupos = useMemo(() => GRUPOS.map(comConteudo), []);
  const [ativo, setAtivo] = useState(grupos[0].id);

  const grupoAtivo = grupos.find((g) => g.id === ativo) ?? grupos[0];

  return (
    <Section id="biblioteca" className="lib">
      <div className="lib__head">
        <Eyebrow index="02">Biblioteca</Eyebrow>
        <h2 className="lib__title">
          Copie e monte o <em>seu</em> time.
        </h2>
        <p className="lib__lead">
          Todo o ecossistema, aberto. Cada arquivo traz o que faz e por que
          existe — copie o markdown e cole no seu projeto.
        </p>
      </div>

      <div className="lib__tabs" role="tablist" aria-label="Categorias">
        {grupos.map((g) => (
          <button
            key={g.id}
            role="tab"
            aria-selected={g.id === ativo}
            className={`lib__tab ${g.id === ativo ? "is-active" : ""}`}
            onClick={() => setAtivo(g.id)}
          >
            {g.rotulo}
            <span className="lib__tab-count">{g.itens.length}</span>
          </button>
        ))}
      </div>

      <p className="lib__desc">{grupoAtivo.descricao}</p>

      <div className="lib__grid">
        {grupoAtivo.itens.map((item) => (
          <ArtifactCard key={item.arquivo} item={item} />
        ))}
      </div>
    </Section>
  );
}
