# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## GitHub and Vercel Deployment

This project is ready to publish to GitHub and deploy on Vercel.

### 1. Initialize the repository locally

```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Create a GitHub repository

1. Open GitHub and create a new repository.
2. Add the remote URL and push:

```bash
git remote add origin https://github.com/<your-username>/<your-repo>.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel

1. Sign in to [Vercel](https://vercel.com).
2. Import the GitHub repository.
3. Vercel will detect the project as a static site.
4. If needed, use the following build settings:

- Build Command: `npm run build`
- Output Directory: `dist`

The included `vercel.json` file ensures Vercel builds the Vite app correctly and rewrites SPA routes to `index.html`.
