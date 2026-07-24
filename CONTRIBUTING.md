# Contribuindo com o Copilot — AI Dev Squad

Obrigado pelo interesse! Contribuições são muito bem-vindas. Para manter a
qualidade e a coerência do projeto, **toda mudança entra pela `main` através de
um Pull Request revisado**. Ninguém — nem colaboradores — commita direto na
`main`.

## Fluxo

1. **Fork** o repositório (ou, se você tiver acesso de colaborador, crie uma
   branch diretamente).
2. Crie uma branch descritiva a partir da `main`:
   ```bash
   git checkout -b feat/nome-curto      # feature
   git checkout -b fix/nome-curto       # correção
   git checkout -b docs/nome-curto      # documentação
   ```
3. Faça suas mudanças. Antes de abrir o PR, garanta que o build passa:
   ```bash
   npm install
   npm run build
   ```
4. Faça commits claros no padrão [Conventional Commits](https://www.conventionalcommits.org/):
   ```
   feat(hero): adiciona animação de entrada
   fix(modal): corrige foco ao fechar com Esc
   docs(readme): atualiza instruções de deploy
   ```
5. Abra um **Pull Request** para a `main`, descrevendo o **quê** e o **porquê**.

## O que acontece depois

- O PR dispara o **build automático** (GitHub Actions). Ele precisa passar.
- O **dono do projeto (@Caous)** é solicitado como revisor automaticamente
  (via CODEOWNERS) e **precisa aprovar** antes do merge.
- Após aprovado e mergeado, o **Vercel publica** automaticamente.

## Padrões do projeto

- **Arquitetura por feature:** cada funcionalidade em `src/features/<nome>/`,
  exposta por um `index.js`. Nada de uma feature importar arquivos internos de
  outra.
- **Design por tokens:** cores, tipografia e espaçamento saem de
  `src/shared/styles/tokens.css`. Sem valores mágicos soltos.
- **Acessibilidade:** HTML semântico, foco visível, `prefers-reduced-motion`
  respeitado. Efeitos degradam com elegância.
- **Sem quebrar o mobile:** teste em 375px antes de abrir o PR.

## Reportando problemas

Abra uma [issue](https://github.com/Caous/copilot-ia/issues) descrevendo o que
aconteceu, o que era esperado e como reproduzir.
