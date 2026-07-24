---
name: tdd-philosophy
description: Filosofia AC-TDD (Acceptance-Criteria-driven TDD) — matriz de rastreabilidade, ciclo RED→GREEN→REFACTOR→COMMIT e prova de rastreabilidade. Carregar SEMPRE antes de qualquer implementação de código.
---

# TDD Philosophy — AC-TDD

Desenvolvimento orientado por critérios de aceite. Nenhuma linha de código existe sem um critério que a justifique; nenhum critério é considerado entregue sem um teste que o prove.

---

## Princípio Central

> **Critério de aceite → cenário de teste → código.** Nunca o contrário.

O código é consequência dos testes. Os testes são consequência dos critérios de aceite. Se um critério não pode virar teste, ele está mal escrito — devolva ao orquestrador antes de codar.

---

## 1. Matriz de Rastreabilidade (obrigatória, antes de qualquer código)

Antes de escrever qualquer linha, construa a matriz que liga cada critério de aceite aos cenários de teste que o provarão:

| ID | Critério de Aceite (DADO/QUANDO/ENTÃO) | Cenário(s) de Teste | Status |
|----|----------------------------------------|---------------------|--------|
| AC-1 | DADO usuário autenticado, QUANDO solicita extrato, ENTÃO retorna últimos 30 dias | `test_extrato_retorna_30_dias` | 🔴 |
| AC-2 | DADO usuário sem transações, QUANDO solicita extrato, ENTÃO retorna lista vazia com status 200 | `test_extrato_vazio_status_200` | 🔴 |

**Regras da matriz:**
- Todo critério tem **pelo menos um** cenário de teste.
- Um cenário pode cobrir no máximo **um** critério (clareza > economia).
- Casos de borda derivados de um critério entram como sub-linhas (AC-1a, AC-1b).
- Status: 🔴 (teste falhando/não escrito) → 🟢 (passando) → ✅ (refatorado e commitado).

---

## 2. Ciclo AC-TDD: RED → GREEN → REFACTOR → COMMIT

Para **cada linha** da matriz, execute o ciclo completo:

### 🔴 RED
- Escreva o teste que prova o critério. Execute. **Ele DEVE falhar.**
- Se passar sem código novo, o teste está errado ou o critério já estava coberto — investigue antes de seguir.

### 🟢 GREEN
- Escreva o **mínimo** de código para o teste passar.
- Sem generalização prematura, sem "aproveitar que estou aqui".

### 🔵 REFACTOR
- Com testes verdes, melhore nomes, extraia funções, elimine duplicação.
- Rode a suíte completa após cada refatoração.
- Aplique as 5 Leis da `code-philosophy` aqui.

### 💾 COMMIT
- Commit atômico por ciclo (ou por grupo coeso de ciclos pequenos).
- Mensagem referencia o critério: `feat(extrato): retorna últimos 30 dias (AC-1)`.
- *Exceção:* se o agente não tem permissão de commit (padrão dos coders), sinalize o ponto de commit ao orquestrador.

---

## 3. Leis do AC-TDD

1. **Nenhum código órfão** — toda linha de produção rastreia até um critério de aceite. Código "que pode ser útil depois" é deletado.
2. **Nenhum critério sem prova** — critério sem teste passando = critério não entregue, mesmo que "funcione manualmente".
3. **Teste primeiro, sempre** — código escrito antes do teste é descartado ou reescrito guiado pelo teste.
4. **Um ciclo por vez** — não abra múltiplos ciclos RED em paralelo. Termine um, comece outro.
5. **Suíte sempre verde no fim** — nunca finalize a tarefa com testes quebrados, nem "os que já estavam quebrados antes" sem sinalizar.

---

## 4. Prova de Rastreabilidade (relatório final obrigatório)

Ao concluir a implementação, produza:

```markdown
## Prova de Rastreabilidade

| ID | Critério | Teste(s) | Status |
|----|----------|----------|--------|
| AC-1 | ... | test_x, test_y | ✅ PASS |
| AC-2 | ... | test_z | ✅ PASS |

**Cobertura da mudança:** X% (mínimo do stack respeitado)
**Testes totais:** N passando, 0 falhando
**Código órfão:** nenhum
```

Sem este relatório, a tarefa não está concluída.

---

## 5. Mínimos por Stack (referência rápida)

| Stack | Framework de teste | Cobertura mínima | Mutação |
|-------|--------------------|------------------|---------|
| C# / .NET | xUnit + NSubstitute + FluentAssertions | 80% (Coverlet) | ≥75% (Stryker.NET) |
| Java / Spring | JUnit 5 + Mockito + AssertJ + Testcontainers | 80% (JaCoCo) | ≥70% (PITest) |
| Python | pytest (+ pytest-asyncio, respx) | 80% (70% em DS/ML) | — |
| React + TS | Vitest + Testing Library + MSW | 80% | — |
| Next.js | Vitest (unit) + Playwright (E2E) + MSW | 80% | — |

---

## Anti-padrões (rejeitar imediatamente)

- ❌ Escrever toda a implementação e "cobrir com testes depois".
- ❌ Testes que testam implementação (mocks de detalhes internos) em vez de comportamento do critério.
- ❌ Aumentar cobertura com testes sem assert significativo.
- ❌ Marcar critério como entregue com teste `skip`/`todo`.
- ❌ Alterar o critério para caber no código já escrito.
