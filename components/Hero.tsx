export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Signature element: train/val loss curves, diverging slightly (a nod to overfitting) */}
      <svg
  className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[420px] w-full max-w-4xl -translate-x-1/2 -translate-y-1/2"
  viewBox="0 0 800 400"
  fill="none"
>
  {/* Blue curve: three stacked widths fake a soft glow, cheap to animate */}
  <path
    d="M 20 30 C 150 50, 250 170, 340 230 S 550 320, 780 340"
    stroke="var(--color-accent-blue)"
    strokeWidth="10"
    opacity="0.12"
    className="flow-draw"
  />
  <path
    d="M 20 30 C 150 50, 250 170, 340 230 S 550 320, 780 340"
    stroke="var(--color-accent-blue)"
    strokeWidth="5"
    opacity="0.25"
    className="flow-draw"
  />
  <path
    d="M 20 30 C 150 50, 250 170, 340 230 S 550 320, 780 340"
    stroke="var(--color-accent-blue)"
    strokeWidth="2.5"
    className="flow-draw"
  />

  {/* Red curve: same three-layer approach */}
  <path
    d="M 20 50 C 150 90, 250 190, 340 260 S 560 300, 780 300"
    stroke="var(--color-accent-red)"
    strokeWidth="10"
    opacity="0.12"
    className="flow-draw"
    style={{ animationDelay: "1.5s" }}
  />
  <path
    d="M 20 50 C 150 90, 250 190, 340 260 S 560 300, 780 300"
    stroke="var(--color-accent-red)"
    strokeWidth="5"
    opacity="0.25"
    className="flow-draw"
    style={{ animationDelay: "1.5s" }}
  />
  <path
    d="M 20 50 C 150 90, 250 190, 340 260 S 560 300, 780 300"
    stroke="var(--color-accent-red)"
    strokeWidth="2.5"
    className="flow-draw"
    style={{ animationDelay: "1.5s" }}
  />

  <circle cx="780" cy="340" r="4" fill="var(--color-accent-blue)" className="animate-pulse" />
  <text x="700" y="365" fill="var(--color-accent-blue)" fontFamily="monospace" fontSize="14">
    train
  </text>
  <circle cx="780" cy="300" r="4" fill="var(--color-accent-red)" className="animate-pulse" />
  <text x="700" y="285" fill="var(--color-accent-red)" fontFamily="monospace" fontSize="14">
    val
  </text>
</svg>

      <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight sm:text-6xl">
        Roshan Mohammed
      </h1>

      <p className="mt-3 font-mono text-sm tracking-widest text-muted uppercase">
        AI / ML Engineer
      </p>

      <p className="mt-6 max-w-xl text-lg text-foreground/90">
        Building intelligent systems from GPT architectures to computer
        vision pipelines.
      </p>

      <p className="mt-4 max-w-2xl text-base text-muted">
        I like turning research ideas into working software this site walks through what
        I&apos;m building and why.
      </p>
    </section>
  );
}