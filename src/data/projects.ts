export interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  year: number;
  wip?: boolean;
}

export const projects: Project[] = [
  {
    name: "climbing-elo",
    description: "elo rating system for competitive climbing — tracks athlete rankings across IFSC events",
    tags: ["python", "flask", "sqlite"],
    github: "https://github.com/milwil-2/climb-elo",
    live: "https://climb-elo.vercel.app/",
    year: 2024,
    wip: true,
  },
  {
    name: "curio",
    description: "RAG demo comparing dense, hybrid, and reranked retrieval pipelines side-by-side — recall@k eval harness shows ~5× top-1 improvement with reranking",
    tags: ["python", "fastapi", "qdrant", "gemini"],
    github: "https://github.com/milwil-2/curio-rag",
    live: "https://mdubs28-curio.hf.space/",
    year: 2025,
    wip: true,
  },
  {
    name: "knowledge-graph",
    description: "personal knowledge graph that ingests Obsidian notes into Neo4j and lets you query connections via a GraphRAG-powered chat interface",
    tags: ["python", "fastapi", "neo4j", "next.js"],
    github: "https://github.com/milwil-2/knowledge-graph",
    live: "https://knowledge-graph-2ho71vzq6-milwil-2s-projects.vercel.app",
    year: 2025,
    wip: true,
  },
];
