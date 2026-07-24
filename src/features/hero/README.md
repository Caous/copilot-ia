# Feature: `hero`

A "tese" da página — a primeira dobra. Apresenta o projeto e dispara a animação de entrada (page-load).

## Estrutura

```
hero/
├─ components/
│  ├─ Hero.jsx      → markup + composição
│  └─ Hero.css      → estilos locais
├─ hooks/
│  └─ useHeroIntro.js → timeline GSAP de entrada
└─ index.js         → API pública: exporta { Hero }
```

## Por que separada

O hero concentra a lógica de animação de entrada, que é só dele. Isolando aqui, nenhuma outra feature precisa saber como o título aparece. Se um dia o hero mudar de formato, nada fora desta pasta é afetado.

## Como usar

```jsx
import { Hero } from "@/features/hero";
<Hero />;
```

## Pontos de extensão

- **Texto:** edite direto no `Hero.jsx` (título, lead, métricas).
- **Animação:** ajuste a timeline em `hooks/useHeroIntro.js`. Os alvos são marcados com `data-anim` no JSX (`eyebrow`, `line`, `lead`, `actions`, `meta`).
- **Acessibilidade:** com `prefers-reduced-motion`, o hook mostra tudo sem animar.
