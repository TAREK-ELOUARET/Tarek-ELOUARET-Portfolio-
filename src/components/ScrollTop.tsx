import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 900);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!show) return null;

  return (
    <a
      href="#top"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-2xl border border-slate-900/10 bg-white/80 p-3 text-slate-900 shadow-soft backdrop-blur-md transition hover:bg-white dark:border-slate-50/10 dark:bg-slate-950/60 dark:text-slate-50"
      aria-label="Back to top"
    >
      <FiArrowUp />
    </a>
  );
}
