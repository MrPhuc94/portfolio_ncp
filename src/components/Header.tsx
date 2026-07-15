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
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setSolid(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-10% 0px 0px 0px" },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 ${
        solid
          ? "border-b border-line bg-bg-soft"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <a
          href="#top"
          className={`display text-base tracking-tight ${
            solid ? "text-ink" : "text-white"
          }`}
        >
          NCP<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[0.8rem] font-semibold tracking-wide transition ${
                solid
                  ? "text-ink-soft hover:text-accent"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:nchiphong69@gmail.com"
            className={`rounded-full px-3.5 py-1.5 text-[0.8rem] font-bold transition ${
              solid
                ? "bg-ink text-white hover:bg-accent"
                : "bg-white text-ink hover:bg-accent-bright"
            }`}
          >
            Liên hệ
          </a>
        </nav>

        <button
          type="button"
          aria-label="Mở menu"
          className={`rounded-full border px-3 py-1.5 text-xs font-bold md:hidden ${
            solid ? "border-line text-ink" : "border-white/30 text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Đóng" : "Mở"}
        </button>
      </div>

      {open && (
        <div
          className={`border-t md:hidden ${
            solid
              ? "border-line bg-bg-soft"
              : "border-white/10 bg-stage text-white"
          }`}
        >
          <nav className="container flex flex-col gap-3 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-wide"
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
