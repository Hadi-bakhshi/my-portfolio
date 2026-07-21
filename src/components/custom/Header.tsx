"use client";

import { useId, useState } from "react";
import {
  Download01Icon,
  Menu01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/custom/ThemeToggle";
import { Icon } from "@/components/ui/icon";
import { navLinkClass, shellClass } from "@/lib/layout";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#stack", label: "Stack" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuId = useId();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card">
      <div className={cn(shellClass, "flex h-16 items-center justify-between")}>
        <Link
          href="/"
          className={cn(
            "rounded-sm font-mono text-sm font-medium",
            "outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30",
          )}
        >
          <Image
            src={"/hLogo.png"}
            alt="hadi-bakhshi-portfolio-icon"
            width={38}
            height={38}
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            nativeButton={false}
            render={
              <Link href="/resume.pdf" aria-label="Download resume" download />
            }
          >
            <span className="hidden sm:inline">Resume</span>
            <Icon icon={Download01Icon} size={16} data-icon="inline-end" />
          </Button>
          <ThemeToggle />
          <Button
            size="icon-sm"
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls={menuId}
          >
            <Icon icon={mobileOpen ? Cancel01Icon : Menu01Icon} size={20} />
          </Button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          id={menuId}
          className="border-t border-border px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(navLinkClass, "block")}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
