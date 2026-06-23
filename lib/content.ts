export type Project = {
  name: string;
  year: string;
  role: string;
  team: string;
  problem: string;
  decisions: string[];
  outcome: string;
  stack: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  iprUrl?: string;
};

export const identity = {
  name: "Jordan Angkawijaya",
  eyebrow: "AI / NLP / Computer Vision / Web",
  // Value-prop leads the hero (H1); the role is demoted to the eyebrow.
  headline: "I turn research-grade AI into products teams can ship.",
  role: "Junior Project Manager",
  status: "Computer Science · Telkom University",
  gpa: "GPA 3.99 / 4.00",
  title: "Outstanding Student (Pilmapres) — 3rd Place, 2026",
  cv: "/cv.pdf",
  photo: {
    src: "/jordan.png",
    width: 843,
    height: 1264,
    alt: "Jordan Angkawijaya, standing and holding an open book.",
  },
};

export const skills = {
  eyebrow: "Skills",
  heading: "What I work with.",
};

export const achievements = {
  eyebrow: "Achievements",
  heading: "What the work has earned.",
};

export const contact = {
  eyebrow: "Contact",
  heading: "Let's build something worth shipping.",
  invite:
    "I'm open to product-management and AI roles, internships, and collaborations. Email is the fastest way to reach me.",
  email: "jordanaw0117@gmail.com",
  linkedin: {
    label: "linkedin.com/in/jordan-angkawijaya",
    href: "https://www.linkedin.com/in/jordan-angkawijaya",
  },
  location: "Banyumas · Purwokerto, Central Java, Indonesia",
};

export type Achievement = {
  title: string;
  issuer: string;
  year: string;
  // External proof (e.g. Credly badge). Replace "#" with the real verify URL.
  href?: string;
};

// Curated for the PM role: international recognition, communication, leadership.
// Lead tier — the strongest, most role-relevant signals (shown larger).
export const featuredAchievements: Achievement[] = [
  {
    title: "International Gold Medal — ISIF (Education Category)",
    issuer: "IYSA",
    year: "2025",
    href: "https://drive.google.com/file/d/1zEGuWYKMa52jlghgn1kAQtbwGmobzfXy/view?usp=sharing",
  },
  {
    title: "3rd Place — Outstanding Student (Pilmapres), Undergraduate",
    issuer: "Telkom University National Campus",
    year: "2026",
    href: "https://purwokerto.telkomuniversity.ac.id/membanggakan-2-mahasiswa-telkom-university-raih-pilmapres-2026/",
  },
  {
    title: "2nd International Winner, Innovation Proposal",
    issuer: "ISC · Brawijaya University",
    year: "2025",
    href: "https://drive.google.com/file/d/1T46MycOyk5hk84n51BejtWUcDZETOYWN/view?usp=sharing",
  },
  {
    title: "Registered IPR — UEMKASolve · LogiCheck",
    issuer: "Directorate General of Intellectual Property",
    year: "2023",
  },
];

// Secondary tier — strong but less role-central (shown compact).
export const moreAchievements: Achievement[] = [
  {
    title: "Best Presentation, Global Project-Based Learning",
    issuer: "SUT · Thailand",
    year: "2025",
    href: "https://drive.google.com/file/d/1lIGrHVC7SOdCXzqtBI914nhCFnXYYnNf/view?usp=sharing",
  },
  {
    title: "2nd National Winner, National Debate Competition",
    issuer: "Universitas Negeri Padang",
    year: "2024",
    href: "https://drive.google.com/file/d/1KkxUoWjf9rhlJHJHCH59b2w66i1Bp7Ub/view?usp=sharing",
  },
  {
    title: "1st National Winner, OSPN (English Field)",
    issuer: "Pateron Indonesia",
    year: "2023",
    href: "https://drive.google.com/file/d/1SOFqvFVl0iEBRifUFZS-6HJHTMnq-vMu/view?usp=sharing",
  },
];

export const certifications: Achievement[] = [
  {
    title: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    year: "2025",
    href: "https://drive.google.com/file/d/1zoN2pNo7aNn8CJhE4Rgoqj_Uj3gerXDT/view?usp=sharing",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    year: "2025",
    href: "https://drive.google.com/file/d/1ssHZ1hxCKH0spuj4WZOJzsnkVfrsaV_J/view?usp=sharing",
  },
  {
    title: "PCAP — Programming Essentials in Python",
    issuer: "Cisco · OpenEDG Python Institute",
    year: "2022",
    href: "https://drive.google.com/file/d/1iiwkKKLoyTz97E3ORxb54BRVdOpwxkcX/view?usp=sharing",
  },
  {
    title: "TOEIC 900",
    issuer: "International Test Center",
    year: "2022",
    href: "https://drive.google.com/file/d/11m7qC5rwvdyJy9aumQXlksKnSzMrxMkB/view?usp=sharing",
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "PHP", "SQL", "HTML / CSS / JavaScript"],
  },
  {
    label: "AI / ML",
    items: [
      "NLP pipeline architecture",
      "Feature engineering",
      "SVM",
      "Computer vision (YOLO)",
      "RoBERTa",
    ],
  },
  {
    label: "Ways of working",
    items: ["Git", "Trello", "Kanban", "Agile"],
  },
  {
    label: "Spoken",
    items: ["English — TOEIC 900", "Indonesian — native"],
  },
];

export const work = {
  eyebrow: "Selected work",
  heading: "Two products, shipped end to end.",
};

export const experience = {
  eyebrow: "Experience",
  heading: "Paid work, and the leadership behind it.",
};

export type Role = {
  role: string;
  org: string;
  period: string;
  location: string;
  kind: string;
  summary: string;
};

export const roles: Role[] = [
  {
    role: "Junior Project Manager",
    org: "PT. EIT Developer Indonesia",
    period: "Jan 2026 — Present",
    location: "Purwokerto",
    kind: "Project Management",
    summary:
      "Supported a Senior PM across two active client software projects, tracking 30+ milestones through Jira and Trello sprint workflows.",
  },
  {
    role: "Hospitality Coordinator",
    org: "The INDEX International Exchange",
    period: "Jun 2024 — Present",
    location: "Indonesia",
    kind: "Leadership · Operations",
    summary:
      "Scaled the operations team from 3 to 8 by recruiting and onboarding volunteers, enabling VIP-delegation support across a 7-day international exchange.",
  },
  {
    role: "Vice President",
    org: "Satria Muda Community",
    period: "Dec 2023 — Oct 2025",
    location: "Indonesia",
    kind: "Leadership",
    summary:
      "Advanced 47 grant proposals into a national selection pool by running a QA review pipeline across a 52-member academic incubator.",
  },
  {
    role: "Full-Stack Web Developer Intern",
    org: "PT. Solusi247",
    period: "Apr — Sep 2022",
    location: "Yogyakarta",
    kind: "Engineering · Pre-university",
    summary:
      "Built and deployed a JWT-secured single-page app with automated password-expiry controls, plus a MySQL database and RESTful API serving internal users.",
  },
];

export const projects: Project[] = [
  {
    name: "UEMKASolve",
    year: "2026",
    role: "PM & Ideator",
    team: "Team of 5 — FE, BE, UI/UX, QA",
    problem:
      "Micro and small businesses keep their books on paper and memory, so owners lose hours to manual entry and lose track of what is actually selling.",
    decisions: [
      "Chose a vision-language model to read receipts and handwriting directly, instead of forcing owners to type every line item.",
      "Scoped the MVP to one ledger workflow and validated it in the field with real MSME clients before adding features.",
    ],
    outcome:
      "~13% operational-efficiency gain across 15 MSME clients and 89% task-success in field usability testing. Secured funding, a journal publication, and registered IPR.",
    stack: ["PHP", "Laravel", "Generative VLM API"],
    image: "/uemkasolve.png",
    imageAlt: "UEMKASolve cash-ledger dashboard screenshot.",
    liveUrl: "https://uemkasolve.my.id/",
    iprUrl:
      "https://drive.google.com/file/d/1Z3FPSuZJaifPEbRb-01tsxfrjQqVzXgB/view?usp=drive_link",
  },
  {
    name: "LogiCheck",
    year: "2025",
    role: "PM & Ideator",
    team: "Team of 6 — Product, Design, Engineering",
    problem:
      "Students increasingly offload thinking to AI, weakening the reasoning skills the tools were meant to support.",
    decisions: [
      "Framed the product as cognitive training rather than a tutor, so it builds reasoning instead of replacing it.",
      "Used an LLM (Gemini API) to score the quality of a student's own reasoning, keeping the human in the loop by design.",
    ],
    outcome:
      "International Gold Medal at ISIF 2025, plus academic sponsorship and registered IPR.",
    stack: [
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Browser Extension",
    ],
    image: "/logicheck.png",
    imageAlt: "LogiCheck landing page screenshot.",
    liveUrl: "https://logi-check.vercel.app/",
    iprUrl:
      "https://drive.google.com/file/d/1hAfVfxtGb9isA9OCAibGvJlUBjIB5nOZ/view?usp=drive_link",
  },
];
