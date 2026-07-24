<div align="center">

# Copilot — site do AI Dev Squad

**Uma página que explica como montamos um time de agentes de IA para desenvolver software com disciplina — e deixa todos os arquivos disponíveis para copiar.**

`React 18` · `Vite` · `GSAP + Lenis (CDN)` · `deploy no Vercel`

</div>

---

## O que é

Este repositório é o **site** do AI Dev Squad. Ele:

- Explica a **esteira** de desenvolvimento (PBI → validar → tasks → develop) e o **porquê** de cada etapa.
- Mostra os **agentes**, **filosofias**, **comandos** e **templates** — cada um com o que faz e por que existe.
- Deixa todo o conteúdo em Markdown **disponível para copiar** direto da página.

O conteúdo real (os `.md` dos agentes, filosofias, comandos e templates) vive em [`src/content/`](src/content/) e é o mesmo material do ecossistema — pronto para você colar em `~/.claude` e usar.

## O que a pessoa encontra na página

| Seção | Conteúdo |
|---|---|
| **Esteira** | As 4 etapas do fluxo, com o motivo de cada uma existir |
| **Biblioteca** | 9 agentes · 3 filosofias · 4 comandos · 2 templates — todos copiáveis |
| **Começar** | Como instalar o squad em `~/.claude` |

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
```

## Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção em `dist/` |
| `npm run preview` | Serve o build para conferir |

## Como o conteúdo é carregado

Os arquivos de `src/content/**/*.md` são importados como texto cru (via `import.meta.glob` do Vite) e listados pelo manifesto em [`src/features/biblioteca/data/manifest.js`](src/features/biblioteca/data/manifest.js). Para adicionar um novo artefato copiável: coloque o `.md` em `src/content/` e registre no manifesto.

## Deploy

Configuração de Vercel incluída (`vercel.json`). Importe o repositório em [vercel.com/new](https://vercel.com/new) — detecta Vite automaticamente.

## Sobre o código do site

Para quem for manter/estender **este site**, a documentação técnica (organização por feature, design tokens, animações) está em [`docs/`](docs/). Ela descreve como a página foi construída — não faz parte do conteúdo exibido ao visitante.

## Licença

MIT.
