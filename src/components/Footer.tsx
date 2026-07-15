import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-stage py-10 text-white">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="display text-lg">
            {profile.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-xs text-white/50">
            Portfolio Tổ chức sự kiện · 2025
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-white/65">
          <a
            href={`tel:${profile.contact.phone.replace(/\s/g, "")}`}
            className="hover:text-accent-bright"
          >
            {profile.contact.phone}
          </a>
          <a
            href={`mailto:${profile.contact.email}`}
            className="hover:text-accent-bright"
          >
            {profile.contact.email}
          </a>
          <span>{profile.contact.location}</span>
        </div>
      </div>
    </footer>
  );
}
