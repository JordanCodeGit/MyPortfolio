import { identity, contact } from "@/lib/content";

/**
 * Site footer on a dark fill (cream on botanical ink — the one sanctioned dark
 * surface). A footer is for wayfinding + meta, NOT a second contact card: a
 * wordmark + positioning, secondary nav, location, copyright, and back-to-top.
 * Contact actions (email / LinkedIn) live in the Contact section, not here.
 */

const FOOTER_LINKS = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-botanical-ink px-6 py-12 text-cream-paper">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          {/* Wordmark + positioning + location */}
          <div>
            <p className="text-body-sm font-bold tracking-tight">
              {identity.name}
            </p>
            <p className="mt-1 font-mono text-micro uppercase text-eucalyptus">
              {identity.role} · {identity.eyebrow}
            </p>
            <p className="mt-3 font-mono text-micro uppercase text-eucalyptus">
              {contact.location}
            </p>
          </div>

          {/* Secondary navigation */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-micro uppercase">
              {FOOTER_LINKS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-cream-paper underline-offset-2 transition-colors hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Meta row */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-bark-brown pt-6 font-mono text-micro uppercase text-eucalyptus">
          <span>© 2026 {identity.name} · Built with Next.js, deployed on Vercel</span>
          <a
            href="#"
            className="text-cream-paper underline-offset-2 transition-colors hover:underline"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
