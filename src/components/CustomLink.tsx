"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Link from "next/link";

interface LinkProps {
  linkData: { linkTitle: string; link: string };
  refCallback?: (el: HTMLDivElement | null) => void;
}

export default function CustomLink({ linkData, refCallback }: LinkProps) {
  return (
    <Box
      ref={refCallback}
      sx={{
        position: "relative",
        borderRadius: 1.5,
        mb: 1,
        userSelect: "none",
        cursor: "pointer",
        overflow: "hidden",
        isolation: "isolate",
        p: "0.9rem 1rem",
        color: "inherit",
        backgroundColor: (t) =>
          t.palette.mode === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
        transition:
          "transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease",
        "&:hover": {
          transform: "translateY(-1px)",
          backgroundColor: (t) =>
            t.palette.mode === "dark" ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.06)",
          boxShadow: (t) =>
            t.palette.mode === "dark"
              ? "0 6px 18px rgba(0,0,0,0.35)"
              : "0 8px 20px rgba(0,0,0,0.12)",
        },
        "&:active": {
          transform: "translateY(0)",
          boxShadow: (t) =>
            t.palette.mode === "dark"
              ? "0 4px 12px rgba(0,0,0,0.25)"
              : "0 6px 14px rgba(0,0,0,0.10)",
        },
        "&:focus-within": {
          outline: (t) => `2px solid ${t.palette.primary.main}`,
          outlineOffset: 2,
        },
        // sheen
        "& .sheen": {
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          transform: "translateX(-120%)",
          transition: "transform 700ms ease",
          zIndex: 0,
          background: (t) =>
            t.palette.mode === "dark"
              ? "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 60%, transparent 100%)"
              : "linear-gradient(120deg, transparent 0%, rgba(0,0,0,0.04) 40%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.04) 60%, transparent 100%)",
        },
        "&:hover .sheen": { transform: "translateX(120%)" },
      }}
    >
      <span className="sheen" aria-hidden />

      <Link
        href={linkData.link}
        target="_blank"
        aria-label={linkData.linkTitle}
        style={{
          position: "relative",
          display: "block",
          textDecoration: "none",
          color: "inherit",
          fontWeight: 600,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          lineHeight: 1,
        }}
      >
        <span className="js-split">{linkData.linkTitle}</span>
      </Link>
    </Box>
  );
}