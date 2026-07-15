import Image from "next/image";
import { projects, type Project } from "@/data/portfolio";

function ProjectBlock({ project }: { project: Project }) {
  return (
    <section
      id={project.id}
      className="scroll-mt-24 border-t border-line py-16 md:py-24"
    >
      <div className="container">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="display bg-[linear-gradient(135deg,#ffc44d,#e87820)] bg-clip-text text-xl text-transparent">
                Dự án {project.number}
              </span>
              <span className="text-xs font-bold tracking-[0.14em] uppercase text-muted">
                {project.category}
              </span>
            </div>
            <h3 className="display mt-3 text-[clamp(1.9rem,4vw,2.8rem)] text-ink">
              {project.title}
            </h3>
            <p className="mt-2 text-sm font-semibold text-accent md:text-base">
              {project.role}
            </p>
          </div>
        </div>

        {/* Ảnh nhỏ, giữ tỉ lệ gốc — không fill / không kéo méo */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {project.gallery.map((src, index) => (
            <figure
              key={src}
              className="flex items-center justify-center rounded-2xl border border-line bg-bg-soft p-3 shadow-[0_8px_24px_rgba(26,18,12,0.04)]"
            >
              <Image
                src={src}
                alt={`${project.title} — ảnh ${index + 1}`}
                width={480}
                height={360}
                className="h-auto max-h-[140px] w-auto max-w-full object-contain sm:max-h-[160px] md:max-h-[180px]"
                sizes="(max-width: 640px) 45vw, 200px"
                priority={project.number === "01" && index === 0}
              />
            </figure>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h4 className="text-xs font-bold tracking-[0.14em] uppercase text-muted">
              Tổng quan
            </h4>
            <p className="mt-3 leading-relaxed text-ink-soft">
              {project.overview}
            </p>

            <h4 className="mt-8 text-xs font-bold tracking-[0.14em] uppercase text-muted">
              Nhiệm vụ
            </h4>
            <ul className="mt-3 space-y-2.5">
              {project.duties.map((duty) => (
                <li
                  key={duty}
                  className="flex gap-2.5 text-sm leading-relaxed text-ink-soft md:text-[0.95rem]"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: project.accent }}
                  />
                  <span>{duty}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="h-fit rounded-2xl p-6 text-bg-soft"
            style={{
              background: `linear-gradient(155deg, ${project.accent} 0%, #b45309 100%)`,
            }}
          >
            <h4 className="text-xs font-bold tracking-[0.14em] uppercase text-white/70">
              Kết quả
            </h4>
            <ul className="mt-4 space-y-3">
              {project.results.map((result) => (
                <li
                  key={result}
                  className="border-b border-white/20 pb-3 text-sm leading-relaxed last:border-b-0 last:pb-0"
                >
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <div id="projects" className="scroll-mt-24">
      <section className="pb-4 pt-20 md:pt-28">
        <div className="container max-w-2xl">
          <h3 className="section-label">Dự án văn hóa</h3>
          <h2 className="display mt-4 text-[clamp(2.2rem,5vw,3.4rem)] text-ink">
            Dự án văn hóa
          </h2>
          <nav className="mt-8 flex flex-wrap gap-3">
            {projects.map((project) => (
              <a
                key={project.id}
                href={`#${project.id}`}
                className="rounded-full border border-line bg-bg-soft px-4 py-2 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
              >
                {project.number}. {project.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {projects.map((project) => (
        <ProjectBlock key={project.id} project={project} />
      ))}
    </div>
  );
}
