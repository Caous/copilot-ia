---
title: "[Verbo] + [Objeto] + [Contexto]"
labels: ["type: feature", "status: draft"]
assignees: []
milestone: ""
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
> Campanhas, regulatório, parceiros externos?

_Descreva aqui ou escreva "N/A"._

### Alinhamento OKR/KPI _(opcional)_
> Qual OKR ou KPI esta entrega impacta?

_Descreva aqui ou escreva "N/A"._

---

## User Stories e Critérios de Aceite

### User Story Principal

> **Como** [persona], **quero** [ação], **para que** [benefício].

#### Critérios de Aceite

```
DADO   [contexto inicial]
QUANDO [ação do usuário ou evento]
ENTÃO  [resultado esperado]
```

```
DADO   [contexto]
QUANDO [ação]
ENTÃO  [resultado]
```

> Adicione blocos DADO/QUANDO/ENTÃO adicionais conforme necessário.

### Regras de Negócio

- RN-01: _Descreva a regra_
- RN-02: _Descreva a regra_

### Fluxos Excepcionais

- **Erro X:** _O que acontece_
- **Caso limite Y:** _O que acontece_

---

## Requisitos Técnicos

| Campo | Valor |
|---|---|
| Tipo de mudança | `[ ] Nova feature` `[ ] Bugfix` `[ ] Refatoração` `[ ] Infra` `[ ] Hotfix` |
| Repositórios impactados | _ex: `org/repo-api`, `org/repo-frontend`_ |
| APIs envolvidas | _Endpoints existentes ou novos_ |
| Feature Flags | _Necessário? Critério de ativação?_ |
| Dependências técnicas | _Outros issues, serviços externos, bibliotecas_ |

### Requisitos Não-Funcionais _(quando aplicável)_
- **Performance:** _SLA esperado, ex: p95 < 200ms_
- **Segurança:** _Autenticação, autorização, dados sensíveis_
- **Escalabilidade:** _Volume esperado, picos_
- **Observabilidade:** _Logs, métricas, traces necessários_

### Contratos Esperados _(quando aplicável)_

**Request:**
```json
{
  "campo": "tipo"
}
```

**Response:**
```json
{
  "campo": "tipo"
}
```

---

## Design e UX _(quando aplicável)_

- **Figma / Protótipo:** [link]
- **Componentes de UI:** _lista_
- **Fluxo de navegação:** _descrição_
- **Responsividade:** _breakpoints relevantes_
- **Acessibilidade:** _requisitos WCAG_

---

## Definition of Ready (DoR)

> Marque antes de mover para o sprint.

- [ ] Título segue padrão `[Verbo] + [Objeto] + [Contexto]`
- [ ] Os 4 campos obrigatórios de contexto de negócio estão preenchidos (objetivo, persona, jornada atual, jornada desejada)
- [ ] Ao menos 1 User Story com critérios DADO/QUANDO/ENTÃO
- [ ] Regras de negócio documentadas
- [ ] Tipo de mudança definido
- [ ] Repositórios impactados identificados
- [ ] Tech Lead revisou e aprovou
- [ ] Refinamento realizado (quando aplicável)
- [ ] Design/UX linkado (quando aplicável)
- [ ] Requisitos não-funcionais definidos (quando aplicável)

---

## Notas de Discovery _(preenchido após refinamento)_

_Observações técnicas, decisões tomadas, riscos identificados durante o discovery._
