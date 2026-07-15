import Image from "next/image";
import { projects, type Project } from "@/data/portfolio";

function ProjectCase({ project, index }: { project: Project; index: number }) {
  const odd = index % 2 === 1;

  return (
    <section
      id={project.id}
      className={`scroll-mt-20 py-16 md:py-24 ${odd ? "bg-[#fff3e6]" : "bg-bg"}`}
    >
      <div className="container">
        <div className="mb-8 flex flex-col gap-2 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-accent uppercase">
              Dự án {project.number}
            </p>
            <h3 className="display mt-2 text-[clamp(1.8rem,4vw,2.7rem)] text-ink">
              {project.title}
            </h3>
          </div>
          <div className="md:text-right">
            <p className="text-sm font-semibold text-ink-soft">{project.role}</p>
            <p className="mt-1 text-xs text-muted">{project.category}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {project.gallery.map((src, i) => (
            <figure key={src} className="photo-slot">
              <Image
                src={src}
                alt={`${project.title} — ảnh ${i + 1}`}
                width={400}
                height={300}
                quality={65}
                loading="lazy"
                sizes="(max-width: 768px) 45vw, 220px"
              />
            </figure>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h4 className="text-xs font-bold tracking-[0.14em] text-muted uppercase">
              Tổng quan
            </h4>
            <p className="mt-3 leading-relaxed text-ink-soft">
              {project.overview}
            </p>

            <h4 className="mt-8 text-xs font-bold tracking-[0.14em] text-muted uppercase">
              Nhiệm vụ
            </h4>
            <ul className="mt-3 space-y-2">
              {project.duties.map((duty) => (
                <li
                  key={duty}
                  className="flex gap-2 text-sm leading-relaxed text-ink-soft"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{duty}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[1.1rem] bg-stage p-6 text-white">
              <h4 className="text-xs font-bold tracking-[0.14em] text-accent-bright uppercase">
                Kết quả
              </h4>
              <ul className="mt-4 space-y-3">
                {project.results.map((result) => (
                  <li
                    key={result}
                    className="border-b border-white/15 pb-3 text-sm leading-relaxed last:border-0 last:pb-0"
                  >
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <div id="projects" className="scroll-mt-20">
      <section className="border-y border-line bg-bg-soft py-16 md:py-20">
        <div className="container">
          <p className="section-label">Dự án</p>
          <h2 className="display mt-3 max-w-2xl text-[clamp(2rem,4.5vw,3.2rem)] text-ink">
            Các dự án văn hóa và cộng đồng nổi bật.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.id}
                href={`#${project.id}`}
                className="panel group p-4 transition hover:border-accent"
              >
                <div className="photo-slot !min-h-[110px]">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    width={360}
                    height={240}
                    quality={65}
                    loading="lazy"
                    className="!max-h-[120px]"
                  />
                </div>
                <p className="mt-4 text-xs font-bold tracking-[0.14em] text-accent uppercase">
                  {project.number}
                </p>
                <h3 className="display mt-1 text-xl text-ink group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs text-muted">{project.category}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {projects.map((project, index) => (
        <ProjectCase key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
