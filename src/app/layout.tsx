"use client";

import { Metadata } from "next";

import "@/app/globals.css";

import { SCREENS, SPACING } from "@/constants/styles";
import { ColorScheme, ColorSchemeProvider, MantineProvider, MantineThemeOverride } from "@mantine/core";
import { useState } from "react";

const theme: MantineThemeOverride = {
  breakpoints: { ...SCREENS },
  spacing: { xs: SPACING[2.5], sm: SPACING[3], md: SPACING[4], lg: SPACING[5], xl: SPACING[6] },
  colors: {
    "dark-gray": [
      "#E9ECEF",
      "#CED4DA",
      "#909296",
      "#5C5F66",
      "#373A40",
      "#2C2E33",
      "#25262B",
      "#1A1B1E",
      "#141517",
      "#101113",
    ],
  },
  primaryColor: "dark-gray",
};

interface ProviderProps {
  children: React.ReactNode;
}

interface LayoutProps {
  children: React.ReactNode;
}

const metadata: Metadata = {
  title: "Next.js",
};

export default function Layout(props: LayoutProps) {
  const { children } = props;

  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <html lang="en">
      <head />
      <body>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
            {children}
          </MantineProvider>
        </ColorSchemeProvider>
      </body>
    </html>
  );
}
