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
  - `/dashboard`
    - `layout.tsx` - dashboard and children's layout
    - `page.tsx` - dashboard page
    - `/workout`
      - `page.tsx`
    - `/logger`
      - `page.tsx`
    - `/motivation`
      - `page.tsx`
    - `/planner`
      - `page.tsx`
  - `/sign-in` - sign in page
    - `[[...sign-in]]`
      - `page.tsx`
  - `/sign-up` - sign up page
    - `[[...sign-up]]`
      - `page.tsx`
  - `layout.tsx` - landing page layout
  - `page.tsx` - landing page
  - `globals.css` - for the VERY RARE case that we need manual CSS, tailwind should handle all of our cases though

#### /public

- Contains static files like images and fonts.

#### /components

- `/common` - this is where common components that can be used anywhere can be stored. For example, buttons.
- `/features` - this is where components that are used in a specific feature could be created
- `/layout` - these are components specific to layout such as the NavBar or a Header

#### /lib

- Reusable libraries and utilities usually in the context of the DataBase.
  - `dbConnect.ts`: Utility for MongoDB connection handling.

#### /models

- Mongoose models for structuring MongoDB documents.
  - `userModel.ts`: Schema definition for users.
  - `workoutModel.ts`: Schema definition for workouts.

#### Configuration and Miscellaneous Files

- `.env.local`: Stores environment variables locally, not tracked by Git.
- `next.config.js`: Configuration for Next.js features.
- `tsconfig.json`: Configuration file for TypeScript compiler options.
- `package.json`: Manages project dependencies and scripts.
- `README.md`: Detailed documentation of the project setup and instructions.
- `middleware.ts`: Specific

## Schemas

- `User.ts`: A user profile
- `Exercise.ts`: Specific exercise from WGER
- `WorkoutLog.ts`: An entire workout log for a specific day
- `Workout.ts`: A specific workout within a workout log. For example, Bench press for 4 sets for 5 reps
