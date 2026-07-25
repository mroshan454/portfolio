import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const href = project.liveUrl ?? project.githubUrl;

  const cardContent = (
    <>
      <div className="aspect-video w-full overflow-hidden rounded-md border border-border bg-background">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-mono text-3xl text-muted">
            {project.title.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-muted">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-3 py-1 font-mono text-xs text-accent-blue"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  if (href) {
    return (
      
       <a  href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-lg border border-border bg-surface p-5 transition hover:border-accent-blue"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className="rounded-lg border border-border bg-surface p-5">
      {cardContent}
    </div>
  );
}
