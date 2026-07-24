# 4. Estrutura de pastas

O que vive onde — e **por que** vive lá.

```
aurora/
├─ index.html              → HTML raiz + <script> CDN (GSAP, Lenis, fontes)
├─ vite.config.js          → build, alias "@" → src
├─ vercel.json             → configuração de deploy
├─ package.json
│
├─ public/                 → assets servidos como estão (favicon)
│
├─ docs/                   → esta documentação
│
└─ src/
   ├─ main.jsx             → ponto de entrada: monta o React no #root
   ├─ App.jsx              → composição das features numa página
   │
   ├─ app/                 → a CASCA da aplicação
   │  ├─ layout/           → Header, Footer, Spine (aparecem em toda a página)
   │  └─ providers/        → SmoothScrollProvider (Lenis)
   │
   ├─ features/            → uma pasta por FUNCIONALIDADE
   │  ├─ hero/
   │  │  ├─ components/     → Hero.jsx + Hero.css
   │  │  ├─ hooks/          → useHeroIntro.js
   │  │  ├─ index.js        → API pública da feature
   │  │  └─ README.md       → doc local da feature
   │  ├─ arquitetura/
   │  │  ├─ components/
   │  │  ├─ data/           → conteúdo separado da apresentação
   │  │  └─ index.js
   │  ├─ showcase/
   │  └─ contato/
   │
   └─ shared/              → REUTILIZÁVEL entre features
      ├─ components/        → Button, Section, Eyebrow, Reveal
      ├─ hooks/            → useReveal, useGsap
      ├─ lib/              → gsap.js (wrapper do CDN)
      └─ styles/           → tokens.css + global.css
```

## As três camadas e o porquê de cada uma

### `app/` — a casca

O que aparece **em toda a página** ou monta o ambiente: cabeçalho, rodapé, a linha decorativa (Spine) e os providers (como o smooth scroll). Se não é de uma feature específica e envolve a página inteira, é aqui.

### `features/` — o conteúdo

Cada funcionalidade da página. É onde você passa 90% do tempo. Adicionar algo novo = criar uma pasta aqui (ver [Criar uma nova feature](07-criar-nova-feature.md)).

Padrões internos que você verá:
- `components/` — o(s) componente(s) e seus CSS locais.
- `hooks/` — lógica reutilizável só daquela feature (ex: a animação de entrada do hero).
- `data/` — conteúdo separado do componente (ex: os pilares da arquitetura). Trocar texto sem tocar em JSX.
- `index.js` — a fronteira. **Sempre.**
- `README.md` — o que a feature faz e como estendê-la.

### `shared/` — o comum

O que mais de uma feature usa. Dividido por tipo porque aqui o critério é reuso, não funcionalidade:
- `components/` — peças de UI genéricas.
- `hooks/` — comportamento reutilizável (revelar no scroll, rodar GSAP).
- `lib/` — integrações externas isoladas (o wrapper do GSAP).
- `styles/` — os tokens de design e o reset global.

## O alias `@`

`vite.config.js` mapeia `@` para `src/`. Assim os imports não viram `../../../shared/...`:

```jsx
import { Button } from "@/shared/components/Button";
```

## Próximo passo

[Design system →](05-design-system.md)
