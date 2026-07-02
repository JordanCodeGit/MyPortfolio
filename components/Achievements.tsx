import Reveal from "./Reveal";
import {
  achievements,
  featuredAchievements,
  moreAchievements,
  certifications,
  type Achievement,
} from "@/lib/content";

/**
 * Achievements — typographic, tiered (not a flat list): a prominent lead tier of
 * the strongest, most role-relevant credentials, then a compact secondary tier,
 * then certifications. Verifiable items link out ("Verify ↗"). Sage surface.
 */

function VerifyLink({ href }: { href: string }) {
  return (
    <>
      {" · "}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-forest-floor underline underline-offset-2 transition-colors hover:text-botanical-ink"
      >
        Verify ↗
      </a>
    </>
  );
}

/** Lead tier — larger title, more breathing room. */
function FeaturedList({ items }: { items: Achievement[] }) {
  return (
    <div className="border-t border-lichen">
      {items.map((item) => (
        <Reveal key={item.title}>
          <div className="grid items-baseline gap-x-6 gap-y-1 border-b border-lichen py-6 sm:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-[1.5rem] font-normal leading-snug text-botanical-ink">
                {item.title}
              </h3>
              <p className="mt-1 font-mono text-micro uppercase text-bark-brown">
                {item.issuer}
                {item.href && <VerifyLink href={item.href} />}
              </p>
            </div>
            <span className="font-mono text-body-sm text-botanical-ink sm:text-right">
              {item.year}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Secondary tier — compact rows. */
function CompactList({ items }: { items: Achievement[] }) {
  return (
    <div className="border-t border-lichen">
      {items.map((item) => (
        <Reveal key={item.title}>
          <div className="grid items-baseline gap-x-6 gap-y-1 border-b border-lichen py-4 sm:grid-cols-[1fr_auto]">
            <div>
              <h4 className="text-body font-normal leading-snug text-botanical-ink">
                {item.title}
              </h4>
              <p className="mt-1 font-mono text-micro uppercase text-bark-brown">
                {item.issuer}
                {item.href && <VerifyLink href={item.href} />}
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
          <h2 className="text-heading font-normal text-botanical-ink text-balance">
            {achievements.heading}
          </h2>
        </Reveal>

        <div className="mt-12">
          <FeaturedList items={featuredAchievements} />
        </div>

        <div className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-2">
          <div>
            <Reveal>
              <p className="mb-4 font-mono text-micro uppercase text-forest-floor">
                More recognition
              </p>
            </Reveal>
            <CompactList items={moreAchievements} />
          </div>
          <div>
            <Reveal>
              <p className="mb-4 font-mono text-micro uppercase text-forest-floor">
                Certifications
              </p>
            </Reveal>
            <CompactList items={certifications} />
          </div>
        </div>
      </div>
    </section>
  );
}
