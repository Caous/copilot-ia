import { SmoothScrollProvider } from "@/app/providers/SmoothScrollProvider";
import { Header } from "@/app/layout/Header";
import { Footer } from "@/app/layout/Footer";
import { Spine } from "@/app/layout/Spine";
import { Starfield } from "@/shared/components/Starfield";

// Cada feature entra pela sua API pública (index.js) — nunca por
// caminhos internos. Trocar/remover uma feature é mexer em uma linha.
import { Hero } from "@/features/hero";
import { Manifesto } from "@/features/manifesto";
import { Esteira } from "@/features/esteira";
import { Biblioteca } from "@/features/biblioteca";
import { Contato } from "@/features/contato";

/**
 * Casca da aplicação: providers + layout + a sequência de features.
 * A página apresenta o AI Dev Squad: a esteira, a biblioteca copiável
 * e como começar.
 */
export function App() {
  return (
    <SmoothScrollProvider>
      {/* Fundo fixo de partículas — primeiro no DOM, tudo pinta por cima */}
      <Starfield />
      <Spine />
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Esteira />
        <Biblioteca />
        <Contato />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
