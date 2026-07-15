import { skills } from "@/data/portfolio";

const groups = [
  { title: "Sự kiện", items: skills.event },
  { title: "Công cụ", items: skills.content },
  { title: "Sáng tạo", items: skills.creative },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label">Kỹ năng</p>
            <h2 className="display mt-3 text-[clamp(2rem,4.5vw,3.2rem)] text-ink">
              Năng lực chuyên môn.
            </h2>
          </div>        
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title} className="panel p-6">
              <h3 className="display text-xl text-ink">{group.title}</h3>
              <ul className="mt-5 space-y-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="border-b border-line pb-2 text-sm text-ink-soft last:border-0 last:pb-0"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
