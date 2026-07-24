---
name: frontend-philosophy
description: Os 5 Pilares do Frontend — Tipografia, Cor, Movimento, Composição, Atmosfera — com critérios verificáveis, mais acessibilidade e performance. Carregar para qualquer código de UI, componentes ou estilo (substitui code-philosophy na camada visual).
---

# Frontend Philosophy — Os 5 Pilares

Interfaces memoráveis, não genéricas. Cada pilar tem critérios **objetivamente verificáveis** — nada de "ficou bonito". Aplica-se à camada visual; lógica de estado/dados continua sob a `code-philosophy`.

---

## Pilar 1 — Tipografia

Fontes distintas com hierarquia clara.

**Critérios verificáveis:**
- [ ] Nenhum uso de stack default puro (`font-family: sans-serif` / Arial / Times) sem decisão de design.
- [ ] Máximo **2 famílias** (1 display + 1 texto). Pesos e tamanhos via escala definida (ex: 1.25 ratio), não valores mágicos.
- [ ] `line-height` de corpo entre 1.4–1.7; títulos entre 1.1–1.3.
- [ ] Tamanho base ≥ 16px em corpo de texto.
- [ ] Hierarquia visível: usuário distingue h1/h2/corpo sem ler o HTML.

---

## Pilar 2 — Cor

Paleta comprometida, não tímida.

**Critérios verificáveis:**
- [ ] Paleta definida em tokens/variáveis (CSS custom properties, tema Tailwind) — zero hex solto em componente.
- [ ] 1 cor primária dominante + 1 acento + neutros. Acento usado com parcimônia (CTAs, estados).
- [ ] Contraste WCAG AA mínimo: 4.5:1 texto normal, 3:1 texto grande — **verificado**, não estimado.
- [ ] Dark mode (quando existir) com paleta própria, não `filter: invert`.
- [ ] Estados (hover, focus, disabled, error) definidos para todo componente interativo.

---

## Pilar 3 — Movimento

Animação com propósito: guiar atenção, comunicar estado. Nunca decoração gratuita.

**Critérios verificáveis:**
- [ ] Micro-interações: 150–300ms. Transições de layout/página: 300–500ms. Nada acima de 700ms sem justificativa.
- [ ] Easing definido (`ease-out` para entrada, `ease-in` para saída) — nunca `linear` em movimento de UI.
- [ ] Animar apenas `transform` e `opacity` (compositor); nunca `top/left/width/height` em loop.
- [ ] `prefers-reduced-motion` respeitado — animações essenciais viram fade, decorativas somem.
- [ ] Todo estado de carregamento tem feedback (skeleton, spinner, progress) — nunca tela congelada.

---

## Pilar 4 — Composição

Layout com intenção — hierarquia, ritmo e uso corajoso do espaço.

**Critérios verificáveis:**
- [ ] Grid/espaçamento em escala consistente (4px ou 8px base) — zero margens mágicas (`margin: 13px`).
- [ ] Hierarquia de leitura clara: elemento mais importante domina visualmente (tamanho, peso ou posição).
- [ ] Whitespace usado como elemento, não como sobra — seções respiram.
- [ ] Responsivo por design: breakpoints definidos, testado em 375px, 768px e 1280px no mínimo.
- [ ] Assimetria intencional permitida e encorajada — mas alinhamento interno sempre consistente.

---

## Pilar 5 — Atmosfera

Profundidade e textura que criam identidade.

**Critérios verificáveis:**
- [ ] Elevação consistente: escala de sombras definida (ex: sm/md/lg), não sombras ad-hoc por componente.
- [ ] Gradientes/texturas/ruído quando usados: sutis e com contraste de texto ainda AA.
- [ ] Bordas e raios em escala (ex: 4/8/16px) — zero `border-radius: 7px` isolado.
- [ ] Identidade reconhecível: se remover o logo, a tela ainda parece do produto (cores + tipografia + tom).

---

## Fundamentos Não-Negociáveis (transversais)

### Acessibilidade
- [ ] HTML semântico (`button` para ação, `a` para navegação — nunca `div onClick`).
- [ ] Foco visível em todo elemento interativo; ordem de tab lógica.
- [ ] Imagens com `alt`; ícones decorativos com `aria-hidden`.
- [ ] Formulários: label associado, erro anunciado (`aria-describedby`/`aria-invalid`).

### Performance
- [ ] Imagens otimizadas (formato moderno, dimensões corretas, lazy abaixo da dobra).
- [ ] Zero re-render desnecessário em lista/tabela grande (memo, virtualização quando > 100 itens).
- [ ] Fontes com `font-display: swap` e subset quando possível.
- [ ] Bundle: dependência nova de UI só com justificativa (peso vs. benefício).

---

## Checklist Final

- [ ] Tipografia — escala definida, hierarquia visível
- [ ] Cor — tokens, contraste AA verificado, estados completos
- [ ] Movimento — durações corretas, reduced-motion respeitado
- [ ] Composição — escala de espaçamento, responsivo testado
- [ ] Atmosfera — elevação/raios em escala, identidade consistente
- [ ] Acessibilidade — semântico, focável, anunciável
- [ ] Performance — imagens, renders, fontes, bundle
