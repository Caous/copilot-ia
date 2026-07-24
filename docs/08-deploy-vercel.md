# 8. Deploy no Vercel

O projeto já vem configurado. Duas formas de publicar.

## Opção A — Pelo painel do Vercel (mais simples)

1. Suba o projeto para um repositório no GitHub.
2. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório.
3. O Vercel detecta o Vite automaticamente. Confirme:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Clique em **Deploy**.

A cada `git push`, o Vercel rebuilda e republica sozinho.

## Opção B — Pela CLI

```bash
npm i -g vercel     # instala a CLI (uma vez)
vercel              # deploy de preview
vercel --prod       # deploy de produção
```

## O que o `vercel.json` faz

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

- **buildCommand / outputDirectory:** dizem ao Vercel como gerar e onde achar o site.
- **rewrites:** todas as rotas caem no `index.html`. Isso é essencial para SPA — se você adicionar um roteador (React Router) depois, links diretos como `/sobre` funcionam em vez de dar 404.

## Antes de publicar — checklist

- [ ] `npm run build` termina sem erro localmente.
- [ ] `npm run preview` mostra o site correto.
- [ ] Trocou os links de exemplo (GitHub, comando de clone) pelos seus.
- [ ] Ajustou `<title>` e a `<meta description>` no `index.html`.
- [ ] Trocou o favicon em `public/favicon.svg`.

## Sobre os efeitos via CDN em produção

GSAP e Lenis são baixados de `cdn.jsdelivr.net` em runtime. Em produção isso funciona normalmente e é cacheável. Se sua política exige zero dependências externas (ex: intranet fechada), migre para npm — veja [Animações com GSAP](06-animacoes-gsap.md#empacotar-via-npm-alternativa). Só o arquivo `shared/lib/gsap.js` muda.

## Pronto

Seu site está no ar. Volte ao [índice da documentação](../README.md#documentação) quando precisar.
