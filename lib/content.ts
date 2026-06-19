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
  // Role-first hero: the role is the headline, identity sits beneath it.
  role: "Junior Project Manager",
  status: "Computer Science · Telkom University",
  gpa: "GPA 3.99 / 4.00",
  title: "Mahasiswa Berprestasi Telkom University 2026",
  cv: "https://drive.google.com/file/d/1iSo7IlSleH1G_LrxH1tq6GLOnj0ttu6U/view?usp=sharing",
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
export const achievementList: Achievement[] = [
  {
    title: "Mahasiswa Berprestasi (Outstanding Student)",
    issuer: "Telkom University",
    year: "2026",
  },
  {
    title: "International Gold Medal — ISIF (Education Category)",
    issuer: "IYSA",
    year: "2025",
  },
  {
    title: "2nd International Winner, Innovation Proposal",
    issuer: "ISC · Brawijaya University",
    year: "2025",
  },
  {
    title: "Best Presentation, Global Project-Based Learning",
    issuer: "SUT · Thailand",
    year: "2025",
  },
  {
    title: "2nd National Winner, National Debate Competition",
    issuer: "Universitas Negeri Padang",
    year: "2024",
  },
  {
    title: "1st National Winner, OSPN (English Field)",
    issuer: "Pateron Indonesia",
    year: "2023",
  },
];

export const certifications: Achievement[] = [
  {
    title: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    year: "2025",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    year: "2025",
  },
  {
    title: "PCAP — Programming Essentials in Python",
    issuer: "Cisco · OpenEDG Python Institute",
    year: "2022",
  },
  {
    title: "TOEIC 900",
    issuer: "International Test Center",
    year: "2022",
  },
  {
    title: "Registered IPR — UEMKASolve · LogiCheck · CFlix",
    issuer: "Directorate General of Intellectual Property",
    year: "2023",
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
      "Shadowing a Senior PM across the active lifecycle of two client software projects — observing how Jira and Trello workflows turn 30+ milestones into sprint deliverables.",
  },
  {
    role: "Hospitality Coordinator",
    org: "The INDEX International Exchange",
    period: "Jun 2024 — Present",
    location: "Indonesia",
    kind: "Leadership · Operations",
    summary:
      "Scaled the operations team from 3 to 8 to support VIP delegations across a 7-day annual international exchange.",
  },
  {
    role: "Vice President",
    org: "Satria Muda Community",
    period: "Dec 2023 — Oct 2025",
    location: "Indonesia",
    kind: "Leadership",
    summary:
      "Ran a 52-member academic incubator and managed a QA review pipeline that advanced 47 grant proposals into a national pool.",
  },
  {
    role: "Full-Stack Web Developer Intern",
    org: "PT. Solusi247",
    period: "Apr — Sep 2022",
    location: "Yogyakarta",
    kind: "Engineering · Pre-university",
    summary:
      "Built a JWT-secured single-page app with automated password-expiry controls, and deployed a MySQL database and RESTful API for internal users.",
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
      "Used NLP to score the quality of a student's own reasoning, keeping the human in the loop by design.",
    ],
    outcome:
      "International Gold Medal at ISIF 2025, plus academic sponsorship and registered IPR.",
    stack: ["Python", "NLP"],
    image: "/logicheck.png",
    imageAlt: "LogiCheck landing page screenshot.",
    liveUrl: "https://logi-check.vercel.app/",
    iprUrl:
      "https://drive.google.com/file/d/1hAfVfxtGb9isA9OCAibGvJlUBjIB5nOZ/view?usp=drive_link",
  },
];
