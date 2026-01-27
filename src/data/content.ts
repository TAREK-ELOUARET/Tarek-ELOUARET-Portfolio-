export type Lang = "fr" | "en";

export const LINKS = {
  email: "tarek.elouaret.3@gmail.com",
  phone: "+33-650-238838",
  linkedin: "https://www.linkedin.com/in/tarek-elouaret-phd-6910a8156/",
  scholar: "https://scholar.google.com/citations?user=6jAUEHkAAAAJ&hl=en&oi=ao",
  address: "29 AV du nord, Cergy, 95000",
  status: {
    fr: "Habilitable (nationalité française) • Disponible immédiatement",
    en: "Security clearance eligible (French citizenship) • Available immediately",
  },
} as const;

export const CONTENT: Record<Lang, any> = {
  fr: {
    nav: [
      { id: "top", label: "Accueil" },
      { id: "about", label: "Profil" },
      { id: "expertise", label: "Expertise" },
      { id: "skills", label: "Compétences" },
      { id: "projects", label: "Cas d’usage" },
      { id: "experience", label: "Expérience" },
      { id: "education", label: "Formation" },
      { id: "contact", label: "Contact" },
    ],
    hero: {
      kicker: "Portfolio — IA • FPGA • GCP Cloud & DevOps",
      title: "Tarek Elouaret",
      subtitle:
        "Ingénieur Docteur en IA & Conception Numérique • Spécialiste FPGA & GPU • GCP Cloud & DevOps • Systèmes temps réel",
      ctas: [
        { href: "#contact", label: "Me contacter" },
        { href: "/resume.pdf", label: "Télécharger le CV", external: true },
      ],
      badges: [
        "Digital Twin • Time-series (LSTM/GRU + Transformer/LLM)",
        "FPGA (Alveo A80) • Vivado/Vitis AI • Quartus",
        "GCP • MLOps (versioning, monitoring, reproductibilité)",
        "Python • C/C++ • VHDL/HLS • Linux",
      ],
    },
    about: {
      title: "Profil",
      lead:
        "Ingénieur et chercheur spécialisé en co‑conception matériel/logiciel, systèmes temps réel et programmation parallèle sur Xilinx. " +
        "Je conçois des solutions IA/ML/LLM de bout en bout : de la R&D au prototype, puis industrialisation cloud (GCP) et optimisation sur FPGA/SoC.",
      highlights: [
        { k: "Email", v: LINKS.email },
        { k: "Téléphone", v: LINKS.phone },
        { k: "Adresse", v: LINKS.address },
        { k: "Statut", v: LINKS.status.fr },
        { k: "Langues", v: "Français (maîtrise pro), Anglais (maîtrise pro), Arabe (natif)" },
      ],
    },
    expertise: {
      title: "Domaines de valeur",
      items: [
        {
          title: "IA / Digital Twin (signaux temporels)",
          desc:
            "Développement de modèles d’émulation IA pour signaux séquentiels en combinant LSTM/GRU et architectures Transformer/LLM (représentation, prédiction, génération).",
          chips: ["LSTM", "GRU", "Transformer", "LLM", "Time-series"],
        },
        {
          title: "GCP Cloud & DevOps / MLOps",
          desc:
            "Industrialisation sur Google Cloud Platform : pipelines data/compute, entraînement & déploiement d’inférence, observabilité, monitoring, reproductibilité et bonnes pratiques MLOps.",
          chips: ["GCP", "Pipelines", "Observabilité", "Monitoring", "MLOps"],
        },
        {
          title: "FPGA (Alveo A80) • Temps réel & performance",
          desc:
            "Conception d’un pipeline de traitement de signaux accéléré intégrant IA/ML (pré‑traitement + inférence). Optimisation timing, DSP/BRAM, latence/débit, Ethernet/transceivers.",
          chips: ["Alveo A80", "Vivado", "Vitis AI", "DSP/BRAM", "Ethernet"],
        },
      ],
    },
    skills: {
      title: "Langages, outils & plateformes",
      groups: [
        {
          title: "FPGA / Hardware",
          items: [
            "VHDL, HLS, RTL Design",
            "Xilinx Vivado, Vitis AI — niveau expert",
            "Intel Quartus — niveau expert",
            "SoC / IP integration, timing closure, pipelining",
          ],
        },
        {
          title: "Software / IA",
          items: [
            "Python (ML, CNN, LLM workflows)",
            "C++, Embedded C (ARM Cortex-A9)",
            "LLM & ML evaluation (qualité, robustesse, safety/alignment)",
          ],
        },
        {
          title: "OS / Cloud",
          items: [
            "Linux (Ubuntu, CentOS) — 8+ ans (bash, shell scripting)",
            "GCP — data/compute pipelines, training/inference deployment",
            "DevOps/MLOps — versioning, reproductibilité, monitoring",
          ],
        },
      ],
    },
    projects: {
      title: "Top 3 cas d’usage (format client/recruteur)",
      intro:
        "Trois exemples issus de mon parcours : contexte → actions → résultats (orientés impact).",
      items: [
        {
          title: "Digital Twin Emulation sur GCP — Time-series + Transformer/LLM",
          period: "2024 – 2025",
          context:
            "Développer un modèle d’émulation IA de jumeau numérique pour des signaux temporels séquentiels, avec un passage en production sur GCP.",
          action: [
            "Modélisation LSTM/GRU + Transformer/LLM (représentation, prédiction, génération/synthèse).",
            "Industrialisation GCP : pipelines data/compute, entraînement et déploiement d’inférence.",
            "Mise en place observabilité & MLOps (versioning, reproductibilité, monitoring).",
            "Durcissement du modèle : stratégie de validation, tests de généralisation, robustesse sur volumes importants.",
          ],
          outcome: [
            "Pipeline complet, industrialisé et observable (du dataset au déploiement).",
            "Précision et robustesse améliorées sur signaux complexes.",
          ],
          tags: ["AI", "Digital Twin", "GCP", "MLOps"],
        },
        {
          title: "Pipeline de traitement de signal accéléré sur FPGA Alveo A80",
          period: "2023 – Présent",
          context:
            "Concevoir et optimiser un pipeline temps réel intégrant pré‑traitement + inférence IA/ML sous contraintes de latence et de débit.",
          action: [
            "Implémentation sur Alveo A80 : parallélisation/pipeline, timing closure.",
            "Optimisation ressources (DSP/BRAM) et perf (latence/débit).",
            "Intégration réseau haut débit : Ethernet / transceivers et optimisation système (débits, temps de réponse).",
          ],
          outcome: [
            "Architecture orientée performance avec optimisation continue.",
            "Amélioration des métriques système (débit/latence/efficacité canaux).",
          ],
          tags: ["FPGA", "Alveo A80", "Real-time", "Ethernet"],
        },
        {
          title: "Consulting & Freelance — AI / LLM / Agentic Systems",
          period: "2022 – Présent",
          context:
            "Missions internationales (Outlier, Mercor, Upwork, Turing) : prototypage rapide, intégration IA, cadrage technique et évaluation de modèles.",
          action: [
            "Développement d’applications et intégration de solutions IA/LLM.",
            "Rédaction de documents de cadrage (objectifs, périmètre, architecture, estimation efforts/risques, livrables).",
            "Assessment LLM/ML : tests qualité/robustesse, safety/alignment, analyse d’erreurs, recommandations (prompts, données, métriques).",
          ],
          outcome: [
            "Livrables cadrés, pragmatiques et actionnables pour des équipes produit.",
            "Amélioration de la qualité des modèles via boucles d’évaluation structurées.",
          ],
          tags: ["Consulting", "LLM", "Agentic", "Evaluation"],
        },
      ],
    },
    experience: {
      title: "Expérience",
      items: [
        {
          role: "Ingénieur Docteur — Expleo Group (Versailles, France)",
          period: "2023 – Présent",
          bullets: [
            "FPGA Cloud Research Engineer : pipeline de traitement de signaux accéléré intégrant IA/ML (temps réel).",
            "Implémentation/optimisation sur Xilinx Alveo A80 : pipelining, timing, DSP/BRAM, latence/débit.",
            "Intégration Ethernet / transceivers, optimisation des performances (débits, temps de réponse).",
            "IA & ML Engineer — GCP Cloud & DevOps : industrialisation, déploiement, observabilité & bonnes pratiques MLOps.",
          ],
        },
        {
          role: "Consulting & Freelance — AI / LLM / Agentic Systems",
          period: "2022 – Présent",
          bullets: [
            "Missions via Outlier, Mercor, Upwork, Turing : développement, prototypage, intégration IA.",
            "Cadrage technique : objectifs, périmètre, architecture, estimation efforts/risques, livrables.",
            "Évaluation de modèles LLM/ML : robustesse, sécurité/alignement, analyse d’erreurs, recommandations d’amélioration.",
          ],
        },
        {
          role: "Visiting Researcher — University of Manchester (APT Group)",
          period: "Juin 2022 – Sept. 2022",
          bullets: [
            "Travaux sur plateformes multi‑FPGA : planification tâches HW/SW.",
            "Manipulation de bitstreams et reconfiguration partielle (mobilité HiPEAC).",
          ],
        },
        {
          role: "Doctorant / Chercheur — CY Cergy Paris Université",
          period: "2019 – 2023",
          bullets: [
            "Thèse : planification de tâches HW/SW basées IA/ML sur architectures hétérogènes CPU+FPGA.",
            "Assistant d’enseignement : Linux Kernel, co‑design HW/SW FPGA SoC, STM32.",
          ],
        },
      ],
    },
    education: {
      title: "Formation & certifications",
      education: [
        { title: "Ph.D. — Doctorat en informatique & IA (Machine Learning)", where: "CY Cergy-Paris, France", period: "2019 – 2023" },
        { title: "M.Sc. — Embedded systems & information processing", where: "Université Paris Saclay, France", period: "2017 – 2018" },
        { title: "Diplôme d’ingénieur — Électronique & systèmes embarqués", where: "École Polytechnique d’Oran, Algérie", period: "2013 – 2016" },
      ],
      certs: [
        "IELTS 6,5",
        "DELF B2",
        "Scrum Master & Project Management — en préparation",
        "Microsoft Certified: DevOps Engineer Expert — en préparation",
        "Google GCP Cloud — en préparation",
        "Major de promotion / Valedictorian (années académiques)",
      ],
    },
    contact: {
      title: "Contact",
      lead:
        "Pour un poste (R&D / systèmes / IA) ou une mission (conseil, implémentation, accélération FPGA, industrialisation GCP), contactez‑moi.",
      primary: "Envoyer un email",
      secondary: "Voir LinkedIn",
    },
    footer: { note: `© 2026 Tarek Elouaret. Site one‑page FR/EN.` },
  },

  en: {
    nav: [
      { id: "top", label: "Home" },
      { id: "about", label: "Profile" },
      { id: "expertise", label: "Expertise" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Case studies" },
      { id: "experience", label: "Experience" },
      { id: "education", label: "Education" },
      { id: "contact", label: "Contact" },
    ],
    hero: {
      kicker: "Portfolio — AI • FPGA • GCP Cloud & DevOps",
      title: "Tarek Elouaret",
      subtitle:
        "AI and Digital Design Engineer, PhD • FPGA/GPU Specialist • GCP Cloud & DevOps • Real-time systems",
      ctas: [
        { href: "#contact", label: "Get in touch" },
        { href: "/resume.pdf", label: "Download CV", external: true },
      ],
      badges: [
        "Digital Twin • Time-series (LSTM/GRU + Transformer/LLM)",
        "FPGA (Alveo A80) • Vivado/Vitis AI • Quartus",
        "GCP • MLOps (versioning, monitoring, reproducibility)",
        "Python • C/C++ • VHDL/HLS • Linux",
      ],
    },
    about: {
      title: "Profile",
      lead:
        "Engineer & researcher specialized in hardware/software co-design, real-time systems, and parallel programming on Xilinx architecture. " +
        "I build end-to-end AI/ML/LLM solutions: R&D to prototype, cloud industrialization (GCP), and FPGA/SoC performance optimization.",
      highlights: [
        { k: "Email", v: LINKS.email },
        { k: "Phone", v: LINKS.phone },
        { k: "Address", v: LINKS.address },
        { k: "Status", v: LINKS.status.en },
        { k: "Languages", v: "English (full), French (full), Arabic (native)" },
      ],
    },
    expertise: {
      title: "Where I create value",
      items: [
        {
          title: "AI / Digital Twin (time-series signals)",
          desc:
            "Built AI emulation models for sequential signals by combining LSTM/GRU with Transformer/LLM architectures (representation, forecasting, generation).",
          chips: ["LSTM", "GRU", "Transformer", "LLM", "Time-series"],
        },
        {
          title: "GCP Cloud & DevOps / MLOps",
          desc:
            "Industrialized solutions on Google Cloud: data/compute pipelines, training & inference deployment, observability, monitoring, reproducibility and MLOps best practices.",
          chips: ["GCP", "Pipelines", "Observability", "Monitoring", "MLOps"],
        },
        {
          title: "FPGA (Alveo A80) • Real-time performance",
          desc:
            "Designed accelerated signal-processing pipelines integrating AI/ML (pre-processing + inference). Timing closure, DSP/BRAM optimization, latency/throughput, Ethernet/transceivers.",
          chips: ["Alveo A80", "Vivado", "Vitis AI", "DSP/BRAM", "Ethernet"],
        },
      ],
    },
    skills: {
      title: "Programming languages, tools & platforms",
      groups: [
        {
          title: "FPGA / Hardware",
          items: [
            "VHDL, HLS, RTL design",
            "Xilinx Vivado, Vitis AI — expert",
            "Intel Quartus — expert",
            "SoC / IP integration, timing closure, pipelining",
          ],
        },
        {
          title: "Software / AI",
          items: [
            "Python (ML/CNN/LLM workflows)",
            "C++, Embedded C (ARM Cortex-A9)",
            "LLM & ML evaluation (quality, robustness, safety/alignment)",
          ],
        },
        {
          title: "OS / Cloud",
          items: [
            "Linux (Ubuntu, CentOS) — 8+ years (bash, shell scripting)",
            "GCP — data/compute pipelines, training/inference deployment",
            "DevOps/MLOps — versioning, reproducibility, monitoring",
          ],
        },
      ],
    },
    projects: {
      title: "Top 3 case studies (client/recruiter format)",
      intro:
        "Three representative examples from my background: context → actions → outcomes (impact-oriented).",
      items: [
        {
          title: "Digital Twin Emulation on GCP — Time-series + Transformer/LLM",
          period: "2024 – 2025",
          context:
            "Build an AI digital-twin emulation model for sequential time-series signals, and bring it to production on GCP.",
          action: [
            "Modeled with LSTM/GRU + Transformer/LLM (representation, forecasting, generation/synthesis).",
            "GCP industrialization: data/compute pipelines, training and inference deployment.",
            "Added observability and MLOps (versioning, reproducibility, monitoring).",
            "Model hardening: validation strategy, generalization testing, robustness on large-scale data.",
          ],
          outcome: [
            "End-to-end pipeline, production-ready and observable (from data to deployment).",
            "Improved accuracy and robustness on complex signals.",
          ],
          tags: ["AI", "Digital Twin", "GCP", "MLOps"],
        },
        {
          title: "Accelerated signal-processing pipeline on Alveo A80 FPGA",
          period: "2023 – Present",
          context:
            "Design and optimize a real-time pipeline integrating pre-processing + AI/ML inference under strict latency/throughput constraints.",
          action: [
            "Implemented on Alveo A80: parallelization/pipelining, timing closure.",
            "Optimized resources (DSP/BRAM) and performance (latency/throughput).",
            "Integrated high-speed networking: Ethernet/transceivers and end-to-end system optimization.",
          ],
          outcome: [
            "Performance-first architecture with continuous optimization.",
            "Improved key system metrics (throughput, latency, channel efficiency).",
          ],
          tags: ["FPGA", "Alveo A80", "Real-time", "Ethernet"],
        },
        {
          title: "Consulting & Freelance — AI / LLM / Agentic Systems",
          period: "2022 – Present",
          context:
            "International missions (Outlier, Mercor, Upwork, Turing): rapid prototyping, AI integration, technical scoping and model evaluation.",
          action: [
            "Built applications and integrated AI/LLM solutions.",
            "Wrote technical scoping documents (objectives, scope, architecture, effort/risk estimates, deliverables).",
            "Evaluated LLM/ML models: quality/robustness testing, safety/alignment checks, error analysis, improvement recommendations (prompts, data, metrics).",
          ],
          outcome: [
            "Pragmatic, actionable deliverables for product teams.",
            "Improved model quality through structured evaluation loops.",
          ],
          tags: ["Consulting", "LLM", "Agentic", "Evaluation"],
        },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Engineer PhD — Expleo Group (Versailles, France)",
          period: "2023 – Present",
          bullets: [
            "FPGA Cloud Research Engineer: accelerated real-time signal-processing pipeline integrating AI/ML.",
            "Optimized on Xilinx Alveo A80: pipelining, timing closure, DSP/BRAM, latency/throughput.",
            "High-speed networking: Ethernet/transceivers; system-level performance tuning.",
            "AI & ML Engineer — GCP Cloud & DevOps: industrialization, deployment, observability & MLOps best practices.",
          ],
        },
        {
          role: "Consulting & Freelance — AI / LLM / Agentic Systems",
          period: "2022 – Present",
          bullets: [
            "Delivered projects via Outlier, Mercor, Upwork, Turing: development, prototyping, AI integration.",
            "Technical scoping: objectives, scope, architecture, effort/risk estimates, deliverables.",
            "LLM/ML evaluation: robustness, safety/alignment, error analysis, improvement recommendations.",
          ],
        },
        {
          role: "Visiting Researcher — University of Manchester (APT Group)",
          period: "Jun 2022 – Sep 2022",
          bullets: [
            "HW/SW task scheduling on multi-FPGA platforms.",
            "Bitstream handling and partial reconfiguration (HiPEAC mobility grant).",
          ],
        },
        {
          role: "PhD Researcher — CY Cergy Paris University",
          period: "2019 – 2023",
          bullets: [
            "Thesis: AI/ML-based HW/SW task scheduling for heterogeneous CPU+FPGA architectures.",
            "Teaching assistant: Linux Kernel, HW/SW co-design on FPGA SoC, STM32.",
          ],
        },
      ],
    },
    education: {
      title: "Education & certifications",
      education: [
        { title: "Ph.D. — Computer Science & Machine Learning (AI)", where: "CY Cergy-Paris, France", period: "2019 – 2023" },
        { title: "M.Sc. — Embedded Systems & Information Processing", where: "University of Paris Saclay, France", period: "2017 – 2018" },
        { title: "Engineering Degree — Electronics & Embedded Systems", where: "Ecole Polytechnique d’Oran, Algeria", period: "2013 – 2016" },
      ],
      certs: [
        "IELTS 6.5",
        "DELF B2 (French diploma)",
        "Scrum Master & Project Management — in progress",
        "Microsoft Certified: DevOps Engineer Expert — in progress",
        "Google GCP Cloud — in progress",
        "Valedictorian during academic years",
      ],
    },
    contact: {
      title: "Contact",
      lead:
        "For a role (R&D / systems / AI) or a mission (consulting, implementation, FPGA acceleration, GCP industrialization), reach out.",
      primary: "Send an email",
      secondary: "Open LinkedIn",
    },
    footer: { note: `© 2026 Tarek Elouaret. One‑page FR/EN site.` },
  },
};
