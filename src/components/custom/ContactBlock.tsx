import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon, Linkedin02Icon } from "@hugeicons/core-free-icons";
import { education, languages, contact } from "@/data/resume";
import { Eyebrow } from "@/components/custom/Eyebrow";

export function ContactBlock() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 border-t border-border pt-12 md:grid-cols-2">
        <div>
          <Eyebrow>education</Eyebrow>
          <p className="mt-2 font-heading text-lg">{education.degree}</p>
          <p className="text-sm text-muted-foreground">{education.school}</p>
          <p className="font-mono text-xs text-muted-foreground">{education.dateRange}</p>
        </div>

        <div>
          <Eyebrow>languages</Eyebrow>
          <ul className="mt-2 flex flex-col gap-1">
            {languages.map((lang) => (
              <li key={lang.name} className="text-sm">
                <span className="font-medium">{lang.name}</span>{" "}
                <span className="text-muted-foreground">— {lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-6 border-t border-border pt-12 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow>system.contact</Eyebrow>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl">Let&apos;s talk.</h2>
          <a
            href={`mailto:${contact.email}`}
            className="mt-2 inline-block font-mono text-lg text-primary underline-offset-4 hover:underline"
          >
            {contact.email}
          </a>
          <p className="mt-1 font-mono text-sm text-muted-foreground">{contact.phone}</p>
          <p className="mt-2 font-mono text-xs text-muted-foreground">{contact.location}</p>
          <p className="mt-1 font-mono text-xs text-primary">{contact.availability}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground"
          >
            <HugeiconsIcon icon={Github01Icon} size={20} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground"
          >
            <HugeiconsIcon icon={Linkedin02Icon} size={20} />
          </a>
        </div>
      </div>

      <p className="mt-12 font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} Hadi Bakhshi</p>
    </footer>
  );
}
