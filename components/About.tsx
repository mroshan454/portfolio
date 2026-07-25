const focusAreas = [
    "AI/ML Engineering",
    "Data Analysis",
    "Computer Vision",
    "NLP",
  ];
  
  export default function About() {
    return (
      <section id="about" className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="font-mono text-sm text-accent-blue">&gt; cat ./about.md</p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
          About
        </h2>
  
        <p className="mx-auto mt-6 max-w-2xl text-muted">
          I&apos;m a self-taught builder who got into AI/ML by taking things
          apart and rebuilding them from scratch. Rather than stopping at
          using pretrained models, I&apos;ve implemented transformers, vision
          models, and RAG pipelines myself to actually understand how they
          work, and I write about what I learn along the way.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          On the data side, I work regularly with Python for analysis:
          pandas, NumPy, and matplotlib for cleaning, exploring, and
          visualizing data. I&apos;m currently looking for entry-level
          opportunities, either as an AI/ML engineer or a data analyst,
          where I can keep building and learning on real problems.
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-border px-4 py-2 font-mono text-sm text-accent-blue"
            >
              {area}
            </span>
          ))}
        </div>
  
        <div className="mx-auto mt-10 max-w-2xl border-t border-border pt-6">
          <p className="font-mono text-xs tracking-widest text-muted uppercase">
            Education
          </p>
          <p className="mt-2 text-sm text-muted">
            MSc in Artificial Intelligence
          </p>
        </div>
      </section>
    );
  }