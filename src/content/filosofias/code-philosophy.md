---
name: code-philosophy
description: As 5 Leis do Código — Early Exit, Parse Don't Validate, Atomic Predictability, Fail Fast, Intentional Naming. Carregar para qualquer código de backend, lógica de negócio ou fluxo de dados.
---

# Code Philosophy — As 5 Leis do Código

Padrões de qualidade que todo código de produção deve cumprir, independente da linguagem. Cada lei tem critérios verificáveis — use-os como checklist antes de finalizar.

---

## Lei 1 — Early Exit (Guard Clauses)

Trate casos de borda no topo da função e saia cedo. O caminho feliz fica no nível de indentação zero.

```typescript
// ❌ Aninhamento profundo
function processOrder(order: Order) {
  if (order) {
    if (order.items.length > 0) {
      if (order.status === 'pending') {
        // lógica real enterrada aqui
      }
    }
  }
}

// ✅ Guard clauses
function processOrder(order: Order) {
  if (!order) throw new InvalidOrderError('order ausente');
  if (order.items.length === 0) throw new EmptyOrderError(order.id);
  if (order.status !== 'pending') return; // nada a fazer

  // lógica real no nível zero
}
```

**Verificação:** profundidade de aninhamento < 3; nenhum `else` que poderia ser `return`.

---

## Lei 2 — Parse, Don't Validate

Converta dados externos em tipos ricos **na fronteira** (controller, handler, CLI). Depois da fronteira, o tipo é confiável — nenhuma revalidação interna.

```typescript
// ❌ Validação espalhada
function applyDiscount(email: string, pct: number) {
  if (!email.includes('@')) throw new Error('email inválido'); // de novo?!
  ...
}

// ✅ Parse na fronteira, tipo confiável dentro
const CustomerSchema = z.object({ email: z.string().email(), pct: z.number().min(0).max(100) });
type Customer = z.infer<typeof CustomerSchema>;

function applyDiscount(customer: Customer) {
  // customer JÁ é válido por construção — zero revalidação
}
```

Equivalentes: Pydantic (Python), records + validação no construtor (Java/C#), Zod/Valibot (TS).

**Verificação:** validação existe só na fronteira; funções internas recebem tipos ricos, não primitivas soltas.

---

## Lei 3 — Atomic Predictability

Funções puras onde possível. Efeitos colaterais isolados, explícitos e empurrados para as bordas.

```python
# ❌ Cálculo + I/O misturados
def calculate_and_save_tax(order):
    tax = order.total * get_rate_from_db(order.region)  # I/O escondido
    db.save(tax)
    return tax

# ✅ Puro no núcleo, I/O na casca
def calculate_tax(total: Decimal, rate: Decimal) -> Decimal:
    return total * rate  # puro: mesmo input → mesmo output

def process_order_tax(order):          # casca: orquestra I/O
    rate = tax_repository.rate_for(order.region)
    tax = calculate_tax(order.total, rate)
    tax_repository.save(order.id, tax)
```

**Verificação:** lógica de negócio testável sem mocks de infra; nomes de função com efeito colateral deixam isso claro (`save`, `send`, `persist`).

---

## Lei 4 — Fail Fast, Fail Loud

Estado inválido para a execução imediatamente com erro descritivo. Nunca engula exceções, nunca degrade silenciosamente.

```typescript
// ❌ Silencioso
try { publishEvent(event); } catch { /* ignora */ }

// ✅ Alto e claro
if (!config.QUEUE_URL) {
  throw new ConfigError('QUEUE_URL ausente — verifique variáveis de ambiente');
}
try {
  publishEvent(event);
} catch (err) {
  logger.error({ err, eventId: event.id }, 'falha ao publicar evento');
  throw new EventPublishError(event.id, { cause: err });
}
```

**Verificação:** zero `catch` vazio; mensagens de erro dizem **o quê**, **onde** e **como corrigir**; sem valores default mascarando config ausente.

---

## Lei 5 — Intentional Naming

Código lê como inglês (ou como o idioma do domínio do projeto). Nome revela intenção, não implementação.

| ❌ | ✅ |
|----|----|
| `d`, `tmp`, `data2` | `daysSinceLastLogin`, `parsedInvoice` |
| `check()` | `isEligibleForDiscount()` |
| `handle(x)` | `retryFailedPayment(payment)` |
| `utils.ts` (saco de gatos) | `currency-formatting.ts` |

**Verificação:** booleans começam com `is/has/can/should`; funções que retornam valor descrevem o valor; sem abreviações fora do domínio (aceitável: `id`, `url`; inaceitável: `usrMgr`).

---

## Checklist Final (antes de entregar)

- [ ] **Early Exit** — guards no topo, aninhamento < 3
- [ ] **Parse Don't Validate** — parse na fronteira, tipos confiáveis dentro
- [ ] **Atomic Predictability** — núcleo puro, I/O nas bordas
- [ ] **Fail Fast** — erros imediatos e descritivos, zero catch silencioso
- [ ] **Intentional Naming** — nomes revelam intenção, leem naturalmente
- [ ] Zero `console.log`/`print` de debug esquecido
- [ ] Zero código comentado morto
