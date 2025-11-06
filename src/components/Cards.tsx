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

const Card = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<HTMLDivElement[]>([]);
  const splitsRef = useRef<SplitType[]>([]);
  const hoversRef = useRef<Array<() => void>>([]);

  const setLinkRef = (el: HTMLDivElement | null, i: number) => {
    if (el) linkRefs.current[i] = el;
  };

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleans: Array<() => void> = [];

    if (reduced) return;

    const ctx = gsap.context(() => {
      // 1) Fade-in-up della card
      gsap.from(cardRef.current, {
        y: 16,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      // 2) Per ogni link: split + fade-in-up + chars stagger
      linkRefs.current.forEach((el, i) => {
        const target = el.querySelector<HTMLElement>(".js-split");
        if (!target) return;

        const split = new SplitType(target, { types: "chars" });
        splitsRef.current.push(split);

        // fade-in-up del bottone (contenitore)
        gsap.from(el, {
          y: 12,
          opacity: 0,
          duration: 0.45,
          ease: "power2.out",
          delay: 0.15 + i * 0.08,
        });

        // apparizione dei chars con delay leggermente dopo il contenitore
        gsap.from(split.chars, {
          y: 14,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.015,
          delay: 0.22 + i * 0.08,
        });

        // 3) Hover “wave” molto leggero sui chars
        const onEnter = () => {
          gsap.fromTo(
            split.chars,
            { y: 0 },
            {
              y: -4,
              duration: 0.18,
              ease: "power1.out",
              stagger: 0.01,
              yoyo: true,
              repeat: 1,
            }
          );
        };

        el.addEventListener("mouseenter", onEnter);
        const remove = () => el.removeEventListener("mouseenter", onEnter);
        hoversRef.current.push(remove);
        cleans.push(remove);
      });
    });

    return () => {
      ctx.revert();
      // cleanup degli event listeners
      hoversRef.current.forEach((fn) => fn && fn());
      hoversRef.current = [];
      // revert degli split
      splitsRef.current.forEach((s) => s.revert());
      splitsRef.current = [];
      // eventuali altre cleanups
      cleans.forEach((c) => c());
    };
  }, []);

  return (
    <Box
      ref={cardRef}
      className="cardBackground"
      sx={{
        width: "100%",
        maxWidth: 440,
        borderRadius: "16px",
        padding: "1.25rem",
        textAlign: "center",
        boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Box
        sx={{
          width: 88,
          height: 88,
          borderRadius: "50%",
          overflow: "hidden",
          margin: "0 auto 1rem",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Image
          src="/profile.jpeg"
          alt="Simone Conti portrait"
          width={88}
          height={88}
          priority
        />
      </Box>

      <Typography component="h1" sx={{ fontSize: "1.25rem", fontWeight: 600 }}>
        Simone Conti
      </Typography>
      <Typography sx={{ color: "#9f9f9f", marginTop: "0.25rem" }}>
        Barcelona, Spain
      </Typography>
      <Typography sx={{ fontSize: "1rem", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
        Front-end Developer blending code with creative interaction
      </Typography>

      <nav aria-label="Social links">
        {links.map((item, i) => (
          <CustomLink
            key={item.linkTitle}
            linkData={item}
            refCallback={(el) => setLinkRef(el, i)}
          />
        ))}
      </nav>
    </Box>
  );
};

export default Card;