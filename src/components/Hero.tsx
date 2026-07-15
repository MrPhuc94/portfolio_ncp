import Image from "next/image";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div className="absolute inset-0 bg-stage" aria-hidden>
        <Image
          src="/assets/sk1_2.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,17,14,0.55)_0%,rgba(23,17,14,0.7)_45%,rgba(23,17,14,0.94)_100%)]" />
        <div className="animate-spotlight absolute -top-20 left-1/2 h-[70vh] w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,196,77,0.22),transparent_65%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,196,77,0.65),transparent)]" />
      </div>

      <div className="container relative z-10 w-full pb-16 pt-28 md:pb-24">
        <p className="section-label animate-rise !text-accent-bright">
          {profile.greeting}
        </p>
        <h1 className="display animate-rise-delay-1 mt-4 max-w-5xl text-[clamp(3rem,10vw,7.2rem)] text-bg-soft">
          {profile.name.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="bg-[linear-gradient(120deg,#ffc44d_0%,#ff8a3d_55%,#e87820_100%)] bg-clip-text text-transparent">
            {profile.name.split(" ").slice(-1)}
          </span>
        </h1>
        <p className="animate-rise-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
          {profile.headline}
        </p>
        <div className="animate-rise-delay-3 mt-9 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">
            Xem dự án
          </a>
          <a href="#contact" className="btn-ghost">
            Liên hệ
          </a>
        </div>
      </div>
    </section>
  );
}
