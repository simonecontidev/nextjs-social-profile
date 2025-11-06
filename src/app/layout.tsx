import type { Metadata } from "next";
import "./globals.css";
import ColorModeProvider from "@/theme/ColorModeProvider";

export const metadata: Metadata = {
  title: "Social Profile",
  description: "Minimal profile with links",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ColorModeProvider>{children}</ColorModeProvider>
      </body>
    </html>
  );
}