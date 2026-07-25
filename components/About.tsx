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
          I hold a BSc in Computer Science and an MSc in Artificial
          Intelligence, where I built a foundation in machine learning, deep
          learning, reinforcement learning, NLP, and data visualization. AI
          engineering, working hands-on with LLMs, RAG, and agents, is new
          enough that it isn&apos;t really taught yet, so I&apos;ve been
          learning it myself by implementing things from scratch: transformers,
          vision models, and full RAG pipelines, rather than stopping at using
          pretrained models.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          On the data side, I work regularly with Python for analysis: pandas,
          NumPy, and matplotlib for cleaning, exploring, and visualizing data.
          I&apos;m currently looking for entry-level opportunities, either as
          an AI/ML engineer or a data analyst, where I can keep building and
          learning on real problems.
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
          <p className="mt-2 text-sm text-muted">BSc in Computer Science</p>
          <p className="mt-1 text-sm text-muted">
            MSc in Artificial Intelligence
          </p>
        </div>
      </section>
    );
  }