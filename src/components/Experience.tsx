import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-label">Kinh nghiệm nổi bật</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,5vw,3.4rem)] text-ink">
            Hành trình qua các vai trò tổ chức.
          </h2>
        </div>

        <ol className="mt-12 divide-y divide-line border-y border-line">
          {experiences.map((item, index) => (
            <li
              key={item}
              className="group grid grid-cols-[auto_1fr] items-baseline gap-4 py-5 md:grid-cols-[4.5rem_1fr] md:gap-7 md:py-6"
            >
              <span className="display bg-[linear-gradient(135deg,#ffc44d,#e87820)] bg-clip-text text-sm text-transparent md:text-base">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-lg font-medium leading-snug text-ink transition group-hover:translate-x-1 md:text-xl">
                {item}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
