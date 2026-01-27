import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeToggle({
  theme,
  setTheme,
}: {
  theme: "dark" | "light";
  setTheme: (t: "dark" | "light") => void;
}) {
  const isDark = theme === "dark";
  return (
    <button
      className="inline-flex items-center justify-center rounded-xl border border-slate-900/10 bg-white/70 px-3 py-2 text-sm text-slate-700 shadow-soft transition hover:bg-white dark:border-slate-50/10 dark:bg-slate-950/60 dark:text-slate-200 dark:hover:bg-slate-950"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
}
