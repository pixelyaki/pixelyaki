"use client";

import { useEffect } from "react";

type Props = { dir: "ltr" | "rtl"; lang: string };

export function HtmlDirSetter({ dir, lang }: Props) {
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [dir, lang]);
  return null;
}
