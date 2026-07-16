import Image from "next/image";
import { profile, projects } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-stage">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/assets/sk1_2.jpg"
          alt=""
          fill
          priority
          quality={70}
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,17,14,0.55)_0%,rgba(23,17,14,0.78)_55%,rgba(23,17,14,0.96)_100%)]" />
      </div>

      <div className="container relative z-10 flex min-h-[100svh] flex-col justify-end pb-14 pt-28 md:pb-20">
        <p className="section-label hero-in !text-accent-bright">
          Portfolio 2025 · Tổ chức sự kiện
        </p>
        <h1 className="display hero-in hero-in-1 mt-4 whitespace-nowrap text-[clamp(2.2rem,7.5vw,6.5rem)] text-white">
          Nguyễn Chí{" "}
          <span className="bg-[linear-gradient(120deg,#ffc44d_0%,#ff8a3d_55%,#e87820_100%)] bg-clip-text text-transparent">
            Phong
          </span>
        </h1>
        <p className="hero-in hero-in-2 mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          {profile.headline}
        </p>
        <div className="hero-in hero-in-3 mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">
            Xem dự án
          </a>
          <a href="#contact" className="btn-ghost">
            Liên hệ
          </a>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-2 border-t border-white/15 pt-6 md:gap-3">
          {projects.map((project) => (
            <a
              key={project.id}
              href={`#${project.id}`}
              className="group rounded-xl border border-white/10 bg-white/5 p-2 transition hover:border-accent/50 hover:bg-white/10"
            >
              <div className="flex h-[72px] items-center justify-center overflow-hidden rounded-lg bg-black/30 md:h-[88px]">
                <Image
                  src={project.cover}
                  alt={project.title}
                  width={240}
                  height={160}
                  quality={60}
                  className="h-auto max-h-[64px] w-auto max-w-[90%] object-contain md:max-h-[76px]"
                />
              </div>
              <p className="mt-2 truncate text-[0.65rem] font-semibold tracking-wide text-white/55 group-hover:text-accent-bright md:text-xs">
                {project.number} · {project.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
