# PBI — [Verbo] + [Objeto] + [Contexto]

> **Versão:** 1.0  
> **Status:** `Draft` | `Ready` | `In Progress` | `Done`  
> **Prioridade:** `Critical` | `High` | `Medium` | `Low`  
> **Story Points:** _(Fibonacci: 1, 2, 3, 5, 8, 13, 21)_  
> **Responsável:** _@username_  
> **Sprint / Milestone:** _ex: Sprint 12 ou Q1-2025_  
> **Tags:** `api` `frontend` `backend` `infra` `mobile` `data` `security`

---

## Identificação

| Campo | Valor |
|---|---|
| Título | `[Verbo] + [Objeto] + [Contexto]` |
| Repositório(s) | _ex: `org/repo-api`, `org/repo-frontend`_ |
| Feature relacionada | _ex: #123 ou N/A_ |
| Tipo de mudança | `Nova feature` / `Bugfix` / `Refatoração` / `Infra` / `Hotfix` |

---

## Contexto de Negócio

### Objetivo de Negócio
> Qual problema está sendo resolvido? Qual métrica será impactada?

_Descreva aqui._

### Persona / Usuários
> Quem é o usuário final? Operador interno? Sistema parceiro?

_Descreva aqui._

### Jornada Atual
> Como o usuário resolve isso hoje? Quais são os pontos de dor?

_Descreva aqui._

### Jornada Desejada
> Como deve funcionar após a entrega?

_Descreva aqui._

### Dependências de Negócio _(opcional)_

_Descreva ou escreva "N/A"._

### Alinhamento OKR/KPI _(opcional)_

_Descreva ou escreva "N/A"._

---

## User Stories e Critérios de Aceite

### User Story 1

> **Como** [persona], **quero** [ação], **para que** [benefício].

#### Critérios de Aceite

**AC-01**
```
DADO   [contexto inicial]
QUANDO [ação do usuário ou evento]
ENTÃO  [resultado esperado]
```

**AC-02**
```
DADO   [contexto]
QUANDO [ação]
ENTÃO  [resultado]
```

### Regras de Negócio

- **RN-01:** _Descreva a regra_
- **RN-02:** _Descreva a regra_

### Fluxos Excepcionais

- **Erro X:** _O que acontece_
- **Caso limite Y:** _O que acontece_

### Exemplos de Payload _(quando aplicável)_

**Request:**
```json
{
  "campo": "valor"
}
```

**Response (sucesso):**
```json
{
  "id": "uuid",
  "campo": "valor"
}
```

**Response (erro):**
```json
{
  "error": "mensagem descritiva",
  "code": "ERROR_CODE"
}
```

---

## Requisitos Técnicos

### APIs e Contratos

_Endpoints existentes ou novos, métodos HTTP, descrição_

### Feature Flags

- [ ] Necessário? Se sim: nome da flag, critério de ativação, rollout

### Dependências Técnicas

- _Outros PBIs/Issues: #xxx_
- _Serviços externos: nome + responsável_
- _Bibliotecas novas: nome + versão_

### Requisitos Não-Funcionais

| Tipo | Requisito |
|---|---|
| Performance | _ex: p95 < 200ms para endpoints principais_ |
| Segurança | _ex: autenticação JWT obrigatória, dados X são sensíveis_ |
| Escalabilidade | _ex: suportar 500 req/s no pico_ |
| Observabilidade | _ex: log estruturado com correlation ID, métrica de latência_ |
| Riscos técnicos | _ex: complexidade de migração, dependência externa instável_ |

---

## Design e UX _(quando aplicável)_

- **Figma / Protótipo:** [link]
- **Componentes de UI:** _lista_
- **Fluxo de navegação:** _descrição_
- **Responsividade:** _mobile-first, breakpoints relevantes_
- **Acessibilidade:** _requisitos WCAG (mínimo: AA)_

---

## Definition of Ready (DoR)

Checklist obrigatório antes de mover para o sprint:

- [ ] Título segue padrão `[Verbo] + [Objeto] + [Contexto]`
- [ ] Os 4 campos obrigatórios de contexto preenchidos (objetivo, persona, jornada atual, jornada desejada)
- [ ] Ao menos 1 User Story com critérios DADO/QUANDO/ENTÃO
- [ ] Regras de negócio documentadas
- [ ] Tipo de mudança definido
- [ ] Prioridade e sprint/milestone definidos
- [ ] Repositórios impactados identificados
- [ ] Tech Lead revisou e aprovou
- [ ] Refinamento realizado (quando aplicável)
- [ ] Design/UX linkado (quando aplicável)
- [ ] Requisitos não-funcionais definidos (quando aplicável)

---

## Rastreamento de Progresso

### Tasks

- [ ] Task 1: _descrição_ — `repo/branch` — @responsável
- [ ] Task 2: _descrição_ — `repo/branch` — @responsável

### Pull Requests

| PR | Repositório | Status |
|---|---|---|
| #___ | _repo_ | `Open` / `Merged` / `Closed` |

### Fase Atual

`Draft` → `Ready` → `In Progress` → `In Review` → `Done`

---

## Notas de Discovery _(preenchido após refinamento)_

_Observações técnicas, decisões tomadas, riscos identificados._

---

## Histórico de Mudanças

| Data | Autor | Mudança |
|---|---|---|
| YYYY-MM-DD | @username | Criação do PBI |
