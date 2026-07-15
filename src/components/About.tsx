import { profile } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="section-label">Bản thân</p>
          <h2 className="display mt-4 text-[clamp(2rem,4.5vw,3.2rem)] text-ink">
            Sinh viên Truyền thông.
            <br />
            <span className="text-accent">Định hướng tổ chức sự kiện.</span>
          </h2>
          <ul className="mt-8 space-y-2.5">
            {profile.roles.map((role) => (
              <li key={role} className="text-sm font-semibold text-ink-soft">
                — {role}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 text-[1.02rem] leading-relaxed text-ink-soft">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 28)}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="container mt-14 grid gap-4 md:grid-cols-2">
        <article className="panel p-7 md:p-8">
          <p className="section-label">Học vấn</p>
          <h3 className="display mt-4 text-2xl text-ink">
            {profile.education.school}
          </h3>
          <p className="mt-2 text-ink-soft">{profile.education.major}</p>
          <p className="mt-5 text-sm font-bold text-accent">
            {profile.education.period}
          </p>
        </article>

        <article
          id="contact"
          className="scroll-mt-20 rounded-[1.25rem] bg-stage p-7 text-white md:p-8"
        >
          <p className="text-xs font-bold tracking-[0.14em] uppercase text-accent-bright">
            Thông tin liên hệ
          </p>
          <ul className="mt-5 space-y-4">
            <li>
              <p className="text-xs text-white/50">Điện thoại</p>
              <a
                href={`tel:${profile.contact.phone.replace(/\s/g, "")}`}
                className="display mt-1 block text-xl hover:text-accent-bright"
              >
                {profile.contact.phone}
              </a>
            </li>
            <li>
              <p className="text-xs text-white/50">Email</p>
              <a
                href={`mailto:${profile.contact.email}`}
                className="display mt-1 block break-all text-lg hover:text-accent-bright md:text-xl"
              >
                {profile.contact.email}
              </a>
            </li>
            <li>
              <p className="text-xs text-white/50">Địa điểm</p>
              <p className="display mt-1 text-xl">{profile.contact.location}</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
