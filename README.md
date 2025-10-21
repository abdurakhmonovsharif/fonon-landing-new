# Fonon Jewellery React App

This project contains a Vite + React rebuild of the original `index-2.html` landing page, with all supporting assets migrated into the React toolchain. Styling and behaviour rely on the original theme assets that now live under `public/assets`.

## Getting Started

```bash
npm install
npm run dev
```

The development server runs on Vite with hot module replacement. All static CSS, JS plugins, images and fonts are served from `public/assets` as in the original template.

## Production Build

```bash
npm run build
npm run preview
```

The optimized assets are emitted in the `dist/` folder. Use `npm run preview` to verify the production build locally.

## Notes

- The jQuery-based theme scripts are still loaded from `public/index.html`, so DOM-driven widgets behave the same as in the original static page.
- Navigation links that previously pointed to other static `.html` files have been neutralized to `#` targets until matching React routes are implemented.
# fonon-landing
# fonon-landing-new
