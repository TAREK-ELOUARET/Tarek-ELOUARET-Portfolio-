import React, { useEffect, useMemo, useState } from "react";
import type { Lang } from "../data/content";
import { LangToggle } from "./LangToggle";
import { ThemeToggle } from "./ThemeToggle";
import { FiArrowUpRight } from "react-icons/fi";

export function Navbar({
  lang,
  setLang,
  theme,
  setTheme,
  nav,
  linkedin,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: "dark" | "light";
  setTheme: (t: "dark" | "light") => void;
  nav: Array<{ id: string; label: string }>;
  linkedin: string;
}) {
  const [active, setActive] = useState(nav[0]?.id ?? "top");
  const ids = useMemo(() => nav.map((n) => n.id), [nav]);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 140;
      let current = ids[0] ?? "top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [ids]);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl px-3 py-3 shadow-soft glass">
          <a href="#top" className="flex items-center gap-3 px-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-semibold">
              TE
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-slate-50">Tarek</div>
              <div className="text-xs text-slate-300/80">AI • FPGA • GCP</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`rounded-xl px-3 py-2 text-sm transition ${
                  active === n.id
                    ? "bg-white/10 text-white"
                    : "text-slate-200/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-50/10 bg-slate-950/40 px-3 py-2 text-sm text-slate-100 transition hover:bg-slate-950/70"
            >
              LinkedIn <FiArrowUpRight />
            </a>
            <LangToggle lang={lang} setLang={setLang} />
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </div>
    </div>
  );
}
