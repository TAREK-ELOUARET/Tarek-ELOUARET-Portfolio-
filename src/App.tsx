import React, { useEffect, useMemo, useState } from "react";
import { FiExternalLink, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

import { CONTENT, LINKS, type Lang } from "./data/content";
import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import { Reveal } from "./components/Reveal";
import { Chip } from "./components/Chip";
import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import { ScrollTop } from "./components/ScrollTop";

function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore
    }
  }, [key, value]);

  return [value, setValue] as const;
}

export default function App() {
  const [lang, setLang] = useLocalStorage<Lang>("lang", "fr");
  const [theme, setTheme] = useLocalStorage<"dark" | "light">("theme", "dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  const t = useMemo(() => CONTENT[lang], [lang]);

  return (
    <div className="selection-invert min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-40 dark:opacity-25" />
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-slate-500/15 blur-3xl dark:bg-sky-500/10" />
        <div className="absolute top-52 right-8 h-72 w-72 rounded-full bg-slate-500/10 blur-3xl dark:bg-indigo-500/10" />
      </div>

      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        nav={t.nav}
        linkedin={LINKS.linkedin}
      />

      {/* HERO */}
      <header id="top" className="relative pt-28 md:pt-32">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid items-start gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-xs text-slate-700 shadow-soft dark:border-slate-50/10 dark:bg-slate-950/60 dark:text-slate-200">
                  {t.hero.kicker}
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
                  {t.hero.title}
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-200/85 md:text-lg">
                  {t.hero.subtitle}
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-6 flex flex-wrap gap-3">
                  {t.hero.ctas.map((c: any) => (
                    <Button
                      key={c.href}
                      href={c.href}
                      variant={c.href === "#contact" ? "primary" : "secondary"}
                      external={!!c.external}
                    >
                      {c.label}
                    </Button>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-2">
                  {t.hero.badges.map((b: string) => (
                    <Chip key={b}>{b}</Chip>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6 shadow-soft backdrop-blur-md dark:border-slate-50/10 dark:bg-slate-950/60">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-sm text-slate-600 dark:text-slate-300/70">
                        {lang === "fr" ? "Coordonnées" : "Contact info"}
                      </div>
                      <div className="mt-2 text-xl font-semibold">{LINKS.email}</div>
                    </div>
                    <a
                      href={LINKS.scholar}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-900/10 bg-white px-3 py-2 text-sm text-slate-800 shadow-soft transition hover:bg-slate-50 dark:border-slate-50/10 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-950/80"
                    >
                      Scholar <FiExternalLink />
                    </a>
                  </div>

                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200/85">
                      <FiMail />{" "}
                      <a className="hover:underline" href={`mailto:${LINKS.email}`}>
                        {LINKS.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200/85">
                      <FiPhone />{" "}
                      <a className="hover:underline" href={`tel:${LINKS.phone.replace(/\s/g, "")}`}>
                        {LINKS.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200/85">
                      <FiMapPin /> {LINKS.address}
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-slate-900/10 bg-white/60 p-4 dark:border-slate-50/10 dark:bg-slate-950/40">
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300/70">
                      {lang === "fr" ? "Statut" : "Status"}
                    </div>
                    <div className="mt-2 text-sm text-slate-800 dark:text-slate-100">
                      {lang === "fr" ? LINKS.status.fr : LINKS.status.en}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Python", "C/C++", "VHDL/HLS", "Linux", "GCP", "Vivado/Vitis AI", "Quartus", "Alveo A80"].map(
                      (s) => (
                        <span
                          key={s}
                          className="rounded-full bg-slate-900/5 px-3 py-1 text-xs text-slate-700 dark:bg-slate-50/10 dark:text-slate-200"
                        >
                          {s}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <Section id="about" title={t.about.title} eyebrow={lang === "fr" ? "À propos" : "About"}>
        <div className="grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200/85 md:text-lg">
              {t.about.lead}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {t.hero.badges.map((b: string) => (
                <Chip key={b}>{b}</Chip>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={LINKS.linkedin} external variant="secondary">
                LinkedIn <FiExternalLink />
              </Button>
              <Button href={LINKS.scholar} external variant="ghost">
                Google Scholar <FiExternalLink />
              </Button>
              <Button href="/resume.pdf" external variant="ghost">
                {lang === "fr" ? "CV (PDF)" : "CV (PDF)"} <FiExternalLink />
              </Button>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5">
            <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6 shadow-soft backdrop-blur-md dark:border-slate-50/10 dark:bg-slate-950/60">
              <div className="text-sm font-semibold">{lang === "fr" ? "En bref" : "At a glance"}</div>
              <div className="mt-4 space-y-3">
                {t.about.highlights.map((h: any) => (
                  <div key={h.k} className="flex items-start justify-between gap-4">
                    <div className="text-sm text-slate-600 dark:text-slate-300/70">{h.k}</div>
                    <div className="text-sm text-slate-800 dark:text-slate-100 text-right">{h.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-slate-900/10 bg-white/60 p-4 dark:border-slate-50/10 dark:bg-slate-950/40">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300/70">
                  {lang === "fr" ? "Ce que je peux faire" : "What I can deliver"}
                </div>
                <div className="mt-2 text-sm text-slate-700 dark:text-slate-200/85">
                  {lang === "fr"
                    ? "R&D + prototypage, industrialisation GCP, MLOps, accélération FPGA/SoC, optimisation latence/débit, évaluation LLM/ML."
                    : "R&D + prototyping, GCP industrialization, MLOps, FPGA/SoC acceleration, latency/throughput tuning, LLM/ML evaluation."}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* EXPERTISE */}
      <Section id="expertise" title={t.expertise.title} eyebrow={lang === "fr" ? "Compétences clés" : "Core strengths"}>
        <div className="grid gap-4 md:grid-cols-3">
          {t.expertise.items.map((it: any, idx: number) => (
            <Reveal key={it.title} delay={idx * 0.06}>
              <div className="h-full rounded-3xl border border-slate-900/10 bg-white/70 p-6 shadow-soft backdrop-blur-md transition hover:-translate-y-0.5 dark:border-slate-50/10 dark:bg-slate-950/60">
                <div className="text-lg font-semibold">{it.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200/85">{it.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {it.chips.map((c: string) => (
                    <span
                      key={c}
                      className="rounded-full bg-slate-900/5 px-3 py-1 text-xs text-slate-700 dark:bg-slate-50/10 dark:text-slate-200"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title={t.skills.title} eyebrow={lang === "fr" ? "Outils" : "Tools"}>
        <div className="grid gap-4 md:grid-cols-3">
          {t.skills.groups.map((g: any, idx: number) => (
            <Reveal key={g.title} delay={idx * 0.06}>
              <div className="h-full rounded-3xl border border-slate-900/10 bg-white/70 p-6 shadow-soft backdrop-blur-md dark:border-slate-50/10 dark:bg-slate-950/60">
                <div className="text-lg font-semibold">{g.title}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200/85">
                  {g.items.map((x: string) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-slate-900/30 dark:bg-slate-50/30" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title={t.projects.title} eyebrow={lang === "fr" ? "Portfolio" : "Portfolio"}>
        <Reveal>
          <p className="max-w-3xl text-base text-slate-700 dark:text-slate-200/85">{t.projects.intro}</p>
        </Reveal>

        <div className="mt-8 grid gap-4">
          {t.projects.items.map((p: any, idx: number) => (
            <Reveal key={p.title} delay={idx * 0.06}>
              <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6 shadow-soft backdrop-blur-md dark:border-slate-50/10 dark:bg-slate-950/60">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold">{p.title}</div>
                    <div className="mt-1 text-sm text-slate-600 dark:text-slate-300/70">{p.period}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-900/5 px-3 py-1 text-xs text-slate-700 dark:bg-slate-50/10 dark:text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-3">
                  <div className="md:col-span-1">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300/70">
                      {lang === "fr" ? "Contexte" : "Context"}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200/85">{p.context}</p>
                  </div>
                  <div className="md:col-span-1">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300/70">
                      {lang === "fr" ? "Actions" : "Actions"}
                    </div>
                    <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-200/85">
                      {p.action.map((a: string) => (
                        <li key={a} className="flex gap-2">
                          <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-slate-900/30 dark:bg-slate-50/30" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-1">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300/70">
                      {lang === "fr" ? "Résultats" : "Outcomes"}
                    </div>
                    <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-200/85">
                      {p.outcome.map((o: string) => (
                        <li key={o} className="flex gap-2">
                          <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-slate-900/30 dark:bg-slate-50/30" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title={t.experience.title} eyebrow={lang === "fr" ? "Parcours" : "Background"}>
        <div className="grid gap-4">
          {t.experience.items.map((it: any, idx: number) => (
            <Reveal key={it.role} delay={idx * 0.06}>
              <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6 shadow-soft backdrop-blur-md dark:border-slate-50/10 dark:bg-slate-950/60">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="text-lg font-semibold">{it.role}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300/70">{it.period}</div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200/85">
                  {it.bullets.map((b: string) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-slate-900/30 dark:bg-slate-50/30" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" title={t.education.title} eyebrow={lang === "fr" ? "Académique" : "Academic"}>
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6 shadow-soft backdrop-blur-md dark:border-slate-50/10 dark:bg-slate-950/60">
              <div className="text-sm font-semibold">{lang === "fr" ? "Diplômes" : "Degrees"}</div>
              <div className="mt-4 space-y-4">
                {t.education.education.map((e: any) => (
                  <div key={e.title}>
                    <div className="font-semibold">{e.title}</div>
                    <div className="mt-1 text-sm text-slate-700 dark:text-slate-200/85">{e.where}</div>
                    <div className="mt-1 text-xs text-slate-600 dark:text-slate-300/70">{e.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6 shadow-soft backdrop-blur-md dark:border-slate-50/10 dark:bg-slate-950/60">
              <div className="text-sm font-semibold">{lang === "fr" ? "Certifications & distinctions" : "Certificates & awards"}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200/85">
                {t.education.certs.map((c: string) => (
                  <li key={c} className="flex gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-slate-900/30 dark:bg-slate-50/30" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-slate-900/10 bg-white/60 p-4 dark:border-slate-50/10 dark:bg-slate-950/40">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300/70">
                  {lang === "fr" ? "Docs" : "Docs"}
                </div>
                <div className="mt-3 flex flex-wrap gap-3">
                  <Button href="/resume.pdf" external variant="secondary">
                    {lang === "fr" ? "CV (PDF)" : "CV (PDF)"} <FiExternalLink />
                  </Button>
                  <Button href={LINKS.scholar} external variant="ghost">
                    Scholar <FiExternalLink />
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title={t.contact.title} eyebrow={lang === "fr" ? "Travaillons ensemble" : "Let’s work together"}>
        <div className="grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6 shadow-soft backdrop-blur-md dark:border-slate-50/10 dark:bg-slate-950/60">
              <p className="text-base text-slate-700 dark:text-slate-200/85">{t.contact.lead}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={`mailto:${LINKS.email}`} variant="primary">
                  {t.contact.primary} <FiMail />
                </Button>
                <Button href={LINKS.linkedin} external variant="secondary">
                  {t.contact.secondary} <FiExternalLink />
                </Button>
                <Button href={`tel:${LINKS.phone.replace(/\s/g, "")}`} variant="ghost">
                  {LINKS.phone} <FiPhone />
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5" delay={0.06}>
            <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6 shadow-soft backdrop-blur-md dark:border-slate-50/10 dark:bg-slate-950/60">
              <div className="text-sm font-semibold">{lang === "fr" ? "Liens rapides" : "Quick links"}</div>
              <div className="mt-4 grid gap-3">
                <a
                  className="rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm text-slate-800 shadow-soft transition hover:bg-white dark:border-slate-50/10 dark:bg-slate-950/40 dark:text-slate-100 dark:hover:bg-slate-950"
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <span className="text-slate-500 dark:text-slate-300/60">— profile</span>
                </a>
                <a
                  className="rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm text-slate-800 shadow-soft transition hover:bg-white dark:border-slate-50/10 dark:bg-slate-950/40 dark:text-slate-100 dark:hover:bg-slate-950"
                  href={LINKS.scholar}
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Scholar <span className="text-slate-500 dark:text-slate-300/60">— publications</span>
                </a>
                <a
                  className="rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm text-slate-800 shadow-soft transition hover:bg-white dark:border-slate-50/10 dark:bg-slate-950/40 dark:text-slate-100 dark:hover:bg-slate-950"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  {lang === "fr" ? "CV (PDF)" : "CV (PDF)"} <span className="text-slate-500 dark:text-slate-300/60">— download</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Footer note={t.footer.note} />
      <ScrollTop />
    </div>
  );
}
