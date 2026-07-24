# 6. Animações com GSAP

Como o movimento funciona aqui — e por que é organizado assim.

## As libs entram por CDN

No `index.html`, antes do app:

```html
<script defer src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
```

Elas ficam em `window.gsap`, `window.ScrollTrigger` e `window.Lenis`. O `defer` garante a ordem: as libs carregam **antes** do bundle React rodar.

## Regra de ouro: ninguém fala com `window` direto

Todo acesso passa por **um** wrapper: `src/shared/lib/gsap.js`.

```js
import { getGsap, prefersReducedMotion } from "@/shared/lib/gsap";

const lib = getGsap();          // { gsap, ScrollTrigger } ou null
if (!lib) { /* fallback */ }
```

Por que isso importa:
- **Um lugar** para trocar de lib, mockar em teste, ou tratar "ainda não carregou".
- Componentes não sabem que a lib veio de CDN. Poderia vir de npm amanhã e nada muda neles.

## Os hooks prontos

### `useReveal` — aparecer no scroll

```jsx
import { useReveal } from "@/shared/hooks/useReveal";

function Card() {
  const ref = useReveal({ y: 24, delay: 0.1 });
  return <div ref={ref}>…</div>;
}
```

Ou o atalho declarativo `<Reveal>`:

```jsx
<Reveal delay={0.1}>Conteúdo</Reveal>
```

### `useGsap` — animação livre com escopo e limpeza

```jsx
const scope = useRef(null);
useGsap(({ gsap, ScrollTrigger, reduced }) => {
  gsap.from(".alvo", { opacity: 0, y: 20 });
}, scope, []);
```

O hook roda dentro de um `gsap.context()` e **desfaz tudo** ao desmontar — sem vazamento de animações.

## Smooth scroll (Lenis)

O `SmoothScrollProvider` (em `app/providers/`) liga o scroll suave do Lenis e o sincroniza com o ScrollTrigger, para as animações de scroll ficarem perfeitamente atreladas ao movimento.

## A técnica `stroke-dasharray` (o traço que se desenha)

Usada na **Spine** (a linha vertical) e no **Showcase**. O passo a passo:

```js
const len = path.getTotalLength();     // 1. mede o comprimento do traço
path.style.strokeDasharray = len;      // 2. um tracejado do tamanho da linha
path.style.strokeDashoffset = len;     // 3. desloca tudo → linha "some"
// 4. anima o offset de `len` até 0 → a linha "se desenha"
gsap.to(path, {
  strokeDashoffset: 0,
  scrollTrigger: { trigger, start, end, scrub: 0.8 },
});
```

`scrub` amarra o progresso da animação ao progresso do scroll: rolar para frente desenha, rolar para trás apaga.

## Acessibilidade: `prefers-reduced-motion`

Todo efeito checa isso. Quando o usuário pede menos movimento (config do SO), os hooks **mostram o conteúdo final imediatamente** — sem animação, mas sem nada invisível. O CSS global também zera transições nesse caso.

## Empacotar via npm (alternativa)

Se preferir não depender de CDN:

```bash
npm install gsap @studio-freight/lenis
```

Depois, em `shared/lib/gsap.js`, troque a leitura de `window.gsap` por `import gsap from "gsap"`. Só esse arquivo muda — o resto do projeto nem percebe. Esse é o benefício do wrapper.

## Próximo passo

[Criar uma nova feature →](07-criar-nova-feature.md)
