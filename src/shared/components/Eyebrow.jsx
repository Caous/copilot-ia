import "./Eyebrow.css";

/**
 * Rótulo pequeno em mono que abre uma seção. Aceita um número de
 * ordem (quando o conteúdo é de fato sequencial) via `index`.
 *
 * @param {object} props
 * @param {string} props.index  ex: "01" (opcional — só quando há ordem real)
 * @param {React.ReactNode} props.children  texto do rótulo
 */
export function Eyebrow({ index, children }) {
  return (
    <p className="eyebrow">
      <span className="eyebrow__mark" aria-hidden="true" />
      {index && <span className="eyebrow__index">{index}</span>}
      <span className="eyebrow__label">{children}</span>
    </p>
  );
}
