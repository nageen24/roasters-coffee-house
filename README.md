# Roasters Coffee House & Grill

A modern, full-featured restaurant website built with **Next.js 15** for Roasters Coffee House & Grill — a premium dining destination in Islamabad, Pakistan.

---

## Live Demo

Deployed on Vercel: [roasterscoffeehouse.vercel.app](https://roasterscoffeehouse.vercel.app)

---

## Features

- **Hero Section** — Full-screen image slider with overlay text and call-to-action buttons
- **About / Our Story** — Brand story with parallax background effects
- **Special Menu Section** — Tabbed menu preview with background parallax and PDF download
- **Reviews Carousel** — 3-card sliding carousel with real-style Google reviews
- **Why People Choose Us** — Interactive 3D flip cards with feature images
- **Opening Hours & Reservation** — Parallax section with reservation modal
- **Hi Tea Menu** — Full scrollable menu with sticky category navigation
- **Gallery** — Filterable image gallery with category tabs
- **Contact Page** — Map integration, dark-themed contact form
- **Cart Sidebar** — Slide-in cart with quantity controls and checkout
- **Global Reservation Modal** — Accessible from any page via the navbar
- **Page Loader** — Animated loading screen on page entry
- **Footer** — Links, social icons, newsletter, and opening hours

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with all sections |
| `/menu` | Full restaurant menu with filters |
| `/hi-tea` | Dedicated Hi Tea menu page |
| `/gallery` | Photo gallery with category filters |
| `/contact` | Contact form and map |
| `/cart` | Shopping cart page |
| `/shop` | Merchandise shop |
| `/coming-soon` | Placeholder for upcoming features |

---

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: JavaScript (JSX)
- **Styling**: Inline styles + Global CSS (CSS Variables)
- **State Management**: React Context API (`CartContext`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Google Fonts — Playfair Display, Lato
- **Deployment**: [Vercel](https://vercel.com/)

---

## Color Palette

| Name | Hex |
|------|-----|
| Gold Accent | `#C19D60` |
| Dark Background | `#292929` |
| Darker Section | `#212121` |
| Top Bar | `#1a1a1a` |
| White | `#ffffff` |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/nageen24/roasters-coffee-house.git
cd roasters-coffee-house
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Project Structure

```
roasters_coffee_house/
├── public/
│   ├── images/         # Restaurant images and assets
│   ├── feature-1.png   # Feature card images
│   ├── feature-2.png
│   └── feature-3.png
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── page.js     # Homepage
│   │   ├── layout.js   # Root layout
│   │   ├── globals.css # Global styles & CSS variables
│   │   ├── menu/       # Menu page
│   │   ├── hi-tea/     # Hi Tea page
│   │   ├── gallery/    # Gallery page
│   │   ├── contact/    # Contact page
│   │   ├── cart/       # Cart page
│   │   └── shop/       # Shop page
│   ├── components/     # Reusable UI components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── CartSidebar.js
│   │   ├── GlobalReservationModal.js
│   │   └── PageLoader.js
│   ├── context/        # React Context (cart state)
│   └── lib/            # Data & utilities (menuItems, restaurantInfo)
├── next.config.ts
└── package.json
```

---

## Restaurant Info

**Roasters Coffee House & Grill**  
F-6, Islamabad, Pakistan  
[Google Maps](https://www.google.com/maps/place/Roasters+Coffee+House+%26+Grill/@33.7305564,73.079177,17z)

---

## License

This project is built for Roasters Coffee House & Grill. All rights reserved.
