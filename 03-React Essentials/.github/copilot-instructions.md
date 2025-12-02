<!--
Brief, actionable guidance for AI coding agents working in this folder.
Keep this file short (20-50 lines) and focused on discoverable project details.
-->
# Copilot / AI agent instructions — React Essentials (03-React Essentials)

- **Project purpose**: Small Vite + React 19 example showing core React concepts. Work happens in the `src/` folder and the app is mounted from `src/index.jsx`.

- **Entry points**: `index.html` loads `/src/index.jsx`. The root React component is the default export from `src/App.jsx` and is rendered with `ReactDOM.createRoot`.

- **Build & dev commands** (from `package.json`):
  - `npm run dev` : start Vite dev server (use this for iterative development).
  - `npm run build` : produce production bundles.
  - `npm run preview` : preview the production build (run after `build`).

- **Tooling**: Project uses Vite (`vite`) with `@vitejs/plugin-react` (see `vite.config.js`). Assume modern ESM + JSX handling.

- **Files & patterns to inspect** when changing behavior:
  - `src/index.jsx` — application bootstrap and render target (`#root`).
  - `src/App.jsx` — primary React component and examples of local components (`Header`).
  - `src/index.css` and `src/assets/` — styling and static assets used by components.

- **Notable code patterns & gotchas (explicit, discoverable)**:
  - Components are plain functions exported as `export default App;` (default export assumed by `index.jsx`).
  - Images are placed under `src/assets/`. Code currently references an image via a relative string path (`src/assets/react-core-concepts.png`) — confirm whether you should `import` images (recommended with Vite) or use `/src/...` paths.
  - Minimal project: there are no test frameworks or linters configured — avoid adding assumptions about tests unless you add configuration files.

- **Debugging tips specific to this repo**:
  - Runtime errors (e.g., undefined variables or JSX parse issues) show in browser console during `npm run dev` and will include file/line links that map to `src/*` files.
  - `npm run preview` fails if `npm run build` wasn't run first; prefer `npm run dev` for development.

- **When updating or refactoring**:
  - Keep `src/index.jsx` export/import shapes stable (default `App` import). If you change to a named export, update `index.jsx` accordingly.
  - Preserve `index.html` script entry (`/src/index.jsx`) unless you intentionally alter the build entry.

- **Merging guidance**:
  - If a previous `.github/copilot-instructions.md` exists, merge by preserving any project history/notes and adding or replacing only the actionable sections above.

- **Where to look for more context**: `package.json`, `vite.config.js`, `index.html`, and the `src/` folder — these files contain the complete runtime shape for local development.

If any of these assumptions are unclear, tell me which part you want expanded (build, assets, or component patterns) and I will update this file.
