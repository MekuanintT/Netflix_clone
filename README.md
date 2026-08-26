# 🎬 Netflix Clone

A pixel-faithful Netflix frontend clone built with **React + Vite**, powered by the **TMDB API**. Includes a scroll-aware header, hero banner, genre carousels, hover-preview movie cards, and full responsive layout.

![Status](https://img.shields.io/badge/status-in--development-yellow)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📖 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Task Board & Roadmap](#task-board--roadmap)
- [Contributing](#contributing)
- [Team](#team)
- [License](#license)

---

## Overview

This project recreates the core Netflix browsing experience:

- Fixed header with logo, nav links, search, notifications, and profile dropdown
- Hero banner with randomly featured Netflix Original
- Multiple genre rows fetched concurrently from TMDB
- Swiper-based carousels with hover navigation arrows
- Movie cards with hover-expand preview, action buttons, and metadata
- Fully responsive across desktop, tablet, and mobile

## Tech Stack

| Layer            | Tools |
|-------------------|-------|
| Framework          | React + Vite |
| Routing            | react-router-dom |
| HTTP               | axios |
| Carousel           | swiper |
| Icons              | lucide-react, react-icons |
| Data Source        | [TMDB API](https://www.themoviedb.org/documentation/api) |
| Styling            | CSS Modules |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/MekuanintT/Netflix_clone.git
cd Netflix_clone
npm install
```

### Run the dev server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Environment Variables

Create a `.env` file in the project root (never commit this file — it's already covered in `.gitignore`):

```
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

Get a free API key from [TMDB](https://www.themoviedb.org/settings/api).

## Project Structure

```
src/
├── assets/
│   └── image/          # Logo, fallback banner, static images
├── Data/
│   └── Data.js          # Static movie/category data
├── Utility/
│   ├── MovieInstance.js # Shared Axios instance (TMDB base URL)
│   └── requestUrls.js   # Category endpoint definitions
├── components/          # Header, Banner, DisplayRow, MovieCard, Footer, etc.
├── index.css            # Global reset + dark theme
├── App.jsx
└── main.jsx
```

## Task Board & Roadmap

The full build is broken into 16 tracked tasks (T-01 → T-16), covering scaffolding, TMDB integration, header/banner/row/card UI, and responsive polish. See [`TASKS.md`](./TASKS.md) for the complete breakdown, or the [Project board](../../projects) for live status.

## Contributing

Team members: please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) before opening a branch or PR — it covers branch naming, commit conventions, and the review process.

## Team

Built collaboratively by our team — everyone owns a piece of this project.

| Name | Role | Working On |
|------|------|------|
| **Mekuanint T.** | Lead / Coordination | Setup, environment, architecture, final QA & polish |
| **Yonatan Fekadu** | Frontend Engineer | Header |
| **Ermi** | Frontend Engineer | Banner |
| **Ibrahim** | Frontend Engineer | Display / Row Fetching |
| **Damtew** | Frontend Engineer | Slideshow / Carousel |
| **Yordanos** | Frontend Engineer | Movie Card |
| **Sosi** | Frontend Engineer | Footer |

See [`TEAM.md`](./TEAM.md) for how we work together and [`TASKS.md`](./TASKS.md) for the full task breakdown.

## License

MIT — see [`LICENSE`](./LICENSE).