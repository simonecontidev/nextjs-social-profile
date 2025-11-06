"use client";

import Box from "@mui/material/Box";
import React from "react";
import Card from "../components/Cards";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main>
      <ThemeToggle />
      <Box
        component="section"
        aria-label="Profile links"
        sx={{
          minHeight: "100svh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
        }}
      >
        <Card />
      </Box>
    </main>
  );
}