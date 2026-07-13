# Figma Assignment — React

A responsive React landing page built with Vite for the internship assignment.

## Stack

- **React 19** + **Vite** (JSX, no TS)
- Plain CSS with custom properties (light theme, mobile-first responsive)
- Fonts: DM Serif Display + Inter (Google Fonts)
- Zero UI libraries — everything hand-built

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Structure

```
src/
├── App.jsx              # page shell + IntersectionObserver reveal wiring
├── App.css              # component styles
├── index.css            # design tokens, typography, buttons
└── components/
    ├── Header.jsx       # sticky nav with smooth-scroll + mobile menu
    ├── Hero.jsx         # headline with animated accent + CTAs
    ├── About.jsx        # two-column about section
    ├── Progress.jsx     # approach section with SVG decorations
    ├── Offerings.jsx    # 3-item accordion list
    ├── Testimonial.jsx  # quote card with dot navigation
    ├── Newsletter.jsx   # email form with client-side validation
    └── Footer.jsx       # 4-column footer with social icons
```

## Working interactions

- **Sticky header** — adds a hairline border once scrolled.
- **Smooth-scroll nav** — jumps to sections via anchor links (desktop & mobile).
- **Mobile menu** — animated burger toggle under 860px.
- **Hero CTAs** — scroll to `#offer` / `#stories`.
- **Offer accordion** — click a row to expand its detail.
- **Testimonial dots** — swap between three quotes.
- **Newsletter form** — validates email format, shows success/error message.
- **Hover states** — buttons, offer rows, nav links, socials.
- **Reveal-on-scroll** — subtle fade-up via IntersectionObserver; respects `prefers-reduced-motion`.

## Responsive breakpoints

- ≤ 520px — footer stacks to single column
- ≤ 780px — About / Progress / Offer head stack; offer rows tighten
- ≤ 860px — Nav collapses to hamburger menu
- ≤ 900px — Footer grid drops to 2 columns

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. On [vercel.com](https://vercel.com/new), import the repo.
3. Vercel auto-detects Vite. Keep defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy — you get a live URL like `figma-assignment-<hash>.vercel.app`.

Or via CLI:

```bash
npm i -g vercel
vercel        # follow prompts (first time)
vercel --prod # ship a production deploy
```
