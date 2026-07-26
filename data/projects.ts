export type Project = {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
  };
  
  export const projects: Project[] = [
    {
      slug: "documind",
      title: "DocuMind",
      description:
        "Upload a PDF and chat with it directly. Ask questions and get answers grounded in the document's actual content.",
      tags: ["Python", "LLMs", "RAG"],
      image: "/projects/documind.png",
      liveUrl: "https://documind-bsa2.onrender.com/ui/",
      githubUrl: "https://github.com/mroshan454/documind",
    },
    {
      slug: "gpt-from-scratch",
      title: "GPT from Scratch",
      description:
        "A GPT-style language model built end to end from scratch: tokenizer, attention, and training loop. It learns to predict the next token, so feeding it 'I love' produces a continuation like 'I love Machine Learning.'",
      tags: ["PyTorch", "Transformers", "NLP"],
      image:"/projects/gpt1.png",
      githubUrl: "https://github.com/mroshan454/GPT-From-Scratch-PyTorch-",
    },
    {
      slug: "plantnet39",
      title: "PlantNet39",
      description:
        "Fine-tuned EfficientNetB2 on the PlantVillage dataset to classify 39 categories: 38 plant disease classes plus a dedicated class for images that aren't leaves at all.",
      tags: ["PyTorch", "EfficientNet", "Computer Vision"],
      image:"/projects/plantnet39.png",
      githubUrl: "https://github.com/mroshan454/PlantNet39",
    },
    {
      slug: "crosssight",
      title: "CrossSight",
      description:
        "A multimodal image captioning model pairing an EfficientNetB0 encoder with a Transformer decoder. Upload an image and it generates a natural language caption.",
      tags: ["PyTorch", "EfficientNet", "Transformers"],
      githubUrl: "https://github.com/mroshan454/CrossSight_Image_Captioning",
    },
    {
      slug: "vit-replication",
      title: "Replicating ViT",
      description:
        "A from-scratch replication of the Vision Transformer (ViT) paper: patch embeddings, positional encoding, and the transformer encoder, classifying images with no convolutions at all.",
      tags: ["PyTorch", "Vision Transformer", "Research"],
      githubUrl: "https://github.com/mroshan454/Replicating-ViT-Research-Paper",
    },
  ];