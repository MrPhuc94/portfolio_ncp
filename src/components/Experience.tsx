import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-bg-soft py-20 md:py-28">
      <div className="container">
        <p className="section-label">Kinh nghiệm</p>
        <h2 className="display mt-3 max-w-2xl text-[clamp(2rem,4.5vw,3.2rem)] text-ink">
          Các vai trò qua câu lạc bộ, sự kiện và dự án cộng đồng.
        </h2>

        <ol className="mt-12">
          {experiences.map((item, index) => (
            <li
              key={item}
              className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-5 md:grid-cols-[4rem_1fr] md:gap-6 md:py-6"
            >
              <span className="display text-sm text-accent md:text-base">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-base font-medium leading-snug text-ink md:text-lg">
                {item}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
