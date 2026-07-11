# Deluxe Kutz Barber Lounge — Website

Static marketing website for **Deluxe Kutz Barber Lounge**, La Crosse, WI.
Built with React + Vite + Tailwind CSS. No backend. Deploys as plain HTML/CSS/JS.

---

## What is a README?

A README is a plain-text document that lives in the project folder. It explains what the
project is, how to run it, and how to make changes. If you ever hand this project to
someone else — a developer, a hosting service, or yourself a year from now — this file
tells them everything they need to know to get started.

---

## Getting Started

**Requirements:** Node.js installed on your computer (nodejs.org).

```bash
# 1. Open a terminal in this folder, then install packages (one time only):
npm install

# 2. Start the live preview in your browser:
npm run dev
```

The site opens at `http://localhost:5173`. Any file you save auto-refreshes the browser.

```bash
# Build a production-ready copy of the site (creates a /dist folder):
npm run build
```

---

## Project Structure

```
barbershop/
├── public/
│   └── images/          <- All photos go here (.webp format)
│       ├── hero-bg.webp
│       ├── shop-1.webp
│       ├── shop-2.webp
│       ├── logo.webp
│       ├── cut-1.webp … cut-5.webp
│       ├── reel-1.webp  reel-2.webp  reel-3.webp
│       ├── before-1.webp  before-2.webp
│       └── after-1.webp   after-2.webp
│
├── src/
│   ├── config.js        <- THE MAIN FILE TO EDIT (phone, address, links, etc.)
│   ├── App.jsx          <- Controls which sections appear and in what order
│   ├── index.css        <- Global styles (colors, fonts, shared classes)
│   │
│   ├── components/
│   │   ├── Navbar.jsx        <- Top navigation bar
│   │   ├── Hero.jsx          <- Full-screen opening section
│   │   ├── About.jsx         <- "The Spot" section with shop photo + stats
│   │   ├── Services.jsx      <- Price list
│   │   ├── Gallery.jsx       <- 8-photo grid of cuts
│   │   ├── SocialShowcase.jsx  <- Instagram reels + Before/After photos
│   │   ├── Barbers.jsx       <- Barber profiles (currently hidden — see below)
│   │   ├── Reviews.jsx       <- Client testimonials
│   │   ├── Contact.jsx       <- Map + hours + contact info
│   │   ├── FinalCTA.jsx      <- Last "Book Now" call-to-action
│   │   └── Footer.jsx        <- Bottom of page
│   │
│   └── hooks/
│       └── useInView.js  <- Powers the scroll-in animations
│
├── index.html           <- Entry point (you rarely need to touch this)
├── tailwind.config.js   <- Color theme (gold, dark backgrounds)
├── vite.config.js       <- Build tool config
└── package.json         <- Project dependencies
```

---

## How to Customize

### 1. Change phone number, address, or social links

Open **`src/config.js`** — this is the single source of truth for all business info.
Change it once and it updates everywhere on the site.

```js
export const BUSINESS = {
  phone: '(555) 000-0000',     // <-- replace with real number
  address: '730 Rose St, La Crosse, WI 54603',
  instagram: 'https://www.instagram.com/deluxe_kutz',
  ...
}
```

### 2. Replace photos

Drop new `.webp` files into `public/images/` using the exact same filenames listed above.
The site picks them up automatically — no code changes needed.

To convert photos to .webp: use **squoosh.app** (free, browser-based).
Recommended settings: WebP format, quality 80, width ~1200px for shop/gallery shots.

### 3. Add a new service or change a price

Open **`src/components/Services.jsx`** and edit the `SERVICES` array near the top.

### 4. Update the Instagram reels

Open **`src/config.js`** and replace the URLs in `INSTAGRAM_REELS`.
Also swap out `reel-1.webp`, `reel-2.webp`, `reel-3.webp` in `public/images/` with
screenshots of the new reels.

### 5. Replace the fake reviews with real ones

Open **`src/components/Reviews.jsx`** and edit the `REVIEWS` array at the top.
Copy real client quotes from Booksy and paste them in. Each review needs:
`name`, `rating`, `date`, `text`, `initials`, and a `color` (Tailwind class).

---

## What Still Needs to Be Filled In

| Item | Where to change |
|------|----------------|
| Real phone number | `src/config.js` → `BUSINESS.phone` |
| Barber 1 real name + photo | `src/components/Barbers.jsx` → `BARBERS[0]` |
| Barber 2 real name, photo, Booksy link, Instagram | `src/components/Barbers.jsx` → `BARBERS[1]` |
| Real barber photos | Add `barber-1.webp` and `barber-2.webp` to `public/images/` |
| Real client reviews | `src/components/Reviews.jsx` → `REVIEWS` array |
| Logo (cropped) | Replace `public/images/logo.webp` — use **photopea.com** to crop |

### Turn on the Barbers section

The Barbers section is currently hidden. To show it, open **`src/App.jsx`** and
remove the `{/*` and `*/}` comment tags around `<Barbers />`:

```jsx
{/* Remove these comment tags: */}
{/*<Barbers/>*/}

{/* Should become: */}
<Barbers />
```

---

## How to Put the Site Online (Deploy)

1. Run `npm run build` — this creates a `/dist` folder with the finished website files.
2. Upload the contents of `/dist` to any static host. Free options:
   - **Netlify** (netlify.com) — drag and drop the `/dist` folder
   - **Vercel** (vercel.com) — connect your GitHub or drag and drop
   - **GitHub Pages** — free hosting directly from a GitHub repository

The site has no server or database, so any of these options work perfectly.

---

## Tech Stack

| Tool | What it does |
|------|-------------|
| React 18 | Component-based UI |
| Vite 5 | Fast dev server + build tool |
| Tailwind CSS v3 | Utility-first styling |
| Booksy | External booking system (no custom booking needed) |
| Google Maps embed | Location map (no API key required) |
