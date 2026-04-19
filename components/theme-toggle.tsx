"use client";

import { HalfMoon, SunLight } from "iconoir-react";
import { useEffect, useState } from "react";

function isDarkModeEnabled() {
  return document.documentElement.classList.contains("dark");
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(isDarkModeEnabled());

    const html = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains("dark"));
    });

    observer.observe(html, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();
  }, []);

  function handleToggle() {
    const next = !isDarkModeEnabled();
    document.documentElement.classList.toggle("dark", next);
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label="Toggle dark mode"
      className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-600 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
    >
      {isDark ? <SunLight className="h-4 w-4" /> : <HalfMoon className="h-4 w-4" />}
    </button>
  );
}
