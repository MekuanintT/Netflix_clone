# Master Task List — Netflix Clone

Each task below should become one GitHub Issue using the **Build Task** template, labeled with its milestone, and tracked on the Project board (`Backlog → In Progress → In Review → Done`).

## Milestone 1: Foundation

- [ ] **T-01 — Project Scaffolding & Dependencies**
  Initialize React + Vite, install axios, react-router-dom, lucide-react, react-icons, swiper. Verify dev server runs.

- [ ] **T-02 — Asset Organization & Static Data**
  Place image assets in `src/assets/image/` (logo, fallback banner). Review `src/Data/Data.js` structure.

- [ ] **T-03 — TMDB API Key & Environment Setup**
  Obtain TMDB API key, set `VITE_TMDB_API_KEY` in `.env`, add `.env` to `.gitignore`.

- [ ] **T-04 — Axios Instance & Request Endpoints**
  Create shared Axios instance (`src/Utility/MovieInstance.js`) and category endpoints (`src/Utility/requestUrls.js`).

- [ ] **T-05 — Global Theme & Base Styles**
  Universal CSS reset and dark theme (black background, white text) in `src/index.css`.

- [ ] **T-06 — App Layout Shell & Router**
  Wrap app with `<BrowserRouter>` in `main.jsx`; assemble layout in `App.jsx`.

## Milestone 2: Header & Footer

- [ ] **T-07 — Header & Scroll-Aware Background**
  Fixed header with logo + nav links; background transitions transparent → solid on scroll.
  *Design: `Resources/Designs/1.HeaderWithoutDropDown.png`*

- [ ] **T-08 — Header Search, Notifications & Profile Dropdown**
  Expandable search toggle, notification badge, profile dropdown.
  *Design: `2.HeaderWithSearchIconExpanded.png`, `3.HeaderWithDropDown.png`*

- [ ] **T-09 — Responsive Footer Component**
  Social icons, multi-column links grid with hover states, copyright info.
  *Design: `6.Footer.png`*

## Milestone 3: Banner

- [ ] **T-10 — Banner Data Fetching & Random Selection**
  Fetch Netflix Originals on mount, randomly select one, save to state.

- [ ] **T-11 — Banner UI & Gradient Overlay**
  Backdrop image, title, truncated description, Play/My List buttons, bottom fade gradient.
  *Design: `4.BannerWithHeader.png`*

## Milestone 4: Rows & Cards

- [ ] **T-12 — Multi-Category Parallel Fetching**
  Fetch all genre categories concurrently via `Promise.all` in `DisplayRow.jsx`.

- [ ] **T-13 — SlideShow Swiper Carousel**
  Reusable Swiper carousel with hover-reveal navigation arrows.
  *Design: `5.Row.png`*

- [ ] **T-14 — MovieCard Component & Hover Preview**
  Poster cards that expand on hover: preview details, action buttons (play/add/like/info), metadata, genres.
  *Design: `5HoverEffectOnCard.png`*

## Milestone 5: Polish

- [ ] **T-15 — Responsive Layout & Mobile Navigation**
  Media queries across header, banner, and rows for tablet/mobile.

- [ ] **T-16 — CSS Modules Audit & Animation Polish**
  Scoped styling consistency, clean class naming, smooth transitions across all interactive components.

---

### Dependency Notes
- T-04 must be done before T-10 and T-12 (both need the Axios instance).
- T-07/T-08 should land before T-11 (banner sits under the header).
- T-13 must exist before T-14 is wired into rows.
- T-15/T-16 should be done last, after all UI components exist.
