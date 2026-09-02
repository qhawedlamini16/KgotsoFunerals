# Kgotso BM Funeral Scheme

A readable static reconstruction of the published Kgotso BM Funeral Scheme website, recovered from the public deployment at `https://kgotsobmfun-sgvxhhr7.manus.space/`.

## Contents

The root `index.html`, `styles.css`, and `app.js` files form the editable static site. The `assets/` directory contains the visual assets referenced by the published deployment. The `recovered-reference/` directory preserves the downloaded published HTML, compiled JavaScript, compiled CSS, and manifest as a reference copy of the original deployment.

The source reconstruction preserves the public copy and key interactions: responsive navigation, gallery controls and thumbnails, package-plan switching, FAQ accordions, contact links, and review tabs. Contact destinations point to the phone numbers, WhatsApp number, email address, Facebook page, and map location shown on the published site.

## Local preview

Because this is a dependency-free static site, it can be previewed with any static web server. For example:

```bash
npx serve .
```

Then open the local URL printed by the server. The site can also be deployed through GitHub Pages from the repository root.

## Recovery note

A public deployment exposes the browser-facing bundle and assets, not the original private Manus project history or backend. This repository therefore contains a faithful, editable front-end reconstruction rather than the original Manus project files. No private credentials or server-side data were copied.

## Original deployment

`https://kgotsobmfun-sgvxhhr7.manus.space/`
