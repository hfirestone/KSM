# KSM – Keucheyan Sports Management Website

A full Next.js 14 website for KSM built with the App Router, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** – Barlow & Barlow Condensed (via `next/font/google`)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
ksm-website/
├── app/
│   ├── layout.tsx       # Root layout with fonts & metadata
│   ├── page.tsx         # Main page composing all sections
│   └── globals.css      # Global styles & reveal animations
├── components/
│   ├── Navbar.tsx        # Fixed nav with scroll-aware active links
│   ├── Hero.tsx          # Hero section with stats & CTAs
│   ├── About.tsx         # About + service pillars
│   ├── Services.tsx      # Team member cards
│   ├── Clients.tsx       # Professional clients roster
│   ├── Testimonials.tsx  # Client quotes
│   ├── Marketing.tsx     # Marketing description
│   ├── Financial.tsx     # Financial & tax planning
│   ├── Contact.tsx       # Contact cards for all 3 team members
│   ├── Footer.tsx        # Footer with slogan
│   ├── SectionHeader.tsx # Reusable section header component
│   └── useReveal.ts      # Scroll-reveal IntersectionObserver hook
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

### Or deploy via the Vercel dashboard

Push to GitHub, then import at [vercel.com](https://vercel.com).

## Customization

- **Colors** – edit CSS variables in `app/globals.css` (`:root`)
- **Content** – all data is inline in each component, easy to update
- **Images** – add player/team photos to `/public` and use `next/image` in the Clients or Hero sections
- **Contact form** – add a `<form>` in `Contact.tsx` and wire up to a service like Resend, Formspree, or your own API route at `app/api/contact/route.ts`
