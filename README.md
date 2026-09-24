# Kgotso BM Funeral Scheme

This repository contains the current static website for **Kgotso BM Funeral Scheme** in Kagiso, Gauteng. The site presents the company’s funeral packages, service imagery, contact channels, location, and operating hours in a responsive single-page experience.

The latest client-facing summary is available in [`CLIENT_HANDOVER.md`](CLIENT_HANDOVER.md). The live website is published through Manus.[1]

## Current website structure

The page opens with the company introduction, followed by the **Get a closer look** gallery. The seven-package register appears next, with detailed on-screen overlays for Premium, Presidential, Royal, and Plans A–D. The page then presents contact information and ends with the confirmed operating hours in the footer.

The service-image section includes synchronized slideshows for Classy caskets, Cars with care, Cemetery decor, Flower sprays, and Branded refreshments. Each slideshow uses a 4.5-second interval and a 0.9-second crossfade. Images are preloaded and decoded before the shared slideshow scheduler begins.

## Editing the site

The project is dependency-free. The main editable files are:

- `index.html` for structure and content
- `styles.css` for responsive layout, colors, and motion
- `app.js` for navigation, package overlays, gallery behavior, and slideshows
- `assets/` for all website imagery

Package-carousel files are stored in `assets/package-carousel/`. Images extracted from the supplied company documents are stored in `assets/pdf-gallery/`.

## Local preview

Run any static file server from the repository root. For example:

```bash
npx serve .
```

Open the local address printed by the command. The repository can also be deployed from its root directory through GitHub Pages or another static host.

## Confirmed business information

The website currently displays **1997 Corner Themba Street, Kagiso 2**. The listed numbers are **010 109 6723**, **071 985 4522**, and **061 533 6947**. Operating hours are Monday–Friday from 08:00 to 17:00, Saturday from 08:00 to 13:00, and Sunday closed.

## References

[1]: https://kgotsobmfune-mf82jqcs.manus.space "Kgotso BM Funeral Scheme live website"
[2]: https://github.com/qhawedlamini16/KgotsoFunerals "Kgotso Funerals GitHub repository"
