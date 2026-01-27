import React from "react";

export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-soft dark:border-slate-50/10 dark:bg-slate-950/60 dark:text-slate-200">
      {children}
    </span>
  );
}
