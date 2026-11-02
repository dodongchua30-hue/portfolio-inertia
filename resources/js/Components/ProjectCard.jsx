// One project on the public portfolio page.
export default function ProjectCard({ project }) {
    const date = new Date(`${project.date_completed}T00:00:00`).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const techs = project.tech_stack
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);

    return (
        <article className="glass group flex flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-2xl hover:shadow-black/60">
            <div className="relative h-52 overflow-hidden">
                {project.image_url ? (
                    <img
                        src={project.image_url}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-white/5 text-sm text-white/35">
                        No Image
                    </div>
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-black/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
                <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium backdrop-blur">
                    {date}
                </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-xl font-bold tracking-tight">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-white/70">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                    {techs.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs">
                            {tech}
                        </span>
                    ))}
                </div>

                {project.project_url && (
                    <a
                        href={project.project_url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-white/80 transition hover:text-white"
                    >
                        View project <span className="transition group-hover:translate-x-0.5">↗</span>
                    </a>
                )}
            </div>
        </article>
    );
}
