import React from "react";
import type { Lang } from "../data/content";

export function LangToggle({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  return (
    <div className="inline-flex overflow-hidden rounded-xl border border-slate-900/10 bg-white/70 shadow-soft dark:border-slate-50/10 dark:bg-slate-950/60">
      <button
        onClick={() => setLang("fr")}
        className={`px-3 py-2 text-sm font-medium transition ${
          lang === "fr"
            ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
            : "text-slate-700 hover:bg-white dark:text-slate-200 dark:hover:bg-slate-950"
        }`}
        aria-label="Switch to French"
      >
        FR
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-2 text-sm font-medium transition ${
          lang === "en"
            ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
            : "text-slate-700 hover:bg-white dark:text-slate-200 dark:hover:bg-slate-950"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
