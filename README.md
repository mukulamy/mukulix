# Mukulix — Windows Setup

## Prerequisites
- [Node.js 18+](https://nodejs.org/) (LTS recommended)

## Install & Run

```bash
# Install dependencies
npm install

# Start dev server → opens at http://localhost:5173
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Notes
- No environment variables needed — just install and run.
- The `src/` folder contains all the React components.
- Styling uses Tailwind CSS v4 (via `@tailwindcss/vite` plugin).
