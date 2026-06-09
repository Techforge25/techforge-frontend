import type { JobPosition } from "../types";

export const jobDetail: JobPosition = {
  slug: "ai-backend-engineer",
  title: "AI Backend Engineer",
  department: "Engineering",
  location: "Islamabad, PK (Hybrid)",
  type: "Full-time",
  experience: "4+ years",
  salaryRange: "PKR 300k - 500k / month",
  description:
    "We are seeking an AI Backend Engineer to build robust AI agents, set up scalable LLM integration pipelines, and optimize database querying APIs.",
  aboutRole:
    "As an AI Backend Engineer at TechForge Innovations, you will design the brain of our next-generation applications. You will be responsible for integrating state-of-the-art LLMs, constructing robust agentic workflows, building custom API backends, and tuning database performance for high-throughput client integrations.",
  responsibilities: [
    "Design and optimize server-side architectures, APIs, and background queue workers.",
    "Build and deploy agentic AI workflows, LLM orchestration layers, and RAG systems.",
    "Develop scalable RESTful and GraphQL APIs using Node.js, Express, or Python/FastAPI.",
    "Structure, optimize, and maintain SQL and Vector databases (e.g. PostgreSQL, Pinecone).",
    "Monitor server health, setup CI/CD deployment pipelines, and optimize compute budgets."
  ],
  requirements: [
    "4+ years of professional backend software engineering experience.",
    "Proficient in Node.js (TypeScript) and/or Python.",
    "Hands-on experience with LLM APIs (OpenAI, Anthropic, Gemini) and orchestrators (LangChain, LlamaIndex).",
    "Solid experience with databases (PostgreSQL/Prisma, MongoDB) and Vector DBs.",
    "Good understanding of server infrastructure, Docker, AWS services, and caching mechanisms (Redis)."
  ],
  niceToHave: [
    "Experience with serverless paradigms (Vercel, AWS Lambda).",
    "Familiarity with machine learning frameworks (PyTorch, TensorFlow) and model fine-tuning.",
    "Open-source contributions in the AI space."
  ],
  benefits: [
    "Highly competitive salary package and equity options.",
    "Flexible hybrid working options (Islamabad office).",
    "Access to high-compute GPU instances and learning budget.",
    "Premium health insurance.",
    "Gym allowance and catering at the office."
  ]
};
