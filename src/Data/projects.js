export const projects = [
  {
    id: 1,
    number: "01",

    title: "AI Research Assistant",

    subtitle: "Production RAG System",

    description:
      "A production-grade Retrieval-Augmented Generation system that ingests PDFs and documents, retrieves relevant context using FAISS, and generates citation-aware answers with LLMs.",

    problem:
      "Searching through hundreds of documents manually is slow and inefficient. Users needed an AI capable of understanding their own knowledge base.",

    solution:
      "Designed a Retrieval-Augmented Generation pipeline using LangChain, FAISS and OpenAI to retrieve accurate context before generating answers.",

    architecture: [
      "React Frontend",
      "FastAPI Backend",
      "LangChain",
      "FAISS",
      "OpenAI"
    ],

    features: [
      "PDF Upload",
      "Streaming Responses",
      "Conversation Memory",
      "Citation Support",
      "Authentication"
    ],

    challenges: [
      "Reducing hallucinations",
      "Improving retrieval accuracy",
      "Managing token limits",
      "Optimizing response speed"
    ],

    tech: [
      "Python",
      "LangChain",
      "FAISS",
      "FastAPI",
      "OpenAI",
      "Docker"
    ],

    github: "https://github.com/faizur55/Production-RAG-Chatbot",

    demo: "#",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
  },

  {
    id: 2,

    number: "02",

    title: "Multi-Agent AI Software Team",

    subtitle: "Agentic Workflow",

    description:
      "A collaborative team of AI agents that plans, writes, reviews, and improves software automatically using LangGraph and CrewAI.",

    problem:
      "Software development involves repetitive collaboration between multiple roles. I wanted autonomous AI agents to simulate a software team.",

    solution:
      "Created multiple autonomous AI agents using CrewAI and LangGraph capable of planning, coding, reviewing and refining software together.",

    architecture: [
      "CrewAI",
      "LangGraph",
      "OpenAI",
      "Python"
    ],

    features: [
      "Planner Agent",
      "Developer Agent",
      "Reviewer Agent",
      "Documentation Agent"
    ],

    challenges: [
      "Agent coordination",
      "Memory sharing",
      "Reducing infinite loops",
      "Prompt optimization"
    ],

    tech: [
      "CrewAI",
      "LangGraph",
      "Python",
      "OpenAI"
    ],

    github: "https://github.com/faizur55",

    demo: "#",

    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80",
  },

  {
    id: 3,

    number: "03",

    title: "GPT From Scratch",

    subtitle: "Transformer Engineering",

    description:
      "Implemented a decoder-only Transformer in PyTorch from first principles, including embeddings, causal attention, LayerNorm, feed-forward blocks, and text generation.",

    problem:
      "Most engineers use LLMs without understanding how they work internally. I wanted to build one from scratch.",

    solution:
      "Implemented the complete Transformer architecture manually using PyTorch including self-attention, embeddings and autoregressive text generation.",

    architecture: [
      "Python",
      "PyTorch",
      "NumPy"
    ],

    features: [
      "Self Attention",
      "Layer Normalization",
      "Token Embeddings",
      "Autoregressive Generation"
    ],

    challenges: [
      "Understanding attention math",
      "Efficient tensor operations",
      "Training stability",
      "Gradient optimization"
    ],

    tech: [
      "PyTorch",
      "Python",
      "NumPy"
    ],

    github: "https://github.com/faizur55",

    demo: "#",

    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
  },
];