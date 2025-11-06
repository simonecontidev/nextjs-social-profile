"use client";

import * as React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { deepmerge } from "@mui/utils";

type Mode = "light" | "dark";
export const ColorModeContext = React.createContext<{ mode: Mode; toggle: () => void }>({
  mode: "dark",
  toggle: () => {},
});

const STORAGE_KEY = "ui-color-mode";

export default function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<Mode>("dark");

  // leggi preferenza da storage o media query
  React.useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem(STORAGE_KEY) as Mode | null) : null;
    if (stored === "light" || stored === "dark") {
      setMode(stored);
    } else if (window?.matchMedia) {
      setMode(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
  }, []);

  const toggle = React.useCallback(() => {
    setMode((m) => {
      const next = m === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  // palette base molto semplice
  const base = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark"
            ? {
                background: { default: "#141414", paper: "#1f1f1f" },
                divider: "rgba(255,255,255,0.1)",
              }
            : {
                background: { default: "#fafafa", paper: "#ffffff" },
                divider: "rgba(0,0,0,0.1)",
              }),
        },
        shape: { borderRadius: 12 },
        components: {
          MuiPaper: { styleOverrides: { root: { borderRadius: 16 } } },
        },
        typography: { fontSize: 14 },
      }),
    [mode]
  );

  // punto unico di estensione se vuoi (deepmerge)
  const theme = React.useMemo(() => deepmerge(base, {}), [base]);

  return (
    <ColorModeContext.Provider value={{ mode, toggle }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}