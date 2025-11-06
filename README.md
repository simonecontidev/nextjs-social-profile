# 🌗 Next.js Social Profile — Animated Light/Dark Card

A minimalist **personal profile card** built with **Next.js 15 (App Router)**, **MUI**, and **GSAP**, featuring animated entry transitions, text splitting, and light/dark mode toggle.

![screenshot](public/preview.jpg)

---

## ✨ Overview

This project is a clean, hiring-ready example of modern front-end engineering and design detail.

It showcases:

- **GSAP** for entrance and hover animations
- **SplitType** for dynamic text reveals
- **MUI (Material UI)** for component design and theming
- **Responsive Light/Dark Mode** with persistent toggle
- **Accessible, semantic layout** built on the App Router

Everything is coded to be elegant yet minimal — no bloat, just expressive front-end craft.

---

## 🧠 Why it matters

As a hiring example, this repo demonstrates:

- Mastery of **React + Next.js 15** client components
- Modern **animation practices** (GSAP timelines, prefers-reduced-motion respect)
- Thoughtful **UX micro-interactions**
- **Theme integration** (MUI palette tokens, CssBaseline, responsive mode)
- Clean and readable **TypeScript-based code structure**

> It’s the kind of small but polished piece that shows taste, attention to motion, and solid technical fundamentals — perfect for portfolio submissions or interview discussions.

---

## 🛠️ Tech Stack

| Category   | Tool / Library                  |
| ---------- | ------------------------------- |
| Framework  | **Next.js 15 (App Router)**     |
| UI System  | **MUI v6**                      |
| Animations | **GSAP**, **SplitType**         |
| Language   | **TypeScript**                  |
| Icons      | **@mui/icons-material**         |
| Styling    | **MUI SX System + globals.css** |
| Build      | **Turbopack**                   |

---

## ⚙️ Setup

Clone and install dependencies:

```bash
git clone https://github.com/YOURUSERNAME/nextjs-social-profile.git
cd nextjs-social-profile
npm install
npm run dev

Then open http://localhost:3000￼.
```

---

## 💡 Features

🎬 GSAP + Split Animations
• Smooth fade-in-up entrance for the card and links
• SplitType text animation with staggered characters
• Subtle hover wave effect on each button

🌓 Light/Dark Mode
• Built with MUI’s theme system
• Toggle button (Brightness4 / Brightness7 icons)
• Persistent mode via localStorage + media query fallback

🧩 Components
• Card.tsx → Animated personal card with avatar and social links
• CustomLink.tsx → Animated buttons with sheen + text split
• ColorModeProvider.tsx → Handles theme persistence and toggle logic
• ThemeToggle.tsx → Floating icon toggle (top-right corner)

    ---

## Extending It

    •	Add Framer Motion or Lenis for smooth scroll experiences
    •	Integrate Next SEO metadata for sharing your portfolio
    •	Replace avatar and links with your own data
    •	Convert it into a reusable <ProfileCard /> component for a larger app

        ---

## Author

Simone Conti
Front-End Developer & Creative Technologist
Portfolio → simoneconti.work￼
LinkedIn → linkedin.com/in/simonecontidev￼
GitHub → simonecontidev￼

---

## License

MIT License — free to use and adapt for educational or portfolio purposes.
