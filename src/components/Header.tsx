"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Bản thân" },
  { href: "#projects", label: "Dự án" },
  { href: "#experience", label: "Kinh nghiệm" },
  { href: "#skills", label: "Kỹ năng" },
  { href: "#contact", label: "Liên hệ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHero = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(255,250,243,0.92)] shadow-[0_1px_0_var(--line)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <a
          href="#top"
          className={`display text-lg tracking-tight ${
            onHero ? "text-bg-soft" : "text-ink"
          }`}
        >
          NCP
          <span className="bg-[linear-gradient(135deg,#ffc44d,#e87820)] bg-clip-text text-transparent">
            .
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                onHero
                  ? "text-white/75 hover:text-accent-bright"
                  : "text-ink-soft hover:text-accent"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:nchiphong69@gmail.com"
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              onHero
                ? "bg-accent-bright text-ink hover:brightness-105"
                : "bg-ink text-bg-soft hover:bg-accent"
            }`}
          >
            Kết nối
          </a>
        </nav>

        <button
          type="button"
          aria-label="Mở menu"
          className={`flex h-10 items-center justify-center rounded-full border px-3 md:hidden ${
            onHero ? "border-white/25 text-bg-soft" : "border-line text-ink"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="display text-sm">{open ? "Đóng" : "Menu"}</span>
        </button>
      </div>

      {open && (
        <div
          className={`border-t md:hidden ${
            scrolled
              ? "border-line bg-bg-soft"
              : "border-white/10 bg-stage/95 text-bg-soft backdrop-blur"
          }`}
        >
          <nav className="container flex flex-col gap-4 py-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
