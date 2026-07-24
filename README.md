<div align="center">

# Copilot — AI Dev Squad

**Descubra o poder da Inteligência Artificial: estratégia, time de IA e projetos com resultados reais.**

Um site que explica como montamos um time de agentes de IA para desenvolver software com disciplina — e deixa todos os arquivos disponíveis para copiar.

**🌐 Ao vivo: [copilot-ia-smoky.vercel.app](https://copilot-ia-smoky.vercel.app)**

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
| **Hero** | A tese + um terminal com o squad em ação |
| **Manifesto** | Autoria: a IA produz o código, você constrói a obra |
| **Esteira** | As 4 etapas do fluxo, com o motivo de cada uma existir |
| **Biblioteca** | 9 agentes · 3 filosofias · 4 comandos · 2 templates — todos copiáveis |
| **Começar** | Como instalar o squad em `~/.claude` |

## Rodar localmente

```bash
git clone https://github.com/Caous/copilot-ia.git
cd copilot-ia
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

Hospedado no **Vercel** em [copilot-ia-smoky.vercel.app](https://copilot-ia-smoky.vercel.app), com deploy automático: todo push na `main` publica em produção, e cada Pull Request ganha um preview próprio. Configuração em [`vercel.json`](vercel.json).

## Contribuindo

Contribuições são bem-vindas — mas passam pelo meu Pull Request. A branch `main` é protegida: ninguém commita direto nela.

1. Faça um **fork** (ou uma branch, se tiver acesso).
2. Crie sua branch: `git checkout -b feat/minha-mudanca`.
3. Abra um **Pull Request** para a `main`.
4. O PR roda o build automaticamente e **aguarda minha revisão e aprovação** antes do merge.

Detalhes em [CONTRIBUTING.md](CONTRIBUTING.md).

## Autor

**Gustavo Nascimento**
[LinkedIn](https://www.linkedin.com/in/gusta-nascimento/) · [GitHub](https://github.com/Caous) · caous.g@gmail.com

## Licença

[MIT](LICENSE).
