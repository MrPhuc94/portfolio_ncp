import { skills } from "@/data/portfolio";

const groups = [
  { title: "Sự kiện", items: skills.event },
  { title: "Truyền thông", items: skills.content },
  { title: "Sáng tạo", items: skills.creative },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="section-label">Kỹ năng</p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,3.4rem)] text-ink">
              Công cụ biến concept thành trải nghiệm.
            </h2>
          </div>
          <p className="max-w-sm text-ink-soft">
            Lập kế hoạch, điều phối nhân sự, truyền thông và sáng tạo nội dung
            cho sự kiện cộng đồng.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title} className="surface rounded-3xl p-6 md:p-7">
              <h3 className="display text-xl text-ink md:text-2xl">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="border-b border-line pb-2.5 text-sm text-ink-soft last:border-b-0 last:pb-0 md:text-[0.95rem]"
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
