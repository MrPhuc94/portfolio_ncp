import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-stage py-12 text-bg-soft">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(255,196,77,0.22),transparent_42%)]"
        aria-hidden
      />
      <div className="container relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="display text-xl">
            {profile.name}
            <span className="bg-[linear-gradient(135deg,#ffc44d,#e87820)] bg-clip-text text-transparent">
              .
            </span>
          </p>
          <p className="mt-1 text-sm text-white/55">
            Portfolio Event Organizer · 2025
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm font-medium text-white/70">
          <a
            href={`tel:${profile.contact.phone.replace(/\s/g, "")}`}
            className="transition hover:text-accent-bright"
          >
            {profile.contact.phone}
          </a>
          <a
            href={`mailto:${profile.contact.email}`}
            className="transition hover:text-accent-bright"
          >
            {profile.contact.email}
          </a>
          <span>{profile.contact.location}</span>
        </div>
      </div>
    </footer>
  );
}
