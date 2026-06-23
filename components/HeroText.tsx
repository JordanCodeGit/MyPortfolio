import { identity } from "@/lib/content";

/**
 * Hero copy. The value-proposition leads as the H1 (the most memorable thing on
 * the page); the role sits in the mono eyebrow, and the name / field / GPA / award
 * sit quietly beneath. Deliberately few words — the hero rewards a 30-second scan.
 * Shared by the static split hero and the full-bleed park hero.
 *
 * Entrance: `anim-rise` (CSS, see globals.css) staggers the lines in top-to-bottom
 * on load. It only runs when <html data-anim="on"> (set before paint by the inline
 * script when motion is allowed), so reduced-motion renders the final state
 * instantly with no flash — SSR-safe.
 */
const delay = (ms: number) => ({ "--anim-delay": `${ms}ms` }) as React.CSSProperties;

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
      <p
        style={delay(0)}
        className="anim-rise font-mono text-micro uppercase text-bark-brown"
      >
        {identity.role}
        <span className="text-bark-brown/50"> · </span>
        {identity.eyebrow}
      </p>

      <h1
        style={delay(70)}
        className={`anim-rise mt-4 max-w-[16ch] text-[clamp(2.25rem,4.6vw,3.75rem)] font-normal leading-[1.05] text-botanical-ink text-balance ${
          left ? "mx-auto md:mx-0" : "mx-auto"
        }`}
      >
        {identity.headline}
      </h1>

      <p
        style={delay(140)}
        className="anim-rise mt-5 text-[1.25rem] leading-snug text-bark-brown"
      >
        {identity.name}
        <span className="text-bark-brown/50"> · </span>
        {identity.status}
      </p>

      <p
        style={delay(210)}
        className="anim-rise mt-2 font-mono text-micro uppercase text-bark-brown"
      >
        {identity.gpa}
        <span className="text-bark-brown/50"> · </span>
        {identity.title}
      </p>

      <div
        style={delay(280)}
        className={`anim-rise ${rowJustify} mt-8 flex flex-wrap items-center gap-4`}
      >
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
