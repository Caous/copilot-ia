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

## Como instalar e usar o squad (passo a passo)

Este guia é para quem quer **usar** os agentes no seu próprio Claude Code — mesmo
sem experiência.

> **Antes de começar — ainda não tem o Claude Code?**
> Instale primeiro: **[claude.com/claude-code](https://claude.com/claude-code)**.
> É rápido:
> ```bash
> npm install -g @anthropic-ai/claude-code
> ```

> **O que é a pasta `~/.claude`?** É uma pasta (oculta) dentro da sua pasta de
> usuário onde o Claude Code procura o que você adiciona: agentes, skills e
> comandos. O `~` significa "sua pasta de usuário" — no Windows, algo como
> `C:\Users\SeuNome`; no Mac/Linux, `/Users/seunome` ou `/home/seunome`.

### 1. Abra o terminal

É onde você digita comandos.

- **Windows:** aperte a tecla `Windows`, digite `PowerShell` e abra.
- **Mac:** `Cmd + Espaço`, digite `Terminal`, Enter.
- **Linux:** abra o seu terminal preferido.

### 2. Crie as três pastas

Cole este comando e aperte Enter. Ele cria as três pastas de uma vez:

```bash
mkdir -p ~/.claude/agents ~/.claude/skills ~/.claude/commands
```

Para que serve cada uma:

| Pasta | Guarda |
|---|---|
| `agents/` | Os agentes (coder-nextjs, reviewer, scribe…) |
| `commands/` | Os comandos da esteira (generate-pbi, develop…) |
| `skills/` | As filosofias (tdd, code, frontend) |

### 3. Pegue os arquivos

Você pode copiá-los do site (seção **Biblioteca**) ou direto deste repositório,
na pasta [`src/content/`](src/content/):

- Agentes → [`src/content/agentes/`](src/content/agentes/)
- Comandos → [`src/content/comandos/`](src/content/comandos/)
- Filosofias → [`src/content/filosofias/`](src/content/filosofias/)
- Templates de PBI → [`src/content/pbi/`](src/content/pbi/)

### 4. Coloque cada arquivo no lugar certo

Este é o passo que mais confunde. **Agentes e comandos são arquivos soltos.**
**Cada filosofia (skill) precisa de uma subpasta própria, e o arquivo dentro
tem que se chamar `SKILL.md`.**

```
~/.claude/
├─ agents/
│  ├─ coder-nextjs.md
│  ├─ reviewer.md
│  └─ scribe.md
├─ commands/
│  ├─ generate-pbi.md
│  ├─ validate-pbi.md
│  ├─ generate-tasks.md
│  └─ develop.md
└─ skills/
   ├─ tdd-philosophy/
   │  └─ SKILL.md      ← renomeie a filosofia para SKILL.md
   ├─ code-philosophy/
   │  └─ SKILL.md
   └─ frontend-philosophy/
      └─ SKILL.md
```

> Dica: os coders já trazem as filosofias embutidas no próprio arquivo, então
> instalar as skills é opcional — mas recomendado se você quiser carregá-las em
> conversas normais.

### 5. Reinicie o Claude Code

Feche e abra o Claude Code (ou comece um chat novo). Ele só enxerga os arquivos
novos depois de reiniciar.

### 6. Rode a esteira

Digite `/` para ver os comandos novos. Comece descrevendo o que quer construir:

```
/generate-pbi feature "tela de login com e-mail e senha"
```

Depois siga o fluxo, um comando de cada vez:

```
/generate-pbi   →  cria a demanda (PBI) com critérios e cenários de teste
/validate-pbi   →  confere a demanda contra o Definition of Ready e o código
/generate-tasks →  quebra em tarefas rastreáveis
/develop        →  implementa (coder) → auditoria de qualidade → review
```

Travou em algum passo? Abra uma [issue](https://github.com/Caous/copilot-ia/issues)
ou fale comigo (contatos no rodapé).

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
