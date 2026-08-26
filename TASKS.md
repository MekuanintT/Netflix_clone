# Master Task List — Netflix Clone

Each task below should become one GitHub Issue using the **Build Task** template, labeled with its milestone, and tracked on the Project board (`Backlog → In Progress → In Review → Done`).

## Milestone 1: Foundation — ✅ Complete (Mekuanint)

- [x] **T-01 — Project Scaffolding & Dependencies** — *Mekuanint*
- [x] **T-02 — Asset Organization & Static Data** — *Mekuanint*
- [x] **T-03 — TMDB API Key & Environment Setup** — *Mekuanint*
- [x] **T-04 — Axios Instance & Request Endpoints** — *Mekuanint*
- [x] **T-05 — Global Theme & Base Styles** — *Mekuanint*
- [x] **T-06 — App Layout Shell & Router** — *Mekuanint*

## Milestone 2: Header & Footer

- [ ] **T-07 — Header & Scroll-Aware Background** — *Yonatan Fekadu*
  Fixed header with logo + nav links; background transitions transparent → solid on scroll.
  *Design: `Resources/Designs/1.HeaderWithoutDropDown.png`*
  Branch: `feature/T-07-header-scroll-background`

- [ ] **T-08 — Header Search, Notifications & Profile Dropdown** — *Yonatan Fekadu*
  Expandable search toggle, notification badge, profile dropdown.
  *Design: `2.HeaderWithSearchIconExpanded.png`, `3.HeaderWithDropDown.png`*
  Branch: `feature/T-08-header-search-dropdown`

- [ ] **T-09 — Responsive Footer Component** — *Sosi*
  Social icons, multi-column links grid with hover states, copyright info.
  *Design: `6.Footer.png`*
  Branch: `feature/T-09-footer`

## Milestone 3: Banner

- [ ] **T-10 — Banner Data Fetching & Random Selection** — *Ermi*
  Fetch Netflix Originals on mount, randomly select one, save to state.
  Branch: `feature/T-10-banner-data-fetching`

- [ ] **T-11 — Banner UI & Gradient Overlay** — *Ermi*
  Backdrop image, title, truncated description, Play/My List buttons, bottom fade gradient.
  *Design: `4.BannerWithHeader.png`*
  Branch: `feature/T-11-banner-ui-gradient`

## Milestone 4: Rows & Cards

- [ ] **T-12 — Multi-Category Parallel Fetching** — *Ibrahim*
  Fetch all genre categories concurrently via `Promise.all` in `DisplayRow.jsx`.
  Branch: `feature/T-12-displayrow-parallel-fetch`

- [ ] **T-13 — SlideShow Swiper Carousel** — *Damtew*
  Reusable Swiper carousel with hover-reveal navigation arrows.
  *Design: `5.Row.png`*
  Branch: `feature/T-13-swiper-carousel`

- [ ] **T-14 — MovieCard Component & Hover Preview** — *Yordanos*
  Poster cards that expand on hover: preview details, action buttons (play/add/like/info), metadata, genres.
  *Design: `5HoverEffectOnCard.png`*
  Branch: `feature/T-14-moviecard-hover-preview`

## Milestone 5: Polish

- [ ] **T-15 — Responsive Layout & Mobile Navigation** — *Mekuanint*
  Media queries across header, banner, and rows for tablet/mobile.
  Branch: `feature/T-15-responsive-mobile`

- [ ] **T-16 — CSS Modules Audit & Animation Polish** — *Mekuanint*
  Scoped styling consistency, clean class naming, smooth transitions across all interactive components.
  Branch: `feature/T-16-css-audit-polish`

---

### Dependency Notes
- T-04 must be done before T-10 and T-12 (both need the Axios instance). ✅ Done.
- T-07/T-08 (Yonatan) should land before T-11 (Ermi) — banner sits under the header.
- T-13 (Damtew) must exist before T-14 (Yordanos) is wired into rows.
- T-12 (Ibrahim) and T-13 (Damtew) are closely related — sync early, or Ibrahim stubs a placeholder row while Damtew builds the carousel.
- T-15/T-16 (Mekuanint) should be done last, after all UI components exist.