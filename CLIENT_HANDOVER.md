# Kgotso BM Funeral Scheme Website Update

**Prepared for:** Kgotso BM Funeral Scheme  
**Prepared by:** Manus AI  
**Date:** 24 September 2026

## The website is ready for client review

The Kgotso BM Funeral Scheme website has been modernized into a focused, mobile-friendly experience that presents the company’s services, package options, contact details, operating hours, and visual work clearly. The final page order is intentional: visitors first see the homepage introduction, then the **Get a closer look** gallery, followed by the complete package register, contact information, and operating hours in the footer.

The website is available on the current Manus deployment.[1] Its editable static source is maintained in the Kgotso Funerals GitHub repository.[2]

## What visitors now see

The homepage opens with a dignified navy-and-gold presentation that introduces the business and directs visitors to the package register or WhatsApp. It displays the confirmed address, **1997 Corner Themba Street, Kagiso 2**, and keeps the company’s focus on respectful funeral support visible from the first screen.

Immediately below the homepage, the **Get a closer look** section presents six service photographs in a continuous horizontal image flow. The loop was corrected so all images remain present, move evenly, and reconnect without an obvious jump. Horizontal page drift was also removed, so the website no longer shifts sideways while scrolling.

## Seven packages are available from one clear register

The Packages section displays all seven confirmed options: **Premium at R285, Presidential at R325, Royal at R355, Plan A at R135, Plan B at R155, Plan C at R165, and Plan D at R185**. Every card includes a **View package** button.

Selecting a package opens an on-screen details panel rather than sending the visitor away from the page. The panel presents that plan’s included coffin or casket, member cover, waiting period, service items, notes, and grocery allocation where applicable. A close button returns the visitor to the package register. The panel also provides direct WhatsApp and telephone enquiry actions.

## Service imagery now loads before it is needed

The service presentation includes separate image groups for **Classy caskets, Cars with care, Cemetery decor, Flower sprays, and Branded refreshments**. The website preloads and decodes these images before starting the slideshows, which prevents blank cards when visitors reach the section.

All five categories use one synchronized timing system. Each image remains visible for **4.5 seconds**, and the next image enters through a **0.9-second crossfade**. Images advance in their defined order. The incoming image becomes visible before the outgoing image is removed, so the card never displays an empty navy frame.

Branded refreshments currently uses three different framed views of the same approved water-bottle photograph. This approach keeps the slideshow active without introducing unrelated imagery. Additional refreshment photographs can replace those views later without changing the slideshow system.

## Contact details and operating hours are consistent

The website uses the confirmed contact details throughout:

- **Office:** 010 109 6723
- **WhatsApp:** 071 985 4522
- **Alternative:** 061 533 6947
- **Email:** kgotsobmfuneralservices@gmail.com
- **Address:** 1997 Corner Themba Street, Kagiso 2

The Contact section uses compact icon-led buttons for telephone and WhatsApp actions. It also includes map, email, Facebook, TikTok, and WhatsApp links. The business operating hours now appear in the footer:

- **Monday–Friday:** 08:00–17:00
- **Saturday:** 08:00–13:00
- **Sunday:** Closed

The TikTok button currently opens the general TikTok website because an official Kgotso BM TikTok profile URL was not supplied. The client should provide the official profile address when available.

## Motion supports the content rather than hiding it

Major sections use gentle pop-up reveals as visitors scroll. Package details use a coordinated entrance animation, while the overlay enquiry buttons use a navy flicker treatment to attract attention. Reduced-motion settings are respected, allowing visitors who disable animation at operating-system level to view the content without unnecessary movement.

The layouts were checked at desktop and mobile sizes. Navigation collapses for smaller screens, package cards reflow into readable columns, contact information stacks cleanly, and the footer hours remain legible.

## What the client should review

The client should confirm that all package wording, prices, grocery quantities, telephone numbers, and legal details remain current. The client should also supply the official TikTok profile URL and any additional branded-refreshment photographs they want displayed. A custom domain can be connected separately when the preferred domain is confirmed.

## Source-code handover

The GitHub repository contains a dependency-free static website. The main editable files are `index.html`, `styles.css`, and `app.js`. All website images are stored inside `assets/`, including the package-carousel images that were previously served through Manus storage. This makes the repository portable for GitHub Pages or another standard static host.

The repository history preserves the earlier recovered version, while the latest commit records the completed redesign and this client handover document.[2]

## References

[1]: https://kgotsobmfune-mf82jqcs.manus.space "Kgotso BM Funeral Scheme live website"
[2]: https://github.com/qhawedlamini16/KgotsoFunerals "Kgotso Funerals GitHub repository"
