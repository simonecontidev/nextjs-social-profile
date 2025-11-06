"use client";

import Box from "@mui/material/Box";
import React from "react";
import Card from "../components/Cards";

export default function Home() {
  return (
    <main>
      <Box
        component="section"
        aria-label="Profile links"
        sx={{
          backgroundColor: "#141414",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="container"
      >
        <Card />
      </Box>
    </main>
  );
}