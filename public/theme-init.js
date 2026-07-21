(() => {
  try {
    const storageKey = "theme";
    const stored = localStorage.getItem(storageKey);
    const isDark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
  } catch {
    // ignore — theme falls back to CSS defaults
  }
})();
