import type { Project } from "@/lib/content";
import ProjectImage from "./ProjectImage";

/**
 * One compact case study. A landing-page screenshot sits on top (stacked) or as
 * a left column on wide screens; the outcome-bearing case-study text follows —
 * these are student/competition projects, so the substance stays the decisions
 * and the measured result.
 */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-[8px] border border-lichen bg-cream-paper p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[2fr_3fr] lg:gap-8">
        {/* Screenshot — top on narrow, left column on wide */}
        <div className="lg:self-start">
          <ProjectImage
            src={project.image}
            alt={project.imageAlt}
            label={project.name}
          />
        </div>

        {/* Case study */}
        <div>
          <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-heading font-normal text-botanical-ink">
              {project.name}
            </h3>
            <span className="font-mono text-micro uppercase text-bark-brown">
              {project.year}
            </span>
          </header>

          <p className="mt-2 font-mono text-micro uppercase text-forest-floor">
            {project.role} · {project.team}
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <p className="font-mono text-micro uppercase text-bark-brown">
                The problem
              </p>
              <p className="mt-1 text-body text-bark-brown text-pretty">
                {project.problem}
              </p>
            </div>

            <div>
              <p className="font-mono text-micro uppercase text-bark-brown">
                Decisions
              </p>
              <ul className="mt-2 space-y-2">
                {project.decisions.map((decision) => (
                  <li
                    key={decision}
                    className="flex gap-3 text-body text-bark-brown text-pretty"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-floor"
                    />
                    {decision}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-micro uppercase text-bark-brown">
                Outcome
              </p>
              <p className="mt-1 text-body text-botanical-ink text-pretty">
                {project.outcome}
              </p>
            </div>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-moss-veil px-3 py-1 font-mono text-micro text-botanical-ink"
              >
                {tech}
              </li>
            ))}
          </ul>

          {(project.liveUrl || project.iprUrl) && (
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-micro uppercase">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-floor underline underline-offset-2 transition-colors hover:text-botanical-ink"
                >
                  Live site ↗
                </a>
              )}
              {project.iprUrl && (
                <a
                  href={project.iprUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-floor underline underline-offset-2 transition-colors hover:text-botanical-ink"
                >
                  Registered IPR ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
