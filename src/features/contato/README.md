# Feature: `contato`

Fecha a página com a chamada para ação: comando de clone (com botão de copiar) e os três passos para publicar. Seção em tema escuro.

## Estrutura

```
contato/
├─ components/
│  ├─ Contato.jsx   → CTA + copiar para a área de transferência
│  └─ Contato.css
└─ index.js         → API pública: exporta { Contato }
```

## Interatividade

O botão "Copiar" usa a Clipboard API e dá feedback imediato ("Copiado ✓") por ~1,8s. Se o navegador negar acesso à área de transferência, o estado simplesmente não muda — sem quebrar.

## Como usar

```jsx
import { Contato } from "@/features/contato";
<Contato />;
```

## Pontos de extensão

- **Comando/passos:** constantes `CLONE` e `PASSOS` no topo do `Contato.jsx`.
- **Links:** troque os `href` dos botões (Vercel, GitHub) pelos seus.
