"use client";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import EmotionCacheProvider from "./emotionCache";
import { theme } from "../../theme";

const ThemeRegistry = ({ children }: { children: React.ReactNode }) => {
  return (
    <EmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </EmotionCacheProvider>
  );
};

export default ThemeRegistry;
