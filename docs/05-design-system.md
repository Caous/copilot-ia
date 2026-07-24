# 5. Design system

Todo o visual sai de **um** arquivo: `src/shared/styles/tokens.css`. Sem valores mágicos espalhados.

## A ideia

Um _token_ é uma variável CSS com um nome que diz a **intenção**, não o valor:

```css
--accent: #3b37ff;   /* a cor de destaque — não "aquele azul" */
--space-4: 2rem;     /* um degrau da escala — não "32px solto" */
```

Componentes usam o token, nunca o valor cru:

```css
.btn--primary {
  background: var(--accent);   /* ✅ */
  /* background: #3b37ff;         ❌ */
}
```

Trocar a identidade do projeto inteiro vira editar `tokens.css`.

## A paleta

| Token | Valor | Uso |
|---|---|---|
| `--paper` | `#f1efe9` | Fundo off-white (base) |
| `--paper-2` | `#e9e6de` | Superfícies elevadas (cards) |
| `--ink` | `#121311` | Texto / fundo escuro |
| `--muted` | `#6b6c64` | Texto secundário |
| `--line` | `#d8d4cb` | Linhas finas (hairlines) |
| `--accent` | `#3b37ff` | Destaque, CTA, stroke que se desenha |
| `--glow` | `#eae9ff` | Fundo de realce claro |

**Direção:** base off-white clara, seções escuras para contraste, **um** acento (ultramarine) usado com parcimônia. Menos é mais.

## Claro e escuro por seção

Não é dark-mode global. É por seção: a classe `.is-dark` inverte os tokens **semânticos**:

```css
.is-dark {
  --bg: var(--ink);
  --fg: var(--paper);
  --hairline: var(--line-dark);
}
```

O componente `<Section dark>` aplica isso. Por isso showcase e contato ficam escuros e o resto claro, sem CSS duplicado.

## Tipografia

Três papéis, carregados via CDN (Fontshare + Google Fonts):

| Papel | Fonte | Onde |
|---|---|---|
| Display | **Clash Display** | Títulos (`h1`, `h2`) |
| Corpo | **Satoshi** | Texto |
| Utilitário | **JetBrains Mono** | Rótulos, código, dados |

A escala é **fluida** (`clamp()`): o tamanho acompanha a largura da tela sem breakpoints manuais.

```css
--step-4: clamp(2.8rem, 2rem + 4vw, 5.5rem);  /* título do hero */
```

## Espaçamento

Escala de base 8px (`--space-1` a `--space-8`). Usar sempre a escala mantém o ritmo vertical consistente — nada de `margin: 13px`.

## Como retematizar

1. Troque as cores em `tokens.css` (`--paper`, `--ink`, `--accent`…).
2. Troque as fontes no `<link>` do `index.html` e nas variáveis `--font-*`.
3. Pronto — os componentes seguem, porque leem só os tokens.

## Próximo passo

[Animações com GSAP →](06-animacoes-gsap.md)
