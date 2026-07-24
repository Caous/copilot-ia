# 7. Criar uma nova feature

O fluxo que você vai repetir mais. Exemplo: uma feature `depoimentos`.

## Passo 1 — Criar a pasta

```
src/features/depoimentos/
├─ components/
│  ├─ Depoimentos.jsx
│  └─ Depoimentos.css
├─ data/
│  └─ lista.js          (opcional — conteúdo separado)
├─ index.js             (obrigatório — a fronteira)
└─ README.md            (recomendado)
```

## Passo 2 — Escrever o componente

Reaproveite o que já existe em `shared/`:

```jsx
// components/Depoimentos.jsx
import { Section } from "@/shared/components/Section";
import { Eyebrow } from "@/shared/components/Eyebrow";
import { Reveal } from "@/shared/components/Reveal";
import { LISTA } from "../data/lista";
import "./Depoimentos.css";

export function Depoimentos() {
  return (
    <Section id="depoimentos">
      <Eyebrow index="04">Depoimentos</Eyebrow>
      <h2>Quem já usou</h2>
      {LISTA.map((d, i) => (
        <Reveal key={d.id} delay={i * 0.05}>
          <blockquote>{d.texto}</blockquote>
        </Reveal>
      ))}
    </Section>
  );
}
```

## Passo 3 — Separar os dados (se houver conteúdo)

```js
// data/lista.js
export const LISTA = [
  { id: "a", texto: "Mudou como o time trabalha." },
  { id: "b", texto: "Subiu em um dia." },
];
```

Por quê: trocar texto não deve exigir mexer no componente. E o mesmo dado pode alimentar outra visualização depois.

## Passo 4 — Expor pela API pública

```js
// index.js
export { Depoimentos } from "./components/Depoimentos";
```

**Só** o que o app usa sai daqui. Os arquivos internos ficam livres para mudar.

## Passo 5 — Plugar na página

```jsx
// src/App.jsx
import { Depoimentos } from "@/features/depoimentos";

<main>
  <Hero />
  <Arquitetura />
  <Showcase />
  <Depoimentos />   {/* nova feature */}
  <Contato />
</main>
```

## Passo 6 — Documentar

Um `README.md` curto na pasta: o que a feature faz, sua estrutura e pontos de extensão. Siga os READMEs das features de exemplo.

## Checklist

- [ ] Pasta em `features/` com `components/`
- [ ] Conteúdo em `data/` (se aplicável)
- [ ] `index.js` exportando só a API pública
- [ ] Importada no `App.jsx` pela API pública (`@/features/...`)
- [ ] Reutilizou `Section`, `Eyebrow`, `Reveal`, `Button` do `shared/`
- [ ] `README.md` na pasta
- [ ] Efeitos respeitam `prefers-reduced-motion` (os hooks do `shared/` já fazem)

## Regra que mantém tudo saudável

> Uma feature **nunca** importa outra feature. Se duas precisam do mesmo código, ele sobe para `shared/`.

## Próximo passo

[Deploy no Vercel →](08-deploy-vercel.md)
