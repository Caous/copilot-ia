import "./Button.css";

/**
 * Botão / link de ação. Renderiza <a> quando recebe `href`, senão <button>.
 *
 * @param {object} props
 * @param {"primary"|"ghost"} props.variant  estilo (default "primary")
 * @param {string} props.href    se presente, vira link
 * @param {function} props.onClick
 * @param {React.ReactNode} props.children
 */
export function Button({ variant = "primary", href, children, className = "", ...rest }) {
  const cls = `btn btn--${variant} ${className}`.trim();
  const content = (
    <>
      <span className="btn__label">{children}</span>
      <span className="btn__arrow" aria-hidden="true">→</span>
    </>
  );

  if (href) {
    return (
      <a className={cls} href={href} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  );
}
