import "./Section.css";

/**
 * Bloco de seção padrão da página: cuida do espaçamento vertical,
 * do container centralizado e do modo escuro (is-dark inverte os tokens).
 *
 * @param {object} props
 * @param {string} props.id        âncora para navegação
 * @param {boolean} props.dark     usa o tema escuro (off-white → near-black)
 * @param {string} props.className classes extras
 * @param {React.ReactNode} props.children
 */
export function Section({ id, dark = false, className = "", children, ...rest }) {
  return (
    <section
      id={id}
      className={`section ${dark ? "is-dark" : ""} ${className}`.trim()}
      {...rest}
    >
      <div className="container">{children}</div>
    </section>
  );
}
