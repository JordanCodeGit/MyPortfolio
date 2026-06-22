import { identity } from "@/lib/content";

/**
 * Hero copy. The value-proposition leads as the H1 (the most memorable thing on
 * the page); the role sits in the mono eyebrow, and the name / field / GPA / award
 * sit quietly beneath. Deliberately few words — the hero rewards a 30-second scan.
 * Shared by the static split hero and the full-bleed park hero.
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
        {identity.role}
        <span className="text-bark-brown/50"> · </span>
        {identity.eyebrow}
      </p>

      <h1
        className={`mt-4 max-w-[16ch] text-[clamp(2.25rem,4.6vw,3.75rem)] font-normal leading-[1.05] text-botanical-ink text-balance ${
          left ? "mx-auto md:mx-0" : "mx-auto"
        }`}
      >
        {identity.headline}
      </h1>

      <p className="mt-5 text-[1.25rem] leading-snug text-bark-brown">
        {identity.name}
        <span className="text-bark-brown/50"> · </span>
        {identity.status}
      </p>

      <p className="mt-2 font-mono text-micro uppercase text-bark-brown">
        {identity.gpa}
        <span className="text-bark-brown/50"> · </span>
        {identity.title}
      </p>

      <div className={`${rowJustify} mt-8 flex flex-wrap items-center gap-4`}>
        <a
          href="#work"
          className="rounded-[20px] bg-warm-loam px-7 py-3 text-body-sm text-[var(--color-paper-fixed)] transition-colors hover:bg-forest-floor"
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
