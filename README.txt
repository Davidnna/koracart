# KoraCart favicon update

This patch adds branded browser and mobile bookmark icons.

## Files

- `frontend/index.html` — references the new icon assets.
- `frontend/public/favicon.svg` — scalable SVG favicon.
- `frontend/public/favicon-32x32.png` — PNG browser fallback.
- `frontend/public/favicon.ico` — legacy browser fallback.
- `frontend/public/apple-touch-icon.png` — iOS home-screen icon.
- `frontend/public/icon-192.png` and `icon-512.png` — larger icon assets for future PWA use.

## Apply

Copy the included files into the matching paths in the KoraCart repository, replacing `frontend/index.html` and adding the icon assets under `frontend/public/`.

Vite copies files in `public/` to the root of the deployed site. No additional package installation is required.
