# Compalist Client

Frontend for Compalist, a platform for companies to publish listings and for users to rate and comment on them.

## About
Compalist lets users search companies, submit ratings and suggestions, and lets admins moderate content through a dedicated dashboard. Built 2024-09 to 2024-10.

## Features
- User dashboard with ratings, suggestions and contact flows
- Admin dashboard for moderation
- Company search and detail pages
- Auth flow with token-based API requests
- Blog section

## Tech stack
- React 18 + TypeScript, Vite
- Redux Toolkit with redux-persist
- TanStack Query, Axios
- Tailwind CSS, Preline UI components
- Deployed on Vercel

## Architecture
```
src/
  api/          axios client and endpoint modules (auth, blog, company, rating, stats)
  components/   admin dashboard, user dashboard, home, shared/global
  layouts/      route layouts (admin, auth, home, user)
  pages/        route pages
  redux/        store and user slice
  routes/       route definitions
```

## Getting started
```
yarn install
yarn dev
```
Uses `NODE_ENV` to switch the API base URL between local dev (`/`, proxied) and production (`https://www.compalist.app`).

## Status
Sleeping (no recent commits).

## Related projects
- https://github.com/tolgazorlu/compalist-server

## Live
https://www.compalist.app
