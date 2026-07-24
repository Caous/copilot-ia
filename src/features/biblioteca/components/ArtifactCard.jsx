import { useState } from "react";
import { Modal } from "@/shared/components/Modal";
import "./ArtifactCard.css";

/**
 * Card de um artefato copiável: resumo, o "porquê", e o conteúdo do
 * markdown — que abre em um modal para leitura e cópia.
 *
 * @param {object} props.item  { arquivo, titulo, resumo, porque, conteudo }
 */
export function ArtifactCard({ item }) {
  const [modalAberto, setModalAberto] = useState(false);
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(item.conteudo);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1800);
    } catch {
      setCopiado(false);
    }
  }

  function baixar() {
    const blob = new Blob([item.conteudo], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = item.arquivo.split("/").pop();
    a.click();
    URL.revokeObjectURL(url);
  }

  const linhas = item.conteudo ? item.conteudo.split("\n").length : 0;

  return (
    <article className="card">
      <div className="card__head">
        <div className="card__meta">
          <code className="card__file">{item.arquivo}</code>
          <span className="card__lines">{linhas} linhas</span>
        </div>
        <h3 className="card__title">{item.titulo}</h3>
        <p className="card__resumo">{item.resumo}</p>
      </div>

      <p className="card__porque">
        <span className="card__porque-tag">Por quê</span>
        {item.porque}
      </p>

      <div className="card__actions">
        <button
          className="card__btn card__btn--primary"
          onClick={copiar}
          aria-live="polite"
        >
          {copiado ? "Copiado ✓" : "Copiar markdown"}
        </button>
        <button
          className="card__btn"
          onClick={() => setModalAberto(true)}
          aria-haspopup="dialog"
        >
          Ver conteúdo
        </button>
        <button className="card__btn card__btn--icon" onClick={baixar} title="Baixar .md">
          ↓ .md
        </button>
      </div>

      <Modal
        open={modalAberto}
        onClose={() => setModalAberto(false)}
        title={item.titulo}
        subtitle={item.arquivo}
        actions={
          <>
            <button className="card__btn card__btn--primary" onClick={copiar}>
              {copiado ? "Copiado ✓" : "Copiar markdown"}
            </button>
            <button className="card__btn" onClick={baixar}>
              Baixar .md
            </button>
          </>
        }
      >
        <pre className="modal__code" tabIndex={0} aria-label={`Conteúdo de ${item.arquivo}`}>
          <code>{item.conteudo}</code>
        </pre>
      </Modal>
    </article>
  );
}
