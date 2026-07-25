export default function About() {
    return (
      <section id="about" className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="font-mono text-sm text-accent-blue">&gt; cat ./about.md</p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
          About
        </h2>
        <p className="mt-4 text-muted">
          Full bio coming next: MSc in AI, published research, and how I got here.
        </p>
      </section>
    );
  }