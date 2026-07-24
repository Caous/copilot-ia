import "./Footer.css";

// Links de contato do autor.
const CONTATOS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gusta-nascimento/" },
  { label: "GitHub", href: "https://github.com/Caous" },
  { label: "E-mail", href: "mailto:caous.g@gmail.com" },
];

/**
 * Rodapé. Fecha a página com a identidade e os contatos do autor.
 */
export function Footer() {
  return (
    <footer className="footer is-dark">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__mark" aria-hidden="true" />
            <span>Copilot</span>
          </div>

          <nav className="footer__contatos" aria-label="Contato">
            {CONTATOS.map((c) => (
              <a
                key={c.label}
                className="footer__contato"
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {c.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="footer__note">
          AI Dev Squad — agentes de IA para desenvolver com disciplina.
          Todo o material é aberto: copie, adapte e monte o seu time.
        </p>

        <div className="footer__meta">
          <span>Agentes · Filosofias · Comandos · Templates</span>
          <span aria-hidden="true">·</span>
          <span>Feito por Gustavo Nascimento</span>
          <span aria-hidden="true">·</span>
          <span>MIT</span>
        </div>
      </div>
    </footer>
  );
}
