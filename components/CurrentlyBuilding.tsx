type BuildCardProps = {
    title: string;
    description: string;
    tags: string[];
  };
  
  function BuildCard({ title, description, tags }: BuildCardProps) {
    return (
      <div className="rounded-lg border border-border bg-surface p-6 text-left">
        <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-accent-blue"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  }
  
  export default function CurrentlyBuilding() {
    return (
      <section id="building" className="mx-auto max-w-4xl px-6 py-24">
        <p className="font-mono text-sm text-accent-red">&gt; status --current</p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
          What I&apos;m building now
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          I&apos;ve spent the last stretch shipping projects across NLP,
          computer vision, and applied ML you can see those below. Right now
          I&apos;m pointed at two harder problems.
        </p>
  
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <BuildCard
            title="AI Tutor with a custom 2D rendering engine"
            description="Most of what I know about complex architectures, I learned by pushing ChatGPT and Claude to explain them  but chat alone can't build visual intuition. I'm building a tutor that teaches concepts one step at a time through a custom 2D rendering engine, so ideas that are usually just described get shown."
            tags={["Python", "Custom 2D Engine", "LLMs"]}
          />
          <BuildCard
            title="Agentic Plant Health Assistant"
            description="Combining PlantNet39 (disease classification), DocuMind (document intelligence), and an agentic reasoning layer to turn a photo of a sick plant into an actionable treatment recommendation for farmers and gardeners."
            tags={["Computer Vision", "RAG", "Agents"]}
          />
        </div>
      </section>
    );
  }