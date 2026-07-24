/* =============================================================
   MANIFESTO DA BIBLIOTECA
   Metadados de cada artefato copiável + carga do conteúdo real.
   O texto dos .md vem de src/content/ (empacotado de Agents-ia),
   lido cru via import.meta.glob do Vite.
   ============================================================= */

// Carrega TODOS os markdowns de src/content como texto puro.
// Chave: caminho absoluto do módulo (ex: "/src/content/agentes/reviewer.md").
const raws = import.meta.glob("/src/content/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

/** Retorna o conteúdo cru de um arquivo em src/content, ou "" se não achar. */
function raw(relPath) {
  const key = `/src/content/${relPath}`;
  return raws[key] ?? "";
}

// Grupos exibidos na biblioteca. Cada item tem título, resumo, o "porquê"
// (a razão daquela camada existir) e o arquivo-fonte.
export const GRUPOS = [
  {
    id: "agentes",
    rotulo: "Agentes",
    descricao:
      "Subagentes especializados. Cada um com papel, autoridade e proibições claras — o que faz a esteira ser confiável.",
    itens: [
      {
        arquivo: "agentes/coder-csharp.md",
        titulo: "Coder — C# / .NET",
        resumo: "Implementa backend .NET 8 (CQRS, EF Core, xUnit) via AC-TDD.",
        porque:
          "Cada stack tem convenções próprias. Um coder especialista respeita os padrões da linguagem sem você reexplicar a cada tarefa.",
      },
      {
        arquivo: "agentes/coder-java.md",
        titulo: "Coder — Java / Spring",
        resumo: "Spring Boot 3, JUnit 5, Testcontainers, testes de mutação.",
        porque:
          "Java pede Clean Architecture e ferramentas próprias. Separar por stack mantém a qualidade específica de cada ecossistema.",
      },
      {
        arquivo: "agentes/coder-nextjs.md",
        titulo: "Coder — Next.js",
        resumo: "App Router, Server Actions, Playwright, deploy Vercel.",
        porque:
          "Full-stack no Next tem regras de Server/Client Components que só um especialista aplica sem tropeçar.",
      },
      {
        arquivo: "agentes/coder-python.md",
        titulo: "Coder — Python",
        resumo: "FastAPI, scripts e Data Science/ML com pytest + mypy.",
        porque:
          "Python atua em três modos distintos. Um coder ciente disso escolhe as ferramentas certas para cada contexto.",
      },
      {
        arquivo: "agentes/coder-react-ts.md",
        titulo: "Coder — React + TS",
        resumo: "Componentes, hooks, Vitest + Testing Library + MSW.",
        porque:
          "Front tem sua própria disciplina de testes e acessibilidade. Isolar aqui evita misturar com regras de backend.",
      },
      {
        arquivo: "agentes/reviewer.md",
        titulo: "Reviewer",
        resumo: "Revisa em 4 camadas + as 5 Leis. Só lê, nunca edita.",
        porque:
          "Quem escreve não deve se auto-aprovar. Um revisor independente (e proibido de editar) é o contraponto que pega o que o coder não vê.",
      },
      {
        arquivo: "agentes/quality-auditor.md",
        titulo: "Quality Auditor",
        resumo: "Sonar local, code smells, SOLID, complexidade → PBIs.",
        porque:
          "Detectar e corrigir são papéis diferentes. O auditor orquestra o ciclo de qualidade e delega a correção ao coder certo.",
      },
      {
        arquivo: "agentes/researcher.md",
        titulo: "Researcher",
        resumo: "Pesquisa externa (npm, NuGet, PyPI, Maven) com fonte citada.",
        porque:
          "Pesquisar bem é uma habilidade separada de codar. Um agente read-only dedicado devolve código pronto com referência.",
      },
      {
        arquivo: "agentes/scribe.md",
        titulo: "Scribe",
        resumo: "Commits, PRs, READMEs e docs. Não roda comandos.",
        porque:
          "Texto para humanos é ofício próprio. Separar a escrita de prosa do código mantém as duas coisas boas.",
      },
    ],
  },
  {
    id: "filosofias",
    rotulo: "Filosofias",
    descricao:
      "As regras que todo coder carrega antes de escrever. É o que impede a IA de 'alucinar' código.",
    itens: [
      {
        arquivo: "filosofias/tdd-philosophy.md",
        titulo: "TDD Philosophy (AC-TDD)",
        resumo: "Matriz de rastreabilidade + ciclo RED→GREEN→REFACTOR.",
        porque:
          "Amarra cada linha de código a um critério de aceite testável. Sem isso, a IA entrega features que ninguém pediu.",
      },
      {
        arquivo: "filosofias/code-philosophy.md",
        titulo: "Code Philosophy (5 Leis)",
        resumo: "Early Exit, Parse Don't Validate, Pureza, Fail Fast, Nomes.",
        porque:
          "Cinco regras verificáveis transformam 'código genérico de tutorial' em código de produção que o revisor consegue checar.",
      },
      {
        arquivo: "filosofias/frontend-philosophy.md",
        titulo: "Frontend Philosophy (5 Pilares)",
        resumo: "Tipografia, Cor, Movimento, Composição, Atmosfera + a11y.",
        porque:
          "Dá critérios objetivos ao visual (contraste AA, durações, escala) em vez de 'ficou bonito'.",
      },
    ],
  },
  {
    id: "comandos",
    rotulo: "Comandos",
    descricao:
      "A esteira automatizada. Cada comando é uma etapa com entrada, saída e portão de qualidade.",
    itens: [
      {
        arquivo: "comandos/generate-pbi.md",
        titulo: "/generate-pbi",
        resumo: "Cria o PBI em Markdown, questionando o contexto.",
        porque:
          "Demanda mal escrita gera código ruim. O comando força contexto e cenários de teste antes de qualquer linha.",
      },
      {
        arquivo: "comandos/validate-pbi.md",
        titulo: "/validate-pbi",
        resumo: "Valida o PBI contra o DoR e contra o código real.",
        porque:
          "Pega bloqueadores (ex: falta runner de teste) antes de codar — quando é barato corrigir.",
      },
      {
        arquivo: "comandos/generate-tasks.md",
        titulo: "/generate-tasks",
        resumo: "Quebra o PBI em tasks rastreáveis por camada.",
        porque:
          "Traduz critérios em passos executáveis, garantindo que nenhum critério fique sem task nem sem teste.",
      },
      {
        arquivo: "comandos/develop.md",
        titulo: "/develop",
        resumo: "Orquestra coder → auditoria → review → fechar.",
        porque:
          "Um maestro que delega e verifica. Nenhum agente se auto-aprova; o portão de qualidade decide o 'done'.",
      },
    ],
  },
  {
    id: "templates",
    rotulo: "Templates de PBI",
    descricao:
      "Modelos prontos de demanda. Escolha conforme onde seu time registra trabalho.",
    itens: [
      {
        arquivo: "pbi/pbi-github-issues.md",
        titulo: "PBI — GitHub Issues",
        resumo: "Corpo pronto para colar como Issue (labels, milestones).",
        porque:
          "Padroniza a demanda direto na ferramenta que a maioria dos times já usa.",
      },
      {
        arquivo: "pbi/pbi-markdown.md",
        titulo: "PBI — Markdown puro",
        resumo: "Template versionável em git, sem depender de plataforma.",
        porque:
          "Para quem não tem Jira/Azure: o board vira Markdown no próprio repositório.",
      },
    ],
  },
];

/** Adiciona o conteúdo cru a cada item, na hora de consumir. */
export function comConteudo(grupo) {
  return {
    ...grupo,
    itens: grupo.itens.map((it) => ({ ...it, conteudo: raw(it.arquivo) })),
  };
}
