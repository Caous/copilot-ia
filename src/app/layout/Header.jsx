import { useEffect, useState } from "react";
import "./Header.css";

const LINKS = [
  { href: "#esteira", label: "Esteira" },
  { href: "#biblioteca", label: "Biblioteca" },
  { href: "#contato", label: "Começar" },
];

/**
 * Cabeçalho fixo. Ganha fundo sólido depois de rolar um pouco
 * (transição de "flutuando sobre o hero" para "barra sólida").
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header__inner container">
        <a className="header__brand" href="#top">
          <span className="header__mark" aria-hidden="true" />
          Copilot
        </a>

        <nav className="header__nav" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <a key={l.href} className="header__link" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          className="header__cta"
          href="https://github.com/Caous"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
