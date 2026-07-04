import { HugeiconsIcon } from "@hugeicons/react";
import { Download01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/custom/ThemeToggle";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-mono text-sm font-medium">
          hadi.dev
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" nativeButton={false} render={<a href="/resume.pdf" download />}>
            <span className="hidden sm:inline">Resume</span>
            <HugeiconsIcon icon={Download01Icon} size={16} data-icon="inline-end" />
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
