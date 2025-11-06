"use client";

import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { gsap } from "gsap";
import SplitType from "split-type";
import CustomLink from "./CustomLink";

const links = [
  { linkTitle: "GitHub", link: "https://github.com/simonecontidev" },
  { linkTitle: "Codepen", link: "https://codepen.io/simonecontidev" },
  { linkTitle: "LinkedIn", link: "https://www.linkedin.com/in/simonecontidev/" },
  { linkTitle: "Mail", link: "mailto:simonecontisid@gmail.com" },
];

export default function Card() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<HTMLDivElement[]>([]);
  const splitsRef = useRef<SplitType[]>([]);
  const hoverCleanup = useRef<Array<() => void>>([]);

  const setLinkRef = (el: HTMLDivElement | null, i: number) => {
    if (el) linkRefs.current[i] = el;
  };

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      // Fade-in-up della card
      gsap.from(cardRef.current, {
        y: 16,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      // Per ogni link -> split + fade-in-up + chars stagger
      linkRefs.current.forEach((el, i) => {
        const target = el.querySelector<HTMLElement>(".js-split");
        if (!target) return;

        const split = new SplitType(target, { types: "chars" });
        splitsRef.current.push(split);

        gsap.from(el, {
          y: 12,
          opacity: 0,
          duration: 0.45,
          ease: "power2.out",
          delay: 0.15 + i * 0.08,
        });

        gsap.from(split.chars, {
          y: 14,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.015,
          delay: 0.22 + i * 0.08,
        });

        // Hover “wave” leggero sui chars
        const onEnter = () => {
          gsap.fromTo(
            split.chars,
            { y: 0 },
            { y: -4, duration: 0.18, ease: "power1.out", stagger: 0.01, yoyo: true, repeat: 1 }
          );
        };
        el.addEventListener("mouseenter", onEnter);
        const remove = () => el.removeEventListener("mouseenter", onEnter);
        hoverCleanup.current.push(remove);
      });
    });

    return () => {
      ctx.revert();
      // cleanup listeners
      hoverCleanup.current.forEach((fn) => fn());
      hoverCleanup.current = [];
      // cleanup split
      splitsRef.current.forEach((s) => s.revert());
      splitsRef.current = [];
    };
  }, []);

  return (
    <Box
      ref={cardRef}
      sx={{
        width: "100%",
        maxWidth: 460,
        borderRadius: 2,
        p: 2,
        textAlign: "center",
        backgroundColor: (t) => t.palette.background.paper,
        border: (t) => `1px solid ${t.palette.divider}`,
        boxShadow: (t) =>
          t.palette.mode === "dark"
            ? "0 2px 12px rgba(0,0,0,0.25)"
            : "0 8px 24px rgba(0,0,0,0.08)",
      }}
    >
      <Box
        sx={{
          width: 88,
          height: 88,
          borderRadius: "50%",
          overflow: "hidden",
          mx: "auto",
          mb: 2,
          border: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Image
          src="/portrait.jpg"
          alt="Simone Conti portrait"
          width={88}
          height={88}
          priority
        />
      </Box>

      <Typography component="h1" sx={{ fontSize: "1.25rem", fontWeight: 600 }}>
        Simone Conti
      </Typography>
      <Typography sx={{ color: (t) => t.palette.text.secondary, mt: 0.5 }}>
        Barcelona, Spain
      </Typography>
      <Typography sx={{ fontSize: "1rem", mt: 0.5, mb: 1.5 }}>
        Front-end Developer blending code with creative interaction
      </Typography>

      <nav aria-label="Social links">
        {links.map((item, i) => (
          <CustomLink key={item.linkTitle} linkData={item} refCallback={(el) => setLinkRef(el, i)} />
        ))}
      </nav>
    </Box>
  );
}