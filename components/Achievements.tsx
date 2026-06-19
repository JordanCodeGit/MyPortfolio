import Reveal from "./Reveal";
import {
  achievements,
  achievementList,
  certifications,
  type Achievement,
} from "@/lib/content";

/**
 * Achievements — typographic lists (not a gallery): a curated "Awards" group and
 * a "Certifications & IPR" group. Verifiable items can link out (e.g. Credly).
 * Sage surface, banded between Experience and Skills.
 */
function List({ items }: { items: Achievement[] }) {
  return (
    <div className="border-t border-lichen">
      {items.map((item) => (
        <Reveal key={item.title}>
          <div className="grid items-baseline gap-x-6 gap-y-1 border-b border-lichen py-5 sm:grid-cols-[1fr_auto]">
            <div>
              <h4 className="text-[1.125rem] font-normal leading-snug text-botanical-ink">
                {item.title}
              </h4>
              <p className="mt-1 font-mono text-micro uppercase text-bark-brown">
                {item.issuer}
                {item.href && (
                  <>
                    {" · "}
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest-floor underline underline-offset-2 transition-colors hover:text-botanical-ink"
                    >
                      Verify ↗
                    </a>
                  </>
                )}
              </p>
            </div>
            <span className="font-mono text-micro uppercase text-bark-brown sm:text-right">
              {item.year}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="bg-sage-mist px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="font-mono text-micro uppercase text-bark-brown">
            {achievements.eyebrow}
          </p>
          <h2 className="mt-4 text-heading font-normal text-botanical-ink text-balance">
            {achievements.heading}
          </h2>
        </Reveal>

        <div className="mt-12">
          <Reveal>
            <p className="mb-4 font-mono text-micro uppercase text-forest-floor">
              Awards
            </p>
          </Reveal>
          <List items={achievementList} />
        </div>

        <div className="mt-14">
          <Reveal>
            <p className="mb-4 font-mono text-micro uppercase text-forest-floor">
              Certifications &amp; IPR
            </p>
          </Reveal>
          <List items={certifications} />
        </div>
      </div>
    </section>
  );
}
