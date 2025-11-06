"use client";

import * as React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ColorModeContext } from "@/theme/ColorModeProvider";
import { useTheme } from "@mui/material/styles";

export default function ThemeToggle({ sx }: { sx?: any }) {
  const { toggle } = React.useContext(ColorModeContext);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Tooltip title={isDark ? "Light mode" : "Dark mode"}>
      <IconButton
        onClick={toggle}
        color="inherit"
        sx={{
          position: "fixed",
          top: 12,
          right: 12,
          zIndex: 10,
          bgcolor: theme.palette.action.hover,
          "&:hover": { bgcolor: theme.palette.action.selected },
          ...sx,
        }}
        aria-label="Toggle color mode"
      >
        {isDark ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
}