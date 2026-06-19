import { identity } from "@/lib/content";

/**
 * Role-first hero copy. The role is the highlight (a recruiter learns *what you
 * are* in one glance); the name, field, GPA and award sit quietly beneath it.
 * Deliberately few words — the hero rewards a 30-second scan. Shared by the
 * static split hero and the full-bleed park hero. `align="left"` from md up.
 */
export default function HeroText({
  align = "center",
}: {
  align?: "center" | "left";
}) {
  const left = align === "left";
  const textAlign = left ? "text-center md:text-left" : "text-center";
  const rowJustify = left ? "justify-center md:justify-start" : "justify-center";

  return (
    <div className={textAlign}>
      <p className="font-mono text-micro uppercase text-bark-brown">
        {identity.eyebrow}
      </p>

      <h1 className="mt-4 text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.02] text-botanical-ink">
        {identity.role}
      </h1>

      <p className="mt-5 text-[1.375rem] leading-snug text-bark-brown">
        {identity.name}
        <span className="text-eucalyptus"> · </span>
        {identity.status}
      </p>

      <p className="mt-2 font-mono text-micro uppercase text-bark-brown">
        {identity.gpa}
        <span className="text-eucalyptus"> · </span>
        {identity.title}
      </p>

      <div className={`${rowJustify} mt-8 flex flex-wrap items-center gap-4`}>
        <a
          href="#work"
          className="rounded-[20px] bg-warm-loam px-7 py-3 text-body-sm text-cream-paper transition-colors hover:bg-forest-floor"
        >
          View the work
        </a>
        <a
          href={identity.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[20px] border border-botanical-ink px-7 py-3 text-body-sm text-botanical-ink transition-colors hover:bg-sage-mist"
        >
          View CV
        </a>
      </div>
    </div>
  );
}
