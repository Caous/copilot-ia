import { useReveal } from "@/shared/hooks/useReveal";

/**
 * Envolve qualquer conteúdo para que ele apareça suavemente ao entrar
 * na viewport. Atalho declarativo para o hook useReveal.
 *
 * @param {object} props
 * @param {number} props.y      deslocamento inicial (px)
 * @param {number} props.delay  atraso (segundos)
 * @param {string} props.as     tag do wrapper (default "div")
 */
export function Reveal({ y, delay, as: Tag = "div", className = "", children, ...rest }) {
  const ref = useReveal({ y, delay });
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} style={{ opacity: 0 }} {...rest}>
      {children}
    </Tag>
  );
}
