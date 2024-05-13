This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Structure

### Top-Level Directory: /fitness-finesse

#### /app

- **Purpose**: Contains all Next.js pages and API routes.
- **Contents**:
  - `/api`: API routes handling backend logic.
    - `auth.ts`: Authentication routes.
    - `workouts.ts`: CRUD operations for workout management.
  - `_app.tsx`: Custom App component, setups up page transitions and layout.
  - `index.tsx`: Home page of the application.
  - `dashboard.tsx`: User dashboard displaying workout logs and progress.

#### /public

- Contains static files like images and fonts.

#### /styles

- Stores global style files, CSS or Sass.

#### /components

- React components used throughout the application.
  - `Layout.tsx`: Main layout component that wraps around the app.
  - `Navbar.tsx`: Navigation bar for easy navigation across the application.

#### /lib

- Reusable libraries and utilities.
  - `dbConnect.ts`: Utility for MongoDB connection handling.
  - `session.ts`: Manages user sessions.

#### /models

- Mongoose models for structuring MongoDB documents.
  - `userModel.ts`: Schema definition for users.
  - `workoutModel.ts`: Schema definition for workouts.

#### /hooks

- Custom React hooks for shared logic across components.

#### /context

- React context for state management across components, if needed.

#### Configuration and Miscellaneous Files

- `.env.local`: Stores environment variables locally, not tracked by Git.
- `next.config.js`: Configuration for Next.js features.
- `tsconfig.json`: Configuration file for TypeScript compiler options.
- `package.json`: Manages project dependencies and scripts.
- `README.md`: Detailed documentation of the project setup and instructions.
