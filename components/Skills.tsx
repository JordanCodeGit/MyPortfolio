import Reveal from "./Reveal";
import { skills, skillGroups } from "@/lib/content";

/**
 * Compact skills section — the detailed grid relocated out of the hero. Sits near
 * the end of the page (just above Contact once that lands). Cream surface.
 */
export default function Skills() {
  return (
    <section id="skills" className="bg-cream-paper px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="font-mono text-micro uppercase text-bark-brown">
            {skills.eyebrow}
          </p>
          <h2 className="mt-4 text-heading font-normal text-botanical-ink">
            {skills.heading}
          </h2>
        </Reveal>

        <Reveal
          delay={0.05}
          className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-micro uppercase text-bark-brown">
                {group.label}
              </p>
              <ul className="mt-3 space-y-1">
                {group.items.map((item) => (
                  <li key={item} className="text-body-sm text-bark-brown">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
