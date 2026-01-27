import React from "react";

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition active:scale-[0.98]";
  const styles: Record<string, string> = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200",
    secondary:
      "bg-white text-slate-900 hover:bg-slate-50 border border-slate-900/10 dark:bg-slate-950/50 dark:text-slate-50 dark:hover:bg-slate-950 dark:border-slate-50/10",
    ghost:
      "bg-transparent text-slate-900 hover:bg-slate-900/5 dark:text-slate-50 dark:hover:bg-slate-50/10",
  };

  const cls = `${base} ${styles[variant]} ${className}`;

  if (!href) {
    return (
      <button className={cls} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <a
      className={cls}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
