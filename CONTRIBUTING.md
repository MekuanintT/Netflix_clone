# Contributing Guide

Thanks for working on Netflix Clone. Follow this workflow so the project stays clean and reviewable as the team grows.

## 1. Branch Naming

Always branch off `main`. Use the task ID from `TASKS.md` in the branch name:

```
feature/T-07-header-scroll-background
fix/T-14-hover-card-overflow
chore/T-05-css-reset
```

Format: `<type>/<task-id>-<short-kebab-description>`

Types: `feature`, `fix`, `chore`, `refactor`, `docs`, `style`

## 2. Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(header): add scroll-aware background transition
fix(moviecard): correct hover preview positioning on tablet
chore(deps): add swiper and lucide-react
```

## 3. Before You Push

- [ ] Code runs locally with `npm run dev` — no console errors
- [ ] No secrets (API keys) committed — check `.env` is gitignored
- [ ] Styles are scoped via CSS Modules, no leaking global class names
- [ ] Component matches the linked design reference, if one exists in the task

## 4. Opening a Pull Request

1. Push your branch and open a PR against `main`.
2. Fill out the PR template completely (link the task ID).
3. Request at least **one review** from another team member before merging.
4. Squash-merge once approved — keeps `main` history readable.

## 5. Task Workflow

Each task in `TASKS.md` maps to one GitHub Issue. Move it across the Project board as you work:

`Backlog → In Progress → In Review → Done`

Assign yourself to an issue before starting it, so two people don't duplicate work.

## 6. Code Style

- Functional components + hooks only
- One component per file, colocated with its `.module.css`
- Keep API calls inside `src/Utility/` — components should not call axios directly with raw URLs
