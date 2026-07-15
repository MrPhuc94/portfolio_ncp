import { profile } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="section-label">Bản thân</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,5vw,3.4rem)] text-ink">
            Từ ý tưởng đến{" "}
            <span className="bg-[linear-gradient(120deg,#e87820,#f0b429)] bg-clip-text text-transparent">
              sân khấu thật.
            </span>
          </h2>
          <ul className="mt-8 space-y-3">
            {profile.roles.map((role) => (
              <li
                key={role}
                className="flex items-start gap-3 text-sm font-semibold text-ink-soft"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {role}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5 text-base leading-relaxed text-ink-soft md:text-lg">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="container mt-14 grid gap-5 md:grid-cols-2">
        <article className="surface rounded-3xl p-7 md:p-8">
          <p className="section-label">Học vấn</p>
          <h3 className="display mt-5 text-2xl text-ink md:text-3xl">
            {profile.education.school}
          </h3>
          <p className="mt-3 text-ink-soft">{profile.education.major}</p>
          <p className="mt-6 inline-flex rounded-full bg-[linear-gradient(135deg,rgba(255,196,77,0.25),rgba(232,120,32,0.14))] px-4 py-2 text-sm font-semibold text-accent-deep">
            {profile.education.period}
          </p>
        </article>

        <article
          id="contact"
          className="scroll-mt-24 relative overflow-hidden rounded-3xl bg-stage p-7 text-bg-soft md:p-8"
        >
          <div
            className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(255,196,77,0.35),transparent_70%)]"
            aria-hidden
          />
          <p className="relative text-xs font-bold tracking-[0.14em] uppercase text-accent-bright">
            Thông tin liên hệ
          </p>
          <ul className="relative mt-6 space-y-5">
            <li>
              <p className="text-sm text-white/55">Điện thoại</p>
              <a
                href={`tel:${profile.contact.phone.replace(/\s/g, "")}`}
                className="display mt-1 block text-2xl transition hover:text-accent-bright"
              >
                {profile.contact.phone}
              </a>
            </li>
            <li>
              <p className="text-sm text-white/55">Email</p>
              <a
                href={`mailto:${profile.contact.email}`}
                className="display mt-1 block break-all text-xl transition hover:text-accent-bright md:text-2xl"
              >
                {profile.contact.email}
              </a>
            </li>
            <li>
              <p className="text-sm text-white/55">Địa điểm</p>
              <p className="display mt-1 text-2xl">{profile.contact.location}</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
