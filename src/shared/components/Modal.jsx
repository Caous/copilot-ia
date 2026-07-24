import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

/**
 * Modal acessível, renderizado num portal no <body> (fora do fluxo do
 * smooth scroll, evitando problemas de empilhamento/overflow).
 *
 * - Fecha com Esc, clique no fundo ou no botão ✕.
 * - Trava o scroll do body enquanto aberto.
 * - Foca o botão de fechar ao abrir; role="dialog" + aria-modal.
 *
 * @param {boolean} props.open
 * @param {() => void} props.onClose
 * @param {string} props.title
 * @param {string} props.subtitle  (ex: caminho do arquivo)
 * @param {React.ReactNode} props.actions  botões do rodapé
 */
export function Modal({ open, onClose, title, subtitle, actions, children }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="modal" onClick={onClose}>
      <div
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal__head">
          <div className="modal__titles">
            <h3 className="modal__title">{title}</h3>
            {subtitle && <code className="modal__subtitle">{subtitle}</code>}
          </div>
          <button
            ref={closeRef}
            className="modal__close"
            onClick={onClose}
            aria-label="Fechar"
          >
            ✕
          </button>
        </header>

        <div className="modal__body">{children}</div>

        {actions && <footer className="modal__actions">{actions}</footer>}
      </div>
    </div>,
    document.body,
  );
}
