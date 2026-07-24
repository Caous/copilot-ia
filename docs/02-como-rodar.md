# 2. Como rodar

## Pré-requisitos

- **Node.js 18+** (recomendado 20+). Verifique com `node -v`.
- **npm** (vem com o Node). Pode usar `pnpm` ou `yarn` se preferir.

## Passos

```bash
# instalar dependências
npm install

# ambiente de desenvolvimento (hot reload)
npm run dev
```

Abra `http://localhost:5173`.

## Por que só `react` e `react-dom` nas dependências?

Olhe o `package.json`: as dependências de runtime são apenas o React. As libs de animação (**GSAP**, **ScrollTrigger**, **Lenis**) **não** estão aqui — elas entram por CDN no `index.html`.

Vantagens dessa escolha:

- **Bundle menor.** O JS que o Vite gera não carrega o peso do GSAP.
- **Cache compartilhado.** O navegador pode reaproveitar o GSAP já baixado de outros sites que usam o mesmo CDN.
- **Atualização simples.** Trocar a versão do GSAP é mudar a URL do `<script>`.

O custo: as libs dependem de uma requisição externa. Se você preferir empacotar tudo, veja a alternativa em [Animações com GSAP](06-animacoes-gsap.md#empacotar-via-npm-alternativa).

## Scripts disponíveis

| Comando | O que faz | Quando usar |
|---|---|---|
| `npm run dev` | Sobe o Vite com hot reload | Desenvolvendo no dia a dia |
| `npm run build` | Gera `dist/` otimizado | Antes de publicar / testar produção |
| `npm run preview` | Serve o `dist/` local | Conferir o build de produção |

## Conferindo o build de produção

```bash
npm run build     # gera dist/
npm run preview   # serve em http://localhost:4173
```

Se `npm run build` termina sem erro, o projeto está pronto para o Vercel.

## Próximo passo

[Arquitetura Feature-Based →](03-arquitetura-feature-based.md)
