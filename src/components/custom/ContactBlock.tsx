import {
  Github01Icon,
  Linkedin02Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { Eyebrow } from "@/components/custom/Eyebrow";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { contact } from "@/data/resume";
import {
  bodyTextClass,
  focusRingClass,
  iconLinkClass,
  metaTextClass,
  sectionYClass,
  shellClass,
} from "@/lib/layout";
import { cn } from "@/lib/utils";

export function ContactBlock() {
  return (
    <footer id="contact" className={cn(shellClass, sectionYClass)}>
      <div className="flex flex-col gap-6 border-t border-border pt-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <Eyebrow>system.contact</Eyebrow>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl">
            Let&apos;s talk.
          </h2>
          <p className={cn("mt-3", bodyTextClass)}>{contact.intent}</p>
          <Link
            href={`mailto:${contact.email}`}
            className={cn(
              "mt-4 inline-block rounded-sm font-mono text-lg text-primary underline-offset-4 transition-colors hover:underline",
              focusRingClass,
            )}
          >
            {contact.email}
          </Link>
          <p className={cn("mt-3", metaTextClass)}>
            {contact.location} · {contact.availability}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href={`mailto:${contact.email}`} />}
            >
              <Icon icon={Mail01Icon} size={20} />
              Email me
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={
                <Link
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                />
              }
            >
              <Icon icon={Linkedin02Icon} size={20} />
              LinkedIn
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={
                <Link href={contact.github} target="_blank" rel="noreferrer" />
              }
            >
              <Icon icon={Github01Icon} size={20} />
              GitHub
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className={iconLinkClass}
          >
            <Icon icon={Github01Icon} size={20} />
          </Link>
          <Link
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={iconLinkClass}
          >
            <Icon icon={Linkedin02Icon} size={20} />
          </Link>
        </div>
      </div>

      <p className={cn("mt-12", metaTextClass)}>
        © {new Date().getFullYear()} Hadi Bakhshi
      </p>
    </footer>
  );
}
