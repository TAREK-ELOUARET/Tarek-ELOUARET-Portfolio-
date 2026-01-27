import React from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  title,
  eyebrow,
  children,
  className = "",
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-28 py-16 md:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="mb-8 md:mb-10">
            {eyebrow ? (
              <div className="text-xs uppercase tracking-[0.2em] text-slate-300/80 dark:text-slate-300/80">
                {eyebrow}
              </div>
            ) : null}
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
              {title}
            </h2>
            <div className="mt-4 h-px w-20 bg-slate-900/15 dark:bg-slate-50/15" />
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
