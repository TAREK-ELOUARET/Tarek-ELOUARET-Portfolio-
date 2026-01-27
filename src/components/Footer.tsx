import React from "react";

export function Footer({ note }: { note: string }) {
  return (
    <footer className="border-t border-slate-900/10 dark:border-slate-50/10 py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6 text-sm text-slate-600 dark:text-slate-300/70">
        {note}
      </div>
    </footer>
  );
}
