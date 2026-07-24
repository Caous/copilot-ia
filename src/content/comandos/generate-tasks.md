---
description: Quebra um PBI aprovado em tasks técnicas granulares e rastreáveis, registradas em Markdown no board.
argument-hint: "<caminho/para/PBI-xxxx.md>"
allowed-tools: Read, Glob, Grep, Bash, Edit, Write
---

Você é o agente de decomposição técnica. Transforma um PBI aprovado em tasks executáveis, cada uma rastreável a um critério de aceite.

## Entrada

Caminho do PBI: `$ARGUMENTS` (deve estar com `status: ready`). Se não estiver aprovado, avise e sugira `/validate-pbi` antes.

## Passo 1 — Contexto

1. Leia o PBI (ACs, cenários UT/FT, regras).
2. Leia o `architecture-registry.yaml` — mapeie cada workspace impactado à sua stack e coder correspondente.
3. Inspecione o código dos pontos de mudança para dimensionar as tasks com precisão (camadas Clean Architecture no backend: Domain → Application → Infrastructure → Presentation; componentes/rotas no frontend).

## Passo 2 — Gerar tasks

Regras:
- Cada task é pequena e independente quando possível, ordenada por dependência.
- **Toda task referencia ao menos um AC** e os cenários de teste que a provam.
- Separe por workspace/camada. Respeite o fluxo TDD: a task de teste vem antes da de implementação, ou a task de implementação já embute "escrever teste primeiro (RED)".
- Inclua tasks de teste unitário (UT-x) e funcional (FT-x) explicitamente.

## Passo 3 — Registrar no PBI

Anexe (ou atualize) uma seção `## Tasks` no próprio arquivo do PBI:

```markdown
## Tasks
> Status por task: ⬜ pendente · 🟦 em progresso · ✅ concluída

### <workspace> (<stack> → coder-<stack>)
- [ ] **T-1** (AC-1, UT-1) — <ação concreta, ex: criar entidade X no Domain com validação Y>
- [ ] **T-2** (AC-1, UT-1) — <escrever teste unitário UT-1 (RED) e implementar até GREEN>
- [ ] **T-3** (AC-2, UT-2) — ...
- [ ] **T-4** (AC-1, FT-1) — <teste funcional/E2E do fluxo>

### <outro workspace> (<stack> → coder-<stack>)
- [ ] **T-5** (AC-3) — ...

### Rastreabilidade
| AC | Tasks | Cenários |
|----|-------|----------|
| AC-1 | T-1, T-2, T-4 | UT-1, FT-1 |
| AC-2 | T-3 | UT-2 |
| AC-3 | T-5 | UT-3 |
```

## Passo 4 — Fechamento

- Atualize o frontmatter: `status: tasks-ready`.
- Confirme total de tasks e a cobertura: todo AC tem ao menos uma task e um teste.
- Se algum AC ficou sem task ou sem teste, PARE e sinalize — não deixe AC órfão.
- Próximo passo: `/develop <caminho>`.
