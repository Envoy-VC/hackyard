"use client";

import type * as react from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export const ThemeProvider = ({
  children,
  ...props
}: react.ComponentProps<typeof NextThemesProvider>) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
