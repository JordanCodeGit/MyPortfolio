import Reveal from "./Reveal";
import { contact } from "@/lib/content";

/**
 * Contact — email (mailto) + LinkedIn + location + a one-line invitation. No form.
 * The email is the primary, prominent action. Sage surface.
 */
export default function Contact() {
  return (
    <section id="contact" className="bg-sage-mist px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="max-w-2xl text-heading font-normal text-botanical-ink text-balance">
            {contact.heading}
          </h2>
          <p className="mt-5 max-w-prose text-body text-bark-brown text-pretty">
            {contact.invite}
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-block text-[clamp(1.5rem,3.5vw,2.25rem)] font-normal leading-tight text-botanical-ink underline decoration-eucalyptus underline-offset-[6px] transition-colors hover:decoration-forest-floor"
          >
            {contact.email}
          </a>

          <div className="mt-8 font-mono text-micro uppercase text-bark-brown">
            <a
              href={contact.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-floor underline underline-offset-2 transition-colors hover:text-botanical-ink"
            >
              {contact.linkedin.label} ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
