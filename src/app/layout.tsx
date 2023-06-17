"use client";

import "@/app/globals.css";
import theme from "@/theme";
import dynamic from 'next/dynamic';
 
import { 
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  AppShell,
  Flex,
  createStyles,
  LoadingOverlay
} from "@mantine/core";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive'


const useStyles = createStyles((theme) => ({
  overlay: {
    zIndex: 9,
    border: "0",
    position: "absolute"
  }
}))

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  const { classes } = useStyles();

  const links = [
    { 
      link: "/", 
      label: "Home"
    },
    { 
      link: "/services", 
      label: "Services"
    }
  ];

  const DynamicNavigation = dynamic(() => import("../components/Navigation"), {
    ssr: false,
    loading: () => {
      return <LoadingOverlay visible={true} overlayBlur={3} />
    },
  })

  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <html lang="en">
      <head />
      <body>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider withGlobalStyles withNormalizeCSS theme={{...theme, colorScheme}}>
            <AppShell
              sx={(theme) => ({
                main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] },
              })}
            >
              <DynamicNavigation links={links}/>
              {children}
            </AppShell>
          </MantineProvider>
        </ColorSchemeProvider>
      </body>
    </html>
  );
}
