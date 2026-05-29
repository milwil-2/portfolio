export interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  year: number;
  wip?: boolean;
  summary?: {
    current: string[];
    future: string[];
  };
}

export const projects: Project[] = [
  {
    name: "climbing-elo",
    description: "elo rating system for competitive climbing — tracks athlete rankings across IFSC events",
    tags: ["python", "flask", "sqlite"],
    github: "https://github.com/milwil-2/climb-elo",
    live: "https://climb-elo.vercel.app/",
    year: 2026,
    wip: true,
    summary: {
      current: [
        "scrapes IFSC competition results and computes elo ratings via a backfill pipeline",
        "leaderboard dashboard with sortable rankings and per-athlete rating histories",
        "backtest harness that replays past seasons to validate rating accuracy",
      ],
      future: [
        "head-to-head matchup win-probability predictor",
        "live rating updates during ongoing competitions",
      ],
    },
  },
  {
    name: "curio",
    description: "RAG demo comparing dense, hybrid, and reranked retrieval pipelines side-by-side — recall@k eval harness shows ~5× top-1 improvement with reranking",
    tags: ["python", "fastapi", "qdrant", "gemini"],
    github: "https://github.com/milwil-2/curio-rag",
    live: "https://mdubs28-curio.hf.space/",
    year: 2026,
    wip: true,
    summary: {
      current: [
        "ingests wikipedia articles, then chunks and embeds them into a qdrant cloud vector db",
        "runs one question through three pipelines: dense, hybrid (BM25 + dense via RRF), and hybrid + cross-encoder rerank",
        "streams a cited LLM answer token-by-token for each pipeline (gemini 2.5 flash)",
        "recall@k eval harness over hand-written fixtures showing ~5× top-1 recall gain from reranking",
      ],
      future: [
        "agentic retrieval that plans multi-step lookups",
        "adaptive-tutor mode that adjusts answers to the user",
      ],
    },
  },
  {
    name: "chess-nn",
    description: "AlphaZero-style chess engine built from scratch — a self-trained residual CNN policy/value network driven by Monte-Carlo Tree Search",
    tags: ["python", "pytorch", "mcts", "cnn"],
    github: "https://github.com/milwil-2/chess-nn",
    live: "https://chess-nn.vercel.app/",
    year: 2025,
    wip: true,
    summary: {
      current: [
        "~5.6M-param residual CNN (10 SE-residual blocks) with an AlphaZero policy head and a 3-class WDL value head",
        "PUCT Monte-Carlo Tree Search drives move selection",
        "trains supervised on human games, then improves via self-play reinforcement learning",
        "playable through a pygame visualizer, a UCI adapter (cutechess / lichess), or head-to-head model matchups",
      ],
      future: [
        "stronger variants that fix recurring weak moves (early king walks, hung pieces)",
        "continued self-play training to push playing strength",
      ],
    },
  },
  {
    name: "business-network",
    description: "graph of a B2B trade & trust network — verified company profiles linked by trade relationships, with calculated trust scores and hybrid GraphRAG question answering",
    tags: ["python", "fastapi", "neo4j", "groq"],
    github: "https://github.com/milwil-2/Business-Networking",
    live: "https://knowledge-graph-2ho71vzq6-milwil-2s-projects.vercel.app",
    year: 2026,
    wip: true,
    summary: {
      current: [
        "models companies, people, products, industries, and licenses as a neo4j graph linked by trade relationships (sells-to, supplies, references, and more)",
        "calculated 0–100 trust score per company from creditworthiness, trade references, verification, licenses, and fraud signals — surfaced in the viz with a per-company breakdown",
        "hybrid GraphRAG /ask: chroma vector search seeds relevant nodes, the graph expands their neighbors, and groq llama 3.3 answers with cited node ids",
        "interactive in-browser graph visualization of the trade network",
      ],
      future: [
        "replace the seeded mock dataset with real company data acquired through an agent-aided ELT pipeline",
        "expand trust signals as live data lands",
      ],
    },
  },
];
