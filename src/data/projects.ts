export interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  year: number;
}

export const projects: Project[] = [
  {
    name: "climbing-elo",
    description: "elo rating system for competitive climbing — tracks athlete rankings across IFSC events",
    tags: ["python", "flask", "sqlite"],
    github: "https://github.com/milwil-2/climb-elo",
    live: "https://climb-elo.vercel.app/",
    year: 2024,
  },
  {
    name: "curio",
    description: "RAG demo comparing dense, hybrid, and reranked retrieval pipelines side-by-side — recall@k eval harness shows ~5× top-1 improvement with reranking",
    tags: ["python", "fastapi", "qdrant", "gemini"],
    github: "https://github.com/milwil-2/curio-rag",
    live: "https://mdubs28-curio.hf.space/",
    year: 2025,
  },
];
