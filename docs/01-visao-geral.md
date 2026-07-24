# 1. Visão geral

## Para quem é

Para quem vai começar um site ou app em React e não quer perder os primeiros dias decidindo estrutura de pastas, como colocar animação sem sujar o código, e como publicar. Copilot entrega isso pronto e documentado.

## A ideia central

> Um projeto deve ser fácil de **crescer** e fácil de **remover partes**.

Copilot persegue isso com três decisões:

1. **Organização por feature, não por tipo de arquivo.** Em vez de `components/`, `hooks/`, `styles/` gigantes que misturam tudo, cada funcionalidade tem sua pasta com o que precisa. Ver a fundo em [Arquitetura Feature-Based](03-arquitetura-feature-based.md).

2. **Efeitos via CDN, isolados atrás de um wrapper.** GSAP e Lenis entram por `<script>` no `index.html`. Nenhum componente fala com `window.gsap` direto — só através de `shared/lib/gsap.js`. Se um dia trocar a lib, muda um arquivo. Ver [Animações com GSAP](06-animacoes-gsap.md).

3. **Design vindo de tokens.** Toda cor, fonte e espaçamento sai de `shared/styles/tokens.css`. Trocar a identidade visual é editar variáveis, não caçar valores pelo código. Ver [Design system](05-design-system.md).

## Por que essas decisões importam

| Decisão | Problema que evita |
|---|---|
| Feature-Based | O medo de mexer: "onde está tudo dessa tela?" vira "está nesta pasta". |
| Wrapper de efeitos | Acoplamento a uma lib específica espalhado por 30 arquivos. |
| Design tokens | Valores mágicos (`#3b37ff`, `24px`) repetidos e inconsistentes. |
| CDN para libs pesadas | Bundle inchado; libs de animação baixadas separado e cacheadas. |

## O que Copilot **não** é

- Não é um framework — é um ponto de partida que você molda.
- Não tem backend, autenticação ou roteador. Adicione conforme a necessidade (o `app/` é o lugar dos providers).
- Não impõe biblioteca de UI. O design system é CSS puro, fácil de trocar.

## Próximo passo

[Como rodar →](02-como-rodar.md)
