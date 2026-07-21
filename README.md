# The Wild Oasis — Website (TypeScript Refactor)

A customer-facing booking website for a boutique cabin-rental business, originally built in Jonas Schmedtmann's advanced React/Next.js course and refactored here into full TypeScript.

**Live demo:** https://the-wild-oasis-website-oraby.vercel.app/

## What This Is

The Wild Oasis lets guests browse available cabins, view details and pricing, sign in, and book a stay. This version takes the original JavaScript project and rebuilds it with a fully typed codebase.

## What I Did

- Followed Jonas Schmedtmann's course to build the original Next.js (App Router) version of the site.
- Refactored the entire codebase from JavaScript to **TypeScript**, adding types for:
  - Supabase database tables and query responses
  - Server actions and their inputs/outputs
  - Component props and shared utility functions
  - NextAuth session and callback types
- Fixed type errors surfaced during the migration and tightened up data flow between server and client components.
- Deployed the finished app to **Vercel**.

## Tech Stack

- **Next.js** (App Router, Server Components, Server Actions)
- **TypeScript**
- **Supabase** (Postgres database + Auth + Storage)
- **NextAuth (Auth.js)** for authentication
- **Tailwind CSS** for styling
- **React Hook Form** for forms
- **Vercel** for deployment

## What I Learned

- How to add TypeScript to an existing App Router project without breaking server/client component boundaries.
- Typing async server actions and Supabase queries so errors surface at compile time instead of runtime.
- Better understanding of how Next.js Server Components and Server Actions interact with a typed data layer.
- General confidence reading and fixing TS errors in a real, non-trivial codebase rather than a toy project.

## Author

Built and refactored by **Oraby**.
