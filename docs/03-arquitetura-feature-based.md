# 3. Arquitetura Feature-Based

O coração do projeto. Vale ler com calma.

## O problema que ela resolve

A organização mais comum em projetos React agrupa por **tipo de arquivo**:

```
src/
├─ components/   → 40 componentes de features diferentes misturados
├─ hooks/        → todos os hooks juntos
├─ styles/
└─ utils/
```

No começo parece limpo. Com o tempo, dói:

- Para entender **uma tela**, você abre 4 pastas diferentes.
- Ninguém sabe se um componente ainda é usado (medo de apagar).
- Duas features começam a depender uma da outra sem querer.

## A alternativa: agrupar por funcionalidade

```
src/
├─ features/
│  ├─ hero/         → TUDO do hero: componentes, hooks, dados, estilos
│  ├─ arquitetura/
│  ├─ showcase/
│  └─ contato/
└─ shared/          → o que é genuinamente compartilhado
```

Regra mental: **"se eu apagar esta pasta, essa funcionalidade some inteira e nada mais quebra."**

## As três regras

### 1. Cada feature é autocontida

Dentro de `features/hero/` mora tudo do hero — o componente, o hook de animação, os estilos. Você não caça pedaços do hero pelo projeto.

### 2. Fronteira explícita pelo `index.js`

Cada feature expõe só o que o resto do app pode usar:

```js
// features/hero/index.js
export { Hero } from "./components/Hero";
```

E o app importa **apenas daí**:

```jsx
import { Hero } from "@/features/hero";   // ✅ pela API pública
// import { Hero } from "@/features/hero/components/Hero";  // ❌ fura a fronteira
```

Por que isso importa: os arquivos internos da feature ficam livres para mudar de nome, quebrar em vários, reorganizar — desde que o `index.js` continue exportando `Hero`, nada fora quebra.

### 3. O comum vive em `shared/`

Botão, seção, hooks de animação, tokens de estilo — o que várias features usam fica em `shared/`. E vale a direção da dependência:

```
features/  ──importa──▶  shared/
shared/    ──nunca──▶    features/
```

`shared/` não conhece nenhuma feature. Uma feature não importa outra feature. Isso mantém o grafo de dependências simples e sem ciclos.

## Como fica na prática aqui

```
app/         → a "casca": junta as features numa página (App.jsx)
features/    → hero, arquitetura, showcase, contato
shared/      → Button, Section, Reveal, hooks, lib/gsap, styles/tokens
```

O `App.jsx` lê quase como um índice do site:

```jsx
<Hero />
<Arquitetura />
<Showcase />
<Contato />
```

## Quando NÃO usar

Para um protótipo de uma tela só, isso é cerimônia demais — um `App.jsx` basta. Feature-Based brilha quando o projeto **vai crescer** e ser mantido por mais de uma pessoa.

## Próximo passo

[Estrutura de pastas →](04-estrutura-de-pastas.md)
