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
      className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
    >
      {isDark ? <SunLight className="h-4 w-4" /> : <HalfMoon className="h-4 w-4" />}
    </button>
  );
}
