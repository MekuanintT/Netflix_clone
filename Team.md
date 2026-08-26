# Team & Responsibilities

This is a team project — everyone is a contributor and co-owner of the codebase. Roles below reflect who's focused on what, not a hierarchy of ownership.

## Coordination

**Mekuanint T.**
Handles project setup, architecture, environment configuration, and repository standards. Coordinates final integration, responsive polish, and QA across all components before release.

- Tasks: T-01, T-02, T-03, T-04, T-05, T-06, T-15, T-16

## Contributors

| Name | Component | Focus |
|---|---|---|
| **Yonatan Fekadu** | Header | Navigation, scroll behavior, search, notifications, profile dropdown |
| **Ermi** | Banner | Hero section: data fetching, layout, gradient overlay |
| **Ibrahim** | Display | Category row data fetching and state management |
| **Damtew** | Slideshow | Swiper carousel component and navigation controls |
| **Yordanos** | Movie Card | Poster cards, hover preview, action buttons, metadata |
| **Sosi** | Footer | Social links, link grid, copyright section |

## How We Work Together

- Every task is tracked as a GitHub Issue and assigned to the person working on it (see `TASKS.md`).
- Work happens on a feature branch named after the task (`feature/T-XX-description`) — never directly on `main`.
- Every change ships through a Pull Request, reviewed by at least one other team member before merging.
- CI must pass (`npm run build`) before a PR is merged.
- Match the assigned design reference where one is provided.
- Cross-component dependencies (e.g. Movie Card depends on Slideshow) are flagged in `TASKS.md` — check dependencies before starting.

## Communication

Blockers, design questions, or dependency conflicts should be raised early — ideally as a comment on the relevant GitHub Issue, so context stays attached to the work and the whole team can see it.