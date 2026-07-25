const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Currently Building", href: "#building" },
    { label: "Blog", href: "#blog" },
    { label: "About", href: "#about" },
  ];
  
  export default function Nav() {
    return (
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <a href="#" className="font-mono text-sm text-accent-blue">
            roshan.dev
          </a>
          <ul className="flex gap-6 font-mono text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }