"use client";

import Box from "@mui/material/Box";
import Link from "next/link";
import React from "react";

interface LinkProps {
  linkData: { linkTitle: string; link: string };
  refCallback?: (el: HTMLDivElement | null) => void;
}

const CustomLink = ({ linkData, refCallback }: LinkProps) => {
  return (
    <Box
      ref={refCallback}
      className="linkBackground linkItem"
      sx={{
        position: "relative",
        padding: "0.9rem 1rem",
        borderRadius: "12px",
        marginBottom: "0.75rem",
        userSelect: "none",
        transition:
          "transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-1px)",
          boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
          backgroundColor: "#3a3a3a",
        },
        "&:active": {
          transform: "translateY(0)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        },
        "&:focus-within": {
          outline: "2px solid #00b4d8",
          outlineOffset: "2px",
        },
      }}
    >
      <span className="sheen" aria-hidden />

      <Link
        href={linkData.link}
        target="_blank"
        aria-label={linkData.linkTitle}
        style={{
          display: "block",
          textDecoration: "none",
          color: "#fff",
          fontWeight: 600,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial",
          lineHeight: 1,
        }}
      >
        {/* wrapper per SplitType */}
        <span className="js-split">{linkData.linkTitle}</span>
      </Link>
    </Box>
  );
};

export default CustomLink;