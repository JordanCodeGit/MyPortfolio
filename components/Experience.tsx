import Reveal from "./Reveal";
import { experience, roles } from "@/lib/content";

/**
 * Experience — paid work AND leadership (leadership is real PM evidence). An
 * editorial two-column list: period / place / kind on the left, role + summary
 * on the right, hairline dividers between. Cream surface.
 *
 * The EIT role is framed honestly as shadowing/observing — not "led/directed".
 */
export default function Experience() {
  return (
    <section id="experience" className="bg-cream-paper px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-heading font-normal text-botanical-ink text-balance">
            {experience.heading}
          </h2>
        </Reveal>

        <div className="mt-12 border-t border-lichen">
          {roles.map((entry) => (
            <Reveal key={`${entry.role}-${entry.org}`}>
              <div className="grid gap-x-10 gap-y-3 border-b border-lichen py-8 md:grid-cols-[1fr_2fr]">
                {/* Left: period / place / kind */}
                <div>
                  <p className="text-body-sm text-botanical-ink">
                    {entry.period}
                  </p>
                  <p className="mt-1 font-mono text-micro uppercase text-bark-brown">
                    {entry.location}
                  </p>
                  <span className="mt-3 inline-block rounded-full bg-moss-veil px-3 py-1 font-mono text-micro text-botanical-ink">
                    {entry.kind}
                  </span>
                </div>

                {/* Right: role + org + summary */}
                <div>
                  <h3 className="text-[1.375rem] font-normal leading-snug text-botanical-ink">
                    {entry.role}
                  </h3>
                  <p className="mt-1 font-mono text-micro uppercase text-forest-floor">
                    {entry.org}
                  </p>
                  <p className="mt-3 max-w-prose text-body text-bark-brown text-pretty">
                    {entry.summary}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
