// As etapas da esteira, em ordem. Aqui a numeração é legítima:
// o conteúdo É uma sequência (uma etapa alimenta a próxima).
export const ETAPAS = [
  {
    n: "01",
    comando: "/generate-pbi",
    titulo: "Criar o PBI",
    o_que: "Descreve a demanda em Markdown, com critérios de aceite e cenários de teste.",
    porque:
      "Código nasce de um critério, não de achismo. Se o critério não vira teste, ele volta antes de custar trabalho.",
  },
  {
    n: "02",
    comando: "/validate-pbi",
    titulo: "Validar",
    o_que: "Confere o Definition of Ready e cruza a demanda com o código real do projeto.",
    porque:
      "É aqui que bloqueadores aparecem cedo (ex: falta runner de teste) — quando corrigir é barato.",
  },
  {
    n: "03",
    comando: "/generate-tasks",
    titulo: "Gerar tasks",
    o_que: "Quebra o PBI em tarefas pequenas, cada uma ligada a um critério e a um teste.",
    porque:
      "Traduz o 'o quê' em 'como', garantindo que nenhum critério fique sem task nem sem prova.",
  },
  {
    n: "04",
    comando: "/develop",
    titulo: "Desenvolver",
    o_que: "Orquestra: coder implementa (AC-TDD) → auditoria de qualidade → review final.",
    porque:
      "Nenhum agente se auto-aprova. O portão de qualidade — testes verdes, sem débito crítico, review ok — decide o 'done'.",
  },
];

// Princípio que atravessa toda a esteira.
export const PRINCIPIO =
  "Nenhuma linha de código existe sem um critério que a justifique; nenhum critério é entregue sem um teste que o prove.";
