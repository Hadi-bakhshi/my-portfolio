"use client";

import { useEffect, useState } from "react";
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

const STORAGE_KEY = "theme";

/**
 * Toggles the `.dark` class already wired up in your Tailwind theme.
 * Persists choice to localStorage; falls back to system preference on
 * first load. Initial class is applied by a blocking script in root layout
 * to avoid a light→dark flash.
 */
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Icon icon={isDark ? Sun03Icon : Moon02Icon} size={18} />
    </Button>
  );
}
